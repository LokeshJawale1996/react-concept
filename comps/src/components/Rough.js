const data = [5,1,4,3];

data.sort((a,b) => {
    return a-b;
});

const data1 = [
{name:"Tomato",cost:10,weight:5},
{name:"Carrot",cost:15,weight:2},
{name:"Onion",cost:5,weight:7}
]
function getSortValue(vegatable){
    return vegatable.name;
}

data1.sort((a,b)=>{
const valueA = getSortValue(a);
const valueB= getSortValue(b);

if(typeof valueA === 'string'){
return valueA.localeCompare(valueB);

}else{
    return valueA - valueB
}

})