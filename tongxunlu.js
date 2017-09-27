window.addEventListener('load',function(){
let dl = document.querySelector('dl');
// console.log(dl)
let info = [
    {name:'陈一',tel:15534092506,pinyin:'chenyi'},
    {name:'曹二',tel:15834063516,pinyin:'caoer'},
    {name:'张三',tel:15534092507,pinyin:'zhangsan'},
    {name:'李四',tel:15534092508,pinyin:'lisi'},
    {name:'王五',tel:15534092509,pinyin:'wangwu'},
    {name:'赵六',tel:15534092510,pinyin:'zhaoliu'},
    {name:'田七',tel:15534092511,pinyin:'tianqi'},
    {name:'周八',tel:15534092512,pinyin:'zhouba'},
    {name:'钱九',tel:15534092513,pinyin:'qianjiu'},
    {name:'郑十',tel:15534092514,pinyin:'zhengshi'}
];
  function render (arr){
      dl.innerHTML='';
      let obj={};
      arr.forEach(function(element){
          let first = element.pinyin.charAt(0).toUpperCase();
          // first=Z,L,W...
          if(!obj[first]){
              obj[first]=[];
          }
          obj[first].push(element);
          // console.log(obj[first])-----放的是info中的{}，是个数组
          // console.log(obj)---------------是一个对象，里面的元素是每个数组
      })


      let char = Object.keys(obj).sort();
      // console.log(char)----------返回一个数组，L,W,C
      // Object.keys()-----------获取指定对象的属性名
      char.forEach(function(element){
          dl.innerHTML+=`
      <dt>${element}</dt>`;
          obj[element].forEach(function(value){
              dl.innerHTML+=`<dd><a href="tel:${value.tel}">${value.name}</a></dd>`
          })
      })
      
  }

    render(info);













})