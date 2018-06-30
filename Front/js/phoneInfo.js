//初始化
mui.init();
//加载函数
mui.plusReady(function(){
	//获取安装用户手机信息，用于调试
	//设备的国际移动设备身份码 
	var imei = plus.device.imei;
	
	//设备的国际移动用户识别码 
	var imsi = plus.device.imei;
	
	//设备的型号 
	var model = plus.device.model;
	
	//设备的生产厂商 
	var vendor = plus.device.vendor;
	
	//设备的唯一标识 
	var uuid = plus.device.uuid;
	
	// 底层系统信息
	//系统语言信息
	var language = plus.os.language;
	
	// 系统版本信息
	var version = plus.os.version;
	
	//系统的名称
	
	var systemName = plus.os.version;
	
	//系统的供应商信息
	var systemVendor = plus.os.vendor;
	
	//设备屏幕信息
	//高
	var screenHeight = plus.screen.resolutionHeight*plus.screen.scale+"px";
	
	//宽
	var screenWidth = plus.screen.resolutionWidth*plus.screen.scale+"px";
	var strs = "<div style='text-algin:left;'><span style='font-size:10px;'>国际移动设备身份码 :"+imei+"</span><br/>"+"<span style='font-size:10px;'>国际移动用户识别码: "+imsi+"</span><br/><span style='font-size:10px;'>设备的型号: "+model+"</span><br/><span style='font-size:10px;'>设备的生产厂商: "+vendor+"</span><br/><span style='font-size:10px;'>设备的唯一标识:"+uuid+"</span><br/><span style='font-size:10px;'>系统语言:"+language+"</span><br/>"+
	"<span style='font-size:10px;'>系统版本信息:"+version+"</span><br/><span style='font-size:10px;'>系统的名称:"+systemName+"</span><br/>"+"<span style='font-size:10px;'>系统的供应商信息:"+systemVendor+"</span><br/>"+"<span style='font-size:10px;'>分辨率:"+screenHeight + "*"+ screenWidth+"</span></div>";
	//mui.alert('设备信息',strs,'确定',function(){},'div');
});