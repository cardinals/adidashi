//检测登录用户名和密码是否为空
//初始化MUI主函数
mui.init();
//子函数开始
mui.plusReady(function(){
	plus.ui.toast('验证通过');
	//获取登录按钮ID
	var login = document.getElementById("userLogin");
	//给按钮绑定时间
	login.addEventListener('tap',function(){
		var name = document.getElementById("username");
		var psw = document.getElementById("userpassword");
		if(name.value.length==0){
			plus.ui.toast('用户名不能为空');
			return;
		} else if(psw.value.length==0){
			plus.ui.toast('密码不能为空');
			return;
		} else{
			plus.ui.toast('验证通过');
		}
	});
});