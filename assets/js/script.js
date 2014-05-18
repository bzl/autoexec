$(document).ready(function(){

	$('#downloadButton').click(function(e){

		$.generateFile({
			filename	: 'autoexec.cfg',
			content		: $('#finalConfig').val(),
			script		: 'download.php'
		});

		e.preventDefault();
	});

	$('#updateButton').click(function(e){

		$("#finalConfig").text('//Autoexec file generated by bzl.no \n\n');

		var rates = [];

		$('#finalConfig').append("//Rates\n");
		rates.push("rate \""+$('#rate').val());
		rates.push("cl_cmdrate \""+$('#cl_cmdrate').val());
		rates.push("cl_updaterate \""+$('#cl_updaterate').val());
		rates.push("cl_interp \""+$('#cl_interp').val());
		rates.push("cl_interp_ratio \""+$('#cl_interp_ratio').val());
		rates.push("cl_lagcompensation \""+($("#cl_lagcompensation").prop("checked") ? "1" : "0"));

		for ( var i = 0; i < rates.length; i = i + 1 ) {
			$('#finalConfig').append(rates[ i ]+'\"\n');
		}

		$('#finalConfig').append('\n\n');

		var audio = [];

		$('#finalConfig').append("//Audio\n");

		audio.push("volume \""+$('#volume').val());
		audio.push("voice_enable \""+($("#voice_enable").prop("checked") ? "1" : "0"));
		audio.push("voice_scale \""+$('#voice_scale').val());
		audio.push("windows_speaker_config \""+$('#windows_speaker_config').val());
		audio.push("snd_musicvolume \""+$('#snd_musicvolume').val());
		audio.push("snd_mixahead \""+$('#snd_mixahead').val());
		audio.push("snd_headphone_pan_exponent \""+$('#snd_headphone_pan_exponent').val());
		audio.push("snd_headphone_pan_radial_weight \""+$('#snd_headphone_pan_radial_weight').val());
		audio.push("snd_legacy_surround \""+($("#snd_legacy_surround").prop("checked") ? "1" : "0"));
		audio.push("snd_mute_losefocus \""+($("#snd_mute_losefocus").prop("checked") ? "1" : "0"));
		audio.push("lobby_voice_chat_enabled \""+($("#lobby_voice_chat_enabled").prop("checked") ? "1" : "0"));

		for ( var i = 0; i < audio.length; i = i + 1 ) {
			$('#finalConfig').append(audio[ i ]+'\"\n');
		}

		$('#finalConfig').append('\n\n');

		var video = [];

		$('#finalConfig').append("//Video\n");
		//video.push("mat_setvideomode \""+$('#mat_setvideomode').val());
		video.push("mat_monitorgamma \""+$('#mat_monitorgamma').val());
		video.push("mat_queue_mode \""+$('#mat_queue_mode').val());
		video.push("mat_vsync \""+($("#mat_vsync").prop("checked") ? "1" : "0"));
		video.push("fps_max \""+$('#fps_max').val());
		video.push("fps_max_menu \""+$('#fps_max_menu').val());
		video.push("r_dynamic \""+($("#r_dynamic").prop("checked") ? "1" : "0"));
		video.push("r_drawtracers_firstperson \""+($("#r_drawtracers_firstperson").prop("checked") ? "1" : "0"));
		video.push("mat_savechanges //write settings to registry");

		for ( var i = 0; i < video.length; i = i + 1 ) {
			$('#finalConfig').append(video[ i ]+'\"\n');
		}

		$('#finalConfig').append('\n\n');

		var mouse = [];

		$('#finalConfig').append("//Mouse\n");
		mouse.push("sensitivity \""+$('#sensitivity').val());
		mouse.push("zoom_sensitivity_ratio_mouse \""+$('#zoom_sensitivity_ratio_mouse').val());
		mouse.push("m_rawinput \""+($("#m_rawinput").prop("checked") ? "1" : "0"));
		mouse.push("m_customaccel \""+$('#m_customaccel').val());

		for ( var i = 0; i < mouse.length; i = i + 1 ) {
			$('#finalConfig').append(mouse[ i ]+'\"\n');
		}

		$('#finalConfig').append('\n\n');

		var misc = [];

		$('#finalConfig').append("//Misc\n");
		misc.push("developer \""+($("#developer").prop("checked") ? "1" : "0"));
		misc.push("con_enable \""+($("#con_enable").prop("checked") ? "1" : "0"));
		misc.push("con_filter_enable \""+$('#con_filter_enable').val());
		misc.push("con_filter_text \""+$('#con_filter_text').val());
		misc.push("con_filter_text_out \""+$('#con_filter_text_out').val());
		misc.push("ui_steam_overlay_notification_position \""+$('#ui_steam_overlay_notification_position').val());
		misc.push("player_nevershow_communityservermessage \""+($("#player_nevershow_communityservermessage").prop("checked") ? "1" : "0"));
		misc.push("mm_dedicated_search_maxping \""+$('#mm_dedicated_search_maxping').val());
		misc.push("gameinstructor_enable \""+($("#gameinstructor_enable").prop("checked") ? "1" : "0"));
		misc.push("option_duck_method \""+($("#option_duck_method").prop("checked") ? "1" : "0"));
		misc.push("option_speed_method \""+($("#option_speed_method").prop("checked") ? "1" : "0"));
		misc.push("cl_forcepreload \""+($("#cl_forcepreload").prop("checked") ? "1" : "0"));
		misc.push("cl_downloadfilter \""+$('#cl_downloadfilter').val());
		misc.push("cl_disablehtmlmotd \""+($("#cl_disablehtmlmotd").prop("checked") ? "1" : "0"));
		misc.push("cl_autohelp \""+($("#cl_autohelp").prop("checked") ? "1" : "0"));
		misc.push("cl_showhelp \""+($("#cl_showhelp").prop("checked") ? "1" : "0"));
		misc.push("cl_disablefreezecam \""+($("#cl_disablefreezecam").prop("checked") ? "1" : "0"));
		//misc.push("cl_dm_buyrandomweapons \""+$('#cl_dm_buyrandomweapons').val());
		misc.push("cl_teammate_colors_show \""+($("#cl_teammate_colors_show").prop("checked") ? "1" : "0"));
		misc.push("cl_loadout_colorweaponnames \""+($("#cl_loadout_colorweaponnames").prop("checked") ? "1" : "0"));
		misc.push("cl_autowepswitch \""+($("#cl_autowepswitch").prop("checked") ? "1" : "0"));
		misc.push("cl_use_opens_buy_menu \""+($("#cl_use_opens_buy_menu").prop("checked") ? "1" : "0"));
		misc.push("closeonbuy \""+($("#closeonbuy").prop("checked") ? "1" : "0"));
		misc.push("hud_takesshots \""+($("#hud_takesshots").prop("checked") ? "1" : "0"));

		for ( var i = 0; i < misc.length; i = i + 1 ) {
			$('#finalConfig').append(misc[ i ]+'\"\n');
		}

		$('#finalConfig').append('\n\n');

		var hud = [];

		$('#finalConfig').append("//HUD\n");
		hud.push("hud_scaling \""+$('#hud_scaling').val());
		hud.push("hud_showtargetid \""+($("#hud_showtargetid").prop("checked") ? "1" : "0"));
		hud.push("cl_draw_only_deathnotices \""+($("#cl_draw_only_deathnotices").prop("checked") ? "1" : "0"));
		hud.push("cl_righthand \""+($("#cl_righthand").prop("checked") ? "1" : "0"));
		hud.push("cl_showloadout \""+($("#cl_showloadout").prop("checked") ? "1" : "0"));
		hud.push("cl_showpos \""+($("#cl_showpos").prop("checked") ? "1" : "0"));
		hud.push("cl_showfps \""+($("#cl_showfps").prop("checked") ? "1" : "0"));
		hud.push("net_graph \""+($("#net_graph").prop("checked") ? "1" : "0"));
		hud.push("net_graphproportionalfont \""+($("#net_graphproportionalfont").prop("checked") ? "1" : "0"));
		hud.push("viewmodel_presetpos \""+$('#viewmodel_presetpos').val());
		hud.push("viewmodel_fov \""+$('#viewmodel_fov').val());
		hud.push("viewmodel_offset_x \""+$('#viewmodel_offset_x').val());
		hud.push("viewmodel_offset_y \""+$('#viewmodel_offset_y').val());
		hud.push("viewmodel_offset_z \""+$('#viewmodel_offset_z').val());
		hud.push("cl_viewmodel_shift_left_amt \""+$('#cl_viewmodel_shift_left_amt').val());
		hud.push("cl_viewmodel_shift_right_amt \""+$('#cl_viewmodel_shift_right_amt').val());
		hud.push("cl_bobcycle \""+$('#cl_bobcycle').val());
		hud.push("cl_bob_lower_amt \""+$('#cl_bob_lower_amt').val());
		hud.push("cl_bobamt_lat \""+$('#cl_bobamt_lat').val());
		hud.push("cl_bobamt_vert \""+$('#cl_bobamt_vert').val());

		for ( var i = 0; i < hud.length; i = i + 1 ) {
			$('#finalConfig').append(hud[ i ]+'\"\n');
		}

		$('#finalConfig').append('\n\n');

		var keybinds = [];

		$('#finalConfig').append("//Keybinds\n");
		
		keybinds.push("bind kp_slash \""+$('#kp_slash').val());
		keybinds.push("bind kp_multiply \""+$('#kp_multiply').val());
		keybinds.push("bind kp_minus \""+$('#kp_minus').val());
		keybinds.push("bind kp_home \""+$('#kp_home').val());
		keybinds.push("bind kp_uparrow \""+$('#kp_uparrow').val());
		keybinds.push("bind kp_pgup \""+$('#kp_pgup').val());
		keybinds.push("bind kp_leftarrow \""+$('#kp_leftarrow').val());
		keybinds.push("bind kp_5 \""+$('#kp_5').val());
		keybinds.push("bind kp_rightarrow \""+$('#kp_rightarrow').val());
		keybinds.push("bind kp_end \""+$('#kp_end').val());
		keybinds.push("bind kp_downarrow \""+$('#kp_downarrow').val());
		keybinds.push("bind kp_pgdn \""+$('#kp_pgdn').val());
		keybinds.push("bind kp_ins \""+$('#kp_ins').val());
		keybinds.push("bind kp_del \""+$('#kp_del').val());
		keybinds.push("bind kp_plus \""+$('#kp_plus').val());
		keybinds.push("bind kp_enter \""+$('#kp_enter').val());

		for ( var i = 0; i < keybinds.length; i = i + 1 ) {
			$('#finalConfig').append(keybinds[ i ]+'\"\n');
		}

		$('#finalConfig').append('\n\n');

		var radar = [];

		$('#finalConfig').append("//Radar\n");
		radar.push("cl_radar_always_centered \""+($("#cl_radar_always_centered").prop("checked") ? "1" : "0"));
		radar.push("cl_radar_rotate \""+($("#cl_radar_rotate").prop("checked") ? "1" : "0"));
		radar.push("cl_radar_scale \""+$('#cl_radar_scale').val());
		radar.push("cl_radar_icon_scale_min \""+$('#cl_radar_icon_scale_min').val());


		for ( var i = 0; i < radar.length; i = i + 1 ) {
			$('#finalConfig').append(radar[ i ]+'\"\n');
		}
		
		$('#finalConfig').append('\n\n');

		var crosshair = [];

		$('#finalConfig').append("//Crosshair \n");

		for ( var i = 0; i < crosshair.length; i = i + 1 ) {
			$('#finalConfig').append(crosshair[ i ]+'\"\n');
		}

		$('#finalConfig').append('\n\n');

		$('#finalConfig').append('host_writeconfig\n');
		$('#finalConfig').append('echo ""\n');
		$('#finalConfig').append('echo ""\n');
		$('#finalConfig').append('echo "autoexec.cfg loaded, GLHF"\n');
		$('#finalConfig').append('echo ""\n');
		$('#finalConfig').append('echo ""\n');

		// <-- magic number needs to be fixed

		e.preventDefault();
	});

	$('#testButton').click(function(e){

		var value = $('#rate').val();
		alert(value);

		e.preventDefault();
	});


});
