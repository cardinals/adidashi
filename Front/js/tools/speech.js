function speak(contents) {
	//语音输入
	var speaktext = contents; //传入的值是需要播报的内容  
	switch(plus.os.name) {
		case "iOS":
			var AVSpeechSynthesizer = plus.ios.importClass("AVSpeechSynthesizer");
			var AVSpeechUtterance = plus.ios.importClass("AVSpeechUtterance");
			var AVSpeechSynthesisVoice = plus.ios.import("AVSpeechSynthesisVoice");
			var sppech = new AVSpeechSynthesizer();
			var voice = AVSpeechSynthesisVoice.voiceWithLanguage("zh-CN");
			var utterance = AVSpeechUtterance.speechUtteranceWithString(speaktext);
			utterance.setVoice(voice);
			sppech.speakUtterance(utterance);
			plus.ios.deleteObject(voice);
			plus.ios.deleteObject(utterance);
			plus.ios.deleteObject(sppech);
			break;
		case "Android":
			var main = plus.android.runtimeMainActivity();
			var SpeechUtility = plus.android.importClass("com.iflytek.cloud.SpeechUtility");
			SpeechUtility.createUtility(main, "appid=H564049FB");
			var SynthesizerPlayer = plus.android.importClass("com.iflytek.cloud.SpeechSynthesizer");
			var play = SynthesizerPlayer.createSynthesizer(main, null);
			play.startSpeaking(speaktext, null);
			break;
	}
}