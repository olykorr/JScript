<template>
<div class="container">
  <div class="row">
    <div class="col-10">
    <div  style="max-width: 700%;" class="col">

    <div class="row"><!--start1-->

      <!--start-->
      <div class="col" style="max-width: 270px;">
           <div class="col-auto">
               <div class="up_key" v-on:click="nextMonth()" style="text-align: center;">&#9650</div>
           </div>
           <div class="col text-center">
            <h4>  <v-select v-model="month" :options="months"></v-select></h4>
           </div>
           <div class="col-auto">
               <div class="down_key" v-on:click="previusMonth()" style="text-align: center;">&#9660</div>
           </div>
      </div>
      <!--end-->

    <div class="col-auto">

        <div class="col">
          <div class="col-auto">
            <div class="up_key" v-on:click="nextYear()" style="text-align: center;">&#9650</div>
          </div>
          <div class="col text-center" style="padding: 5px;">
            <h4>{{year}}</h4>
          </div>
          <div class="col-auto">
            <div class="down_key " v-on:click="previusYear()" style="text-align: center;">&#9660</div>
          </div>
        </div>
    </div>

    <div class="col-auto" style="width: 150px; padding: 10px;">
        <div><input type="checkbox" class="form-check-input" id="inlineFormCheck" style="text-align: center; padding: 5px;" v-model="checkedDaySun" ></div><br>
        <div><label class="form-check-input" for="inlineFormCheck" style="text-align: center;"><h6>Week from Sun {{checkedDaySun}}</h6></label></div>
    </div>

  </div><!--end start1-->

  <div class="row">
      <div class="col">
        <table class="table table-bordered table-sm">
          <thead>
            <tr>
              <th v-for="dayName of WeekFromMon" class="text-center" v-if="!checkedDaySun">
                {{dayName}} <!--строим заголовок таблици дни недели-->
              </th>
              <th v-for="dayName of WeekFromSun" class="text-center" v-if="checkedDaySun">
                {{dayName}} <!--строим заголовок таблици дни недели-->
              </th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="row of getDay" v-if="!checkedDaySun">
              <td v-for="cel of row">
                <day v-bind:date="cel"/>
              </td>
            </tr>
            <tr v-for="row of getDaySun" v-if="checkedDaySun">
              <td v-for="cel of row">
                <day v-bind:date="cel"/>
              </td>
            </tr>
          </tbody>
        </table>



      </div>
    </div>

  </div>
    </div>
    <div class="col">
    <!--<eventView/>-->
    Here will be secomd block


    </div>
  </div>
</div>




</template>
<script>
import moment from "moment";
import day from "./day";
//import eventAdd from "./eventAdd";
//import eventView from "./eventView";
import vSelect from "vue-select";
import BootstrapVue from 'bootstrap-vue'
var today = new Date();
//alert (today);

export default {
  name: "calendar",
  components: { day, "v-select": vSelect },
  props: {
      displayDate: {
      type: String,
      default() {
       // return this.MakeDat();
      var d= new Date();
      var day=d.getDate();
      var month=d.getMonth() + 1;
      var year=d.getFullYear();
      var curdate=(year + "-" + month + "-" + day);
      return curdate;
      }
    }
  },

  data() {
    return {
      WeekFromMon: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], //добавила данные
      WeekFromSun: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      checkedDaySun: false,
      firstDayOfWeek: "",
      date: "",
      month: "",
      year: ""
    };
  },

  computed: {
  getDay: function() {
    var n=0;
      var n=0;
    if (this.checkedDaySun)
    {
      var n=1;
    };

    var dat = new Date(this.firstDayOfWeek-n);
    var d = new Date();
    let result = [];
    for (let i = 1; i <= 6; i++) {
      let row = [];
      for (let j = 1; j <= 7; j++) {
      var day=dat.getDate();
      var month=dat.getMonth() + 1;
      var year=dat.getFullYear();
      var curdate=(year + "-" + month + "-" + day);
      const data = {
            date: curdate,
            isSame: this.isSame(dat),
            isHoliday: this.isHoliday(dat)
        };
        if (d.getFullYear()===dat.getFullYear()&& d.getMonth()===dat.getMonth()&& d.getDate()===dat.getDate()) {
          data.current = true;
        }
        row.push(data);
        var dateValue = dat.getDate()+1;
        dat.setDate(dateValue);
      }
      result.push(row);
    }
    return result;
  },

  getDaySun: function() {
  var dat = new Date(this.firstDayOfWeek-1);
  var d = new Date();
  let result = [];
  for (let i = 1; i <= 6; i++) {
    let row = [];
    for (let j = 1; j <= 7; j++) {
    var day=dat.getDate();
    var month=dat.getMonth() + 1;
    var year=dat.getFullYear();
    var curdate=(year + "-" + month + "-" + day);
    const data = {
          date: curdate,
          isSame: this.isSame(dat),
          isHoliday: this.isHoliday(dat)
      };
      if (d.getFullYear()===dat.getFullYear()&& d.getMonth()===dat.getMonth()&& d.getDate()===dat.getDate()) {
        data.current = true;
      }
      row.push(data);
      var dateValue = dat.getDate()+1;
      dat.setDate(dateValue);
    }
    result.push(row);
  }
  return result;
  }
},

MakeDat: function(){
  var d= new Date();
  var day=d.getDate();
  var month=d.getMonth() + 1;
  var year=d.getFullYear();
  var curdate=(year + "-" + month + "-" + day);
  return curdate;
},


  methods: {
    nextYear: function() {
      var day = new Date(this.date);
      this.date = day.setFullYear(day.getFullYear() + 1);
    },

    previusYear: function() {
      var day = new Date(this.date);
      this.date = day.setFullYear(day.getFullYear() - 1);
    },

    nextMonth: function() {
      var day = new Date(this.date);
      this.date= day.setMonth(day.getMonth()+ 1);
    },

    previusMonth: function() {
      var day = new Date(this.date);
      this.date= day.setMonth(day.getMonth()- 1);
    },

    setFirstDayOfMonth: function() {
      const firstDayOfMonth = this.getfirstDayOfMonth(this.date);
      const firstDayOfWeek = this.getMonday(firstDayOfMonth);
      this.firstDayOfWeek = firstDayOfWeek;
    },

    getfirstDayOfMonth: function(yourDate) {
      yourDate = new Date(yourDate);
      return new Date(yourDate.getFullYear(), yourDate.getMonth(), 1);
    },

    getMonday: function(d) {
      d = new Date(d);
      var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
      return new Date(d.setDate(diff));
    },

  isSame: function(date) {
    const d = new Date(this.date);
    const d1 = new Date(date);
    if (d.getFullYear()===d1.getFullYear()&& d.getMonth()===d1.getMonth())
      {
        return true;
      }
      return false;
    },

  isHoliday: function(date){
    const d = new Date(date);
    if(this.getWeekDay(d)==="Sat"||this.getWeekDay(d)==="Sun")
    {
      return true;
    }
    return false;
  },

    getWeekDay: function(data){
      var days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return days[data.getDay()];
    },

    getMonthName: function(data){
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const d = new Date(data);
      this.month=monthNames[d.getMonth()];
      return this.month;
    },

    getYearName: function(data){
      const d = new Date(data);
      this.year = d.getFullYear();
      return this.year;
  }
  },

  watch: {
    month: function(newVal) {
      if (newVal != null) {
      this.date  = new Date(this.date);
      }
    },
    year: function(newVal) {
      if (newVal != null) {
      this.date=new Date(this.date);
      }
    },

    date: function(newVal) {
      this.month = this.getMonthName(this.date);
      this.year = this.getYearName(this.date);
      this.setFirstDayOfMonth();
    }


  },
  created() {
    this.date = this.displayDate;
    this.months = [ "January", "February",
    "March", "April", "May",
    "June", "July", "August",
     "September", "October", "November", "December" ];
   // alert ( this.months );
    this.setFirstDayOfMonth();
  }
};

</script>
