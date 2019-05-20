<template>
<div>
 
<div v-for="event_one of Events" v-bind:class="[event_one, {  'style1':true  }]">{{event_one}}</div>
   

<!--
<div style="background-color: 	#E0201B; " class="style1" >test</div>
<div style="background-color: #F98822; " class="style1" >test</div>
<div style="background-color:	#ECE243; " class="style1" >test</div>
<div style="background-color: #8BC7DF; " class="style1" >test</div>
<div style="background-color: #40809B; " class="style1" >test</div>
-->



</div>
</template>


<script>
import BootstrapVue from 'bootstrap-vue'
//import moment from "moment";
export default {
  name: "oneEvent",
  props: {
    date: {
      type: Object
    }
  },
  data() {
    return {
      Events: ["Meeting", "Conference", "Revue", "Custimer", "Results"], //добавила данные
    };
  },
  computed: {
    getDay: function() { //получаем текущую дату
        
    }
  }
};



</script>

<style>
.style1 {
  margin: 5px;
  padding: 3px; 
  border-radius: 5px;

}

.Meeting {
background-color: 	#E0201B;
}

.Conference{
background-color: #F98822;
}
.Revue
{
background-color:	#ECE243;
}
.Customer{
background-color: #8BC7DF;
}
.Results
{
background-color: #40809B;
}


</style>
