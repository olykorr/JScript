<template>
  <div v-bind:class="{ currentDay: date.current, 'day':true}">
    <div v-bind:class="{ holiday: date.isHoliday, active: date.isSame, notActive: !date.isSame, 'day-number':true }">{{getDay}}</div>
    <oneEvent/>
  </div>
</template>
<script>
//import moment from "moment";
import oneEvent from "./oneEvent";
var day=new Date();
export default {
  name: "day",
  props: {
    date: {
      type: Object
    }
  },
  components: {
    oneEvent
  },
  data() {
    return {};
  },
  computed: {
    getDay: function() { //получаем текущую дату
        var d=new Date(this.date.date);
        return d.getDate();
    }
  }
};



</script>

<style scoped>
.active.day-number {
  color: black;
}

.holiday.day-number{
  color: red;

}

.notActive.day-number {
  color: grey;
}
.day {
  min-height: 50px;
  text-align: center;
  font-size: 12px;
}
.day.currentDay .day-number {
  font-size: 16px;
  color: blue;
}

.day.rest .day-number {
  font-size: 16px;
  color: red;
}

.day-number {
  text-align: left;
  font-size: 16px;
  font-weight: bold;
}
</style>
