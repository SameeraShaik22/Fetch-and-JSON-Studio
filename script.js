// TODO: add code here 
window.addEventListener("load", function () {
   
   /*let fetchPromise = fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
      response.json().then(function (json) {
         console.log(json)
         const container = document.getElementById("container")
        
      })
   })*/
let json=getjson()
console.log(json)

let container=document.getElementById("container")
for(let i=0;i<json.length;i++){
   if(json[i].active===true){

  container.innerHTML+=`<div class="astronautGreen">
  <div class="bio">
     <h3>${json[i].firstName}</h3>
     <h3>${json[i].lastName}</h3>
     <ul>
        <li>Hours in space: ${json[i].hoursInSpace}</li>
        <li>Active: ${json[i].active}</li>
        <li>Skills: ${json[i].skills}</li>
     </ul>
  </div>
  <img class="avatar" src=${json[i].picture}>
</div>`  
}
else if(json[i].active===false){

   container.innerHTML+=`<div class="astronaut">
   <div class="bio">
      <h3>${json[i].firstName}</h3>
      <h3>${json[i].lastName}</h3>
      <ul>
         <li>Hours in space: ${json[i].hoursInSpace}</li>
         <li>Active: ${json[i].active}</li>
         <li>Skills: ${json[i].skills}</li>
      </ul>
   </div>
   <img class="avatar" src=${json[i].picture}>
 </div>`  
 }

}
console.log(json.length)
})


function getjson(){
   let obj1={
      "id": 1,
      "active": false,
      "firstName": "Mae",
      "lastName": "Jemison",
      "skills": [
            "Physician", "Chemical Engineer"
      ],
      "hoursInSpace": 190,
      "picture": "mae-jemison.jpg"
   };
let obj2={
   "id": 2,
   "active": false,
   "firstName": "Frederick",
   "lastName": "Gregory",
   "skills": [
         "Information Systems", "Shuttle Pilot", "Fighter Pilot", "Helicopter Pilot", "Colonel USAF"
   ],
   "hoursInSpace": 455,
   "picture": "frederick-gregory.jpg"
};
let obj3={ 
   "id": 3,
   "active": false,
   "firstName": "Ellen",
   "lastName": "Ochoa",
   "skills": [
         "Physics", "Electrical Engineer"
   ],
   "hoursInSpace": 979,
   "picture": "ellen-ochoa.jpg"
};
let obj4={
   "id": 4,
   "active": false,
   "firstName": "Guion",
   "lastName": "Bluford",
   "skills": [
         "Aerospace Engineer", "Philosophy", "Physics", "Colonel USAF",
         "Fighter Pilot"
   ],
   "hoursInSpace": 686,
   "picture": "guion-bluford.jpg"
};
let obj5=  {
   "id": 5,
   "active": false,
   "lastName": "Ride",
   "skills": [
      "Physicist", "Astrophysics"
   ],
   "hoursInSpace": 343,
   "picture": "sally-ride.jpg"
};
let obj6={
   "id": 6,
   "active": true,
   "firstName": "Kjell",
   "firstName": "Sally",
   "lastName": "Lindgren",
   "skills": [
         "Physician", "Surgeon", "Emergency Medicine"
   ],
   "hoursInSpace": 15,
   "picture": "kjell-lindgren.jpg"
};
let obj7= {
   "id": 7,
   "active": true,
   "firstName": "Jeanette",
   "lastName": "Epps",
   "skills": [
         "Physicist", "Philosophy", "Aerospace Engineer"
   ],
   "hoursInSpace": 0,
   "picture": "jeanette-epps.jpg"
};

   let arr=[]
   arr.push(obj1,obj2,obj3,obj4,obj5,obj6,obj7)
   return arr
  /* return `[
      {
         "id": 1,
         "active": false,
         "firstName": "Mae",
         "lastName": "Jemison",
         "skills": [
               "Physician", "Chemical Engineer"
         ],
         "hoursInSpace": 190,
         "picture": "mae-jemison.jpg"
      },
      {
         "id": 2,
         "active": false,
         "firstName": "Frederick",
         "lastName": "Gregory",
         "skills": [
               "Information Systems", "Shuttle Pilot", "Fighter Pilot", "Helicopter Pilot", "Colonel USAF"
         ],
         "hoursInSpace": 455,
         "picture": "frederick-gregory.jpg"
      },
      {
         "id": 3,
         "active": false,
         "firstName": "Ellen",
         "lastName": "Ochoa",
         "skills": [
               "Physics", "Electrical Engineer"
         ],
         "hoursInSpace": 979,
         "picture": "ellen-ochoa.jpg"
      },
      {
         "id": 4,
         "active": false,
         "firstName": "Guion",
         "lastName": "Bluford",
         "skills": [
               "Aerospace Engineer", "Philosophy", "Physics", "Colonel USAF",
               "Fighter Pilot"
         ],
         "hoursInSpace": 686,
         "picture": "guion-bluford.jpg"
      },
      {
         "id": 5,
         "active": false,
         "lastName": "Ride",
         "skills": [
            "Physicist", "Astrophysics"
         ],
         "hoursInSpace": 343,
         "picture": "sally-ride.jpg"
      },
      {
         "id": 6,
         "active": true,
         "firstName": "Kjell",
         "firstName": "Sally",
         "lastName": "Lindgren",
         "skills": [
               "Physician", "Surgeon", "Emergency Medicine"
         ],
         "hoursInSpace": 15,
         "picture": "kjell-lindgren.jpg"
      },
      {
         "id": 7,
         "active": true,
         "firstName": "Jeanette",
         "lastName": "Epps",
         "skills": [
               "Physicist", "Philosophy", "Aerospace Engineer"
         ],
         "hoursInSpace": 0,
         "picture": "jeanette-epps.jpg"
      }
   ]`;*/
}