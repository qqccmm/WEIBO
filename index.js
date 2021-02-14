/* ziye 
github地址 https://github.com/ziye12
TG频道地址  https://t.me/ziyescript
TG交流群   https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接  https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/ziye.boxjs.json

  

 ⚠️操作方法

  设置index为1    不可手动测试，可以分开定时设置任务，
    如果想在一个定时触发器里面执行js文件，需要在定时触发器的【附加信息】里面填写对应的名称，多个js用 & 链接
    例如   我想在一个定时触发器里执行xiaole.js，在定时触发器的【附加信息】里面就填写 xiaole
    我想在一个定时触发器里执行xiaole.js和flw.js，在定时触发器的【附加信息】里面就填写 xiaole&flw
    

  设置index为2   【附加信息】不影响触发   可手动测试，不可分开定时任务，一个定时可运行多个任务,在jsname里填写想要运行的js的名字
     如果想定时触发执行js文件，需要在jsname里面填写对应的名称
     例如   我想定时触发执行xiaole.js，在 jsname[] 里面填写 'xiaole'
     我想定时触发执行xiaole.js和flw.js，在 jsname[] 里面填写 'xiaole','flw'
*/


  index = 2 
  
  
  jsname=['weibo']











  if (index==1){

exports.main_handler = async (event, context, callback) => {
  try {
    
    for (const v of event["Message"].split("&")) {
      console.log(v);
      var request = require('request');
      //1.执行自己上传的js文件
      delete require.cache[require.resolve('./'+v+'.js')];
      require('./'+v+'.js')
 /*
    
      2.执行国内gitee远端js文件如果部署，在国内节点，选择1或2的方式
      request('https://gitee.com/ziye12/JavaScript/main/Task/'+v+'.js', function (error, response, body) {
       eval(response.body)
      })

      3.执行github远端的js文件(因github的raw类型的文件被墙,此方法云函数不推荐)
      request('https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/' + v + '.js', function (error, response, body) {
        eval(response.body)
      })

      */

    }
  } catch (e) {
    console.error(e)
  }
}


}


if (index==2){
'use strict';
exports.main_handler = async (event, context, callback) => {
  //解决云函数热启动问题

if (jsname.length>= 1){
  delete require.cache[require.resolve(`./${jsname[0]}.js`)];
  require(`./${jsname[0]}.js`) 
}
if (jsname.length>= 2){
  delete require.cache[require.resolve(`./${jsname[1]}.js`)];
  require(`./${jsname[1]}.js`) 
}
if (jsname.length>= 3){
  delete require.cache[require.resolve(`./${jsname[2]}.js`)];
  require(`./${jsname[2]}.js`) 
}
if (jsname.length>= 4){
  delete require.cache[require.resolve(`./${jsname[3]}.js`)];
  require(`./${jsname[3]}.js`) 
}
if (jsname.length>= 5){
  delete require.cache[require.resolve(`./${jsname[4]}.js`)];
  require(`./${jsname[4]}.js`) 
}




}

}