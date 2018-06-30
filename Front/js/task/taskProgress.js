//初始化MUI
mui.init();
//加载预加载函数
mui.plusReady(function() {
	var self = plus.webview.currentWebview();
	var m = self.me;
	getTaskByMe(m);
	/*mui(".lookTask").on("tap", ".mui-btn-danger", function() {
		mui.openWindow({
			url: 'myGets.html',
			id: 'myGets'
		});
	});*/
	mui('#myPublishTasks').on("tap", ".mui-btn-danger", function() {
		var s = this.getAttribute("id");
		mui.ajax({
			url:'http://47.96.156.75/public/index/task/gettaskinfo',
			dataType:'json',
			type:'post',
			async:true,
			data:{id:s},
			header:{'Conetnt-Type':'application/json'},
			success:function(data){
				var state = JSON.parse(data);
				if(state.task_state == '否'){
					mui.openWindow({
						url: 'myPublished.html',
						id: 'myPublished',
						extras:{
							u:s
						}
					});
				} else if(state.task_state == '是'){
					mui.openWindow({
						url: 'myPublish.html',
						id: 'myPublish',
						extras:{
							name:s
						}
					});
				}
			}
			,error:function(xhr,type,errorThrown){
				mui.toast('异常:'+type);
			}
		});
	});
	mui("#myGetTasks").on("tap",".mui-btn-danger",function(){
		var gid = this.getAttribute("id");
		mui.ajax({
					url:'http://47.96.156.75/public/index/task/gettaskinfo',
					dataType:'json',
					type:'post',
					async:false,
					data:{id:gid},
					header:{'Conetnt-Type':'application/json'},
					success:function(data){
						json = JSON.parse(data);
						if(json.task_complete == 0){
							mui.openWindow({
								url:'myGets.html',
								id:'myGets',
								extras:{
									gid:gid
								}
							});
						} else{
							mui.openWindow({
								url:'myGet.html',
								id:'myGet',
								extras:{
									taskId:gid
								}
							});
						}
					},
					error:function(xhr,type,errorThrown){
						mui.toast('异常：'+type);
					}
				});
	});
	document.getElementById("mygettask").addEventListener("tap",function(){
		myGetTask(m);
	});
});
//获取所有我发布的任务
function getTaskByMe(id){
	plus.nativeUI.showWaiting('数据加载中...');
	mui.ajax({
		url:'http://47.96.156.75/public/index/task/getmytask',
		dataType:'json',
		type:'post',
		async:true,
		data:{my:id},
		header:{'Conetnt-Type':'application/json'},
		success:function(data){
			var json = JSON.parse(data);
			var strs = "";
			if(json.code == '200'){
				plus.nativeUI.closeWaiting();
				for(var i = 0; i < json.datas.length; i ++){
					strs+="<div><div><h3>"+json.datas[i].task_title+"</h3><h4>"+json.datas[i].task_start_time+"</h4></div>"+
					"<div class='lookPro'><button type='button' class='mui-btn mui-btn-danger' id='"+json.datas[i].id+"'>查看进度</button></div></div>";
				}
				document.getElementById("myPublishTasks").innerHTML = strs;
			} else if(json.code == '202'){
				plus.nativeUI.closeWaiting();
				document.getElementById("myPublishTasks").innerHTML = "<div style='margin:25%; margin-left:0px; height:auto; border:none;' align='center'><img src='../tipImages/noptask.png'/></div>"
				mui.toast('你还没有发布任何任务');
			}
		},
		error:function(xhr,type,errorThrown){
			mui.toast("异常:"+type);
		}
	});
}
//获取所有我领取的
function myGetTask(id){
	plus.nativeUI.showWaiting('数据加载中...');
	mui.ajax({
		url:'http://47.96.156.75/public/index/task/mygettask',
		dataType:'json',
		type:'post',
		async:true,
		data:{my:id},
		header:{'Conetnt-Type':'application/json'},
		success:function(data){
			var json = JSON.parse(data);
			var strs = "";
			if(json.code == '200'){
				plus.nativeUI.closeWaiting();
				for(var i = 0; i < json.datas.length; i ++){
					strs+="<div class='myget'><div><h3>"+json.datas[i].task_title+"</h3><h4>"+json.datas[i].task_start_time+"</h4></div>"+
					"<div class='lookPro'><button type='button' class='mui-btn mui-btn-danger' id='"+json.datas[i].id+"'>任务详情</button></div></div>";
				}
				document.getElementById("myGetTasks").innerHTML = strs;
			} else if(json.code == '202'){
				plus.nativeUI.closeWaiting();
				document.getElementById("myGetTasks").innerHTML = "<div style='margin:25%; margin-left:0px; height:auto; border:none;' align='center'><img src='../tipImages/noGetTask.png'/></div>"
				mui.toast('你还没有领取任何任务');
			}
		},
		error:function(xhr,type,errorThrown){
			mui.toast("异常:"+type);
		}
	});
}
