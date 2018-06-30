mui.init();
mui.plusReady(function(){
	plus.nativeUI.showWaiting('加载数据中...');
	//获取登录用户的手机号
	
		var usernumber = localStorage.getItem("user");
	//根据手机号查询账号相关信息
	mui.ajax({
		url:'http://47.96.156.75/public/index/account/queryaccounts',
		type:'post',
		data:{phone:usernumber},
		dataType:'json',
		async:false,
		header:{'Conetnt-Type':'application/json'},
		timeout:10000,
		success:function(data){
			account = JSON.parse(data);
			if(account[0].allpay == 0 || account[0].allpay == undefined){
				document.getElementById("accountBalane").textContent = 0;
				plus.nativeUI.closeWaiting();
			} else{
				document.getElementById("accountBalane").textContent = account[0].allpay;
				plus.nativeUI.closeWaiting();
			}
		},
		error:function(xhr,type,errorThrown){
			mui.toast('异常:与服务器连接失败，请稍后再试！');
			plus.nativeUI.closeWaiting();
		} 
	});
	//提现余额
	mui.ajax({
		url:'http://47.96.156.75/public/index/incomeoutlog/getdraw',
		type:'post',
		data:{user:usernumber,type:4},
		async:false,
		dataType:'json',
		header:{'Conetnt-Type':'application/json'},
		success:function(data){
			if(data == 0 || data == undefined){
				document.getElementById("tixianBalance").textContent = 0;
				plus.nativeUI.closeWaiting();
			} else{
				document.getElementById("tixianBalance").textContent = data;
				plus.nativeUI.closeWaiting();
			}
		},
		error:function(xhr,type,errorThrown){
			mui.toast('异常:'+errorThrown);
		} 
	});
	//查询银行卡
	mui.ajax({
		url: 'http://47.96.156.75/public/index/account/queryBank',
		type: 'post',
		data: {
			bankphone: usernumber
		},
		dataType: 'json',
		async: false,
		header: {
			'Conetnt-Type': 'application/json'
		},
		success: function(data) {
			bank = JSON.parse(data);
			plus.nativeUI.closeWaiting();
			document.getElementById("accountCard").textContent = bank.length;
		},
		error: function(xhr, type, errorThrown) {
			mui.toast('异常:' + xhr);
		}
	});
});

