/**
 * Created by caoyi on 2016/11/10.
 */
console.log(module.exports);

exports= function(){
    console.log('dsfa');
};
 //执行 node E:\node_study\file_path_study\app.js

 console.log('*** app start ***');

 console.log('***      module.filename = ' + module.filename + ' ***');
 console.log('***           __filename = ' + __filename + ' ***');
 console.log('***            __dirname = ' + __dirname + ' ***');
 console.log('***        process.cwd() = ' + process.cwd() + ' ***');
console.log('*** require.main.filename= ' + require.main.filename + ' ***');

 console.log('*** app end ***');

 console.log('');

