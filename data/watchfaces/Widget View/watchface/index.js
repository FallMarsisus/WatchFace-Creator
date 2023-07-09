/**
 * Build with ZMake tool
 */

/**
 * Build with ZMake tool
 */

try {
  (() => {
    var n = __$$hmAppManager$$__.currentApp;
    const step = hmSensor.createSensor(hmSensor.id.STEP)
    const g = n.current,
      { px: e } =
        (new DeviceRuntimeCore.WidgetFactory(
          new DeviceRuntimeCore.HmDomApi(n, g)
        ),
          n.app.__globals__),
      p = Logger.getLogger("watchface6");
    g.module = DeviceRuntimeCore.WatchFace({
      init_view() {
        hmUI.createWidget(hmUI.widget.IMG, {
          x: 0,
          y: 0,
          w: 192,
          h: 490,
          src: "0.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        })



        hmUI.createWidget(hmUI.widget.IMG_TIME, {
          hour_zero: 1,
          hour_startX: 52,
          hour_startY: 105,
          hour_array: [
            "3.png",
            "4.png",
            "5.png",
            "6.png",
            "7.png",
            "8.png",
            "9.png",
            "10.png",
            "11.png",
            "12.png"
          ],
          hour_space: 2,


          minute_zero: 1,
          minute_startX: 52,
          minute_startY: 168,

          minute_array: [
            "3.png",
            "4.png",
            "5.png",
            "6.png",
            "7.png",
            "8.png",
            "9.png",
            "10.png",
            "11.png",
            "12.png"
          ],
          minute_space: 3,

          show_level: hmUI.show_level.ONLY_NORMAL | hmUI.show_level.ONLY_AOD
        })

        //---------------------------------分割线-------------------------------------
        function click() {
          switchUI(false);
       }



        let img_bkg = hmUI.createWidget(hmUI.widget.BUTTON, {   //小程序图标
          x: 69,
          y: 394,
          w: 60,
          h: 60,
          text: "...",
          text_size: 30,
          click_func: click,
          radius: 20,
          show_level: hmUI.show_level.ONLY_NORMAL |  hmUI.show_level.ONLY_AOD
        })

        let txtBg = hmUI.createWidget(hmUI.widget.IMG, {    // 自定义组件容器
          x: 0,
          y: 0,
          src: 'bg1.png'
        })

        let txtBg2 = hmUI.createWidget(hmUI.widget.IMG, {    // 自定义组件容器
          x: 0,
          y: 0,
          src: 'bg2.png'
        })

        txtBg.setProperty(hmUI.prop.VISIBLE, false)
        txtBg2.setProperty(hmUI.prop.VISIBLE, false)

        let txtGroup = hmUI.createWidget(hmUI.widget.GROUP, {
          x: 0,
          y: 0,
          w: 192,
          h: 490
        })

        function switchUI(b) {
          img_bkg.setProperty(hmUI.prop.VISIBLE, b);
          txtBg.setProperty(hmUI.prop.VISIBLE, !b);
          txtBg2.setProperty(hmUI.prop.VISIBLE, !b);
          txtGroup.setProperty(hmUI.prop.VISIBLE, !b);
          if (b) {
            new ProxySc().show();
          } else {
            new ProxySc().hide();
          }
        }
        var vibrateqiangdu = hmFS.SysProGetInt("vibrateqiangdu");
        if (vibrateqiangdu == undefined) {
          vibrateqiangdu = 23
        } else if (vibrateqiangdu == 1) {
          vibrateqiangdu = 23
        } else if (vibrateqiangdu == 2) {
          vibrateqiangdu = 24
        } else if (vibrateqiangdu == 3) {
          vibrateqiangdu = 25
        }

        // 自定义组件部分
        let DISCONNECT = txtGroup.createWidget(hmUI.widget.IMG_STATUS, { x: 106, y: 97, type: hmUI.system_status.DISCONNECT, src: 'disconnect.png' })
        let CLOCK = txtGroup.createWidget(hmUI.widget.IMG_STATUS, { x: 98, y: 97, type: hmUI.system_status.CLOCK, src: 'clock.png' })
        let DISTURB = txtGroup.createWidget(hmUI.widget.IMG_STATUS, { x: 114, y: 97, type: hmUI.system_status.DISTURB, src: 'disturb.png' })
        //日期
        let date = txtGroup.createWidget(hmUI.widget.IMG_DATE, {
          month_startX: 110,
          month_startY: 153,
          month_sc_array: ["104.png", "105.png", "106.png", "107.png", "108.png", "109.png", "110.png", "111.png", "112.png", "113.png"],
          month_tc_array: ["104.png", "105.png", "106.png", "107.png", "108.png", "109.png", "110.png", "111.png", "112.png", "113.png"],
          month_en_array: ["104.png", "105.png", "106.png", "107.png", "108.png", "109.png", "110.png", "111.png", "112.png", "113.png"],
          month_unit_sc: "29.png",
          month_unit_tc: "29.png",
          month_unit_en: "29.png",
          month_align: hmUI.align.LEFT,
          month_zero: 1,
          month_follow: 0,
          month_space: 0,
          month_is_character: !1,

          day_sc_array: ["104.png", "105.png", "106.png", "107.png", "108.png", "109.png", "110.png", "111.png", "112.png", "113.png"],
          day_tc_array: ["104.png", "105.png", "106.png", "107.png", "108.png", "109.png", "110.png", "111.png", "112.png", "113.png"],
          day_en_array: ["104.png", "105.png", "106.png", "107.png", "108.png", "109.png", "110.png", "111.png", "112.png", "113.png"],
          day_align: hmUI.align.LEFT,
          day_zero: 1,
          day_follow: 1,
          day_space: 0,
          day_is_character: !1,
          show_level: hmUI.show_level.ONLY_NORMAL
        })
        //星期
        let week_en = txtGroup.createWidget(hmUI.widget.IMG_WEEK, {
          x: 115,
          y: 130,
          week_en: ["a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png", "a7.png"],
          week_tc: ["a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png", "a7.png"],
          week_sc: ["a1.png", "a2.png", "a3.png", "a4.png", "a5.png", "a6.png", "a7.png"],
          show_level: hmUI.show_level.WRAP
        })
        //电量
        let battery = txtGroup.createWidget(hmUI.widget.TEXT_IMG, {
          x: 142,
          y: 93,
          type: hmUI.data_type.BATTERY,
          font_array: ["104.png", "105.png", "106.png", "107.png", "108.png", "109.png", "110.png", "111.png", "112.png", "113.png"],
          h_space: 0,
          align_h: hmUI.align.LEFT,
          show_level: hmUI.show_level.ONLY_NORMAL,
          unit_sc: "114.png",
          unit_tc: "114.png",
          unit_en: "114.png",
          padding: !1,
          isCharacter: !1
        })


        //电量图标
        let batteryicon = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 125,
          y: 91,
          src: 'battery.png',
          show_level: hmUI.show_level.ONLY_NORMAL
        })
        //天气图片
        let Weather = txtGroup.createWidget(hmUI.widget.IMG_LEVEL, {
          x: 103,
          y: 175,
          image_array: ["51.png", "52.png", "53.png", "54.png", "55.png", "56.png", "57.png", "58.png", "59.png", "60.png", "61.png", "62.png", "63.png", "64.png", "65.png", "66.png", "67.png", "68.png", "69.png", "70.png", "71.png", "72.png", "73.png", "74.png", "75.png", "76.png", "77.png", "78.png", "79.png"],
          image_length: 29,
          type: hmUI.data_type.WEATHER_CURRENT,
          show_level: hmUI.show_level.ONLY_NORMAL
        })
        //当前气温
        let WEATHERCURRENT = txtGroup.createWidget(hmUI.widget.TEXT_IMG, {
          x: 137,
          y: 183,
          // w: 42,
          type: hmUI.data_type.WEATHER_CURRENT,
          font_array: ["80.png", "81.png", "82.png", "83.png", "84.png", "85.png", "86.png", "87.png", "88.png", "89.png"],
          align_h: hmUI.align.CENTER_H,
          h_space: 0,
          show_level: hmUI.show_level.ONLY_NORMAL,
          unit_sc: "114.png",
          unit_tc: "114.png",
          unit_en: "114.png",
          negative_image: "91.png",
          invalid_image: "90.png",
          padding: !1,
          isCharacter: !1
        })
        var vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE)

        


        txtGroup.createWidget(hmUI.widget.IMG_TIME, {
          hour_zero: 1,
          hour_startX: 65,
          hour_startY: 33,
          hour_array: [
            "104.png",
            "105.png",
            "106.png",
            "107.png",
            "108.png",
            "109.png",
            "110.png",
            "111.png",
            "112.png",
            "113.png"
          ],
          hour_space: 2,


          minute_zero: 1,
          minute_startX: 105,
          minute_startY: 33,

          hour_unit_en :"colon.png",
          hour_unit_tc :"colon.png",
          hour_unit_sc :"colon.png",

          minute_array: [
            "104.png",
            "105.png",
            "106.png",
            "107.png",
            "108.png",
            "109.png",
            "110.png",
            "111.png",
            "112.png",
            "113.png"
          ],
          minute_space: 3,

          show_level: hmUI.show_level.ONLY_NORMAL
      })

      let x_steps = 138
      let y_steps = 266
      let radius = 35


        const arcProgress_black = txtGroup.createWidget(hmUI.widget.ARC_PROGRESS, {
          center_x: x_steps,
          center_y: y_steps,
          radius: radius,
          start_angle: 0,
          end_angle: 360,
          color: 0x000000,
          line_width: 7,
          level: 100,
          show_level: hmUI.show_level.ONLY_NORMAL
        })


        const arcProgress = txtGroup.createWidget(hmUI.widget.ARC_PROGRESS, {
          center_x: x_steps,
          center_y: y_steps,
          radius: radius,
          start_angle: 0,
          end_angle: 360,
          color: 0xfa8232,
          line_width: 7,
          type: hmUI.data_type.STEP,
          show_level: hmUI.show_level.ONLY_NORMAL
        })
          
        step.addEventListener(hmSensor.event.CHANGE, function () {
          console.log(step.current)
          arcProgress.setProperty(hmUI.prop.MORE, { level:step.current/step.target*100 })
        })



        //运动跳转
        let ButtonAppSport = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 19,
          y: 66,
          src: "sport.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        })
          .addEventListener(hmUI.event.CLICK_UP, function () {
            if (1) {
              ButtonAppSport = hmApp.startApp({
                url: "SportListScreen",
                native: true,
              })
              vibrate.stop()
              vibrate.scene = vibrateqiangdu
              vibrate.start()
            }
          })
        //活力指标跳转
        let ButtonAppCalories = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 19,
          y: 120,
          src: "health.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        })
          .addEventListener(hmUI.event.CLICK_UP, function () {
            if (1) {
              ButtonAppCalories = hmApp.startApp({
                url: "activityAppScreen",
                native: true,
              })
              vibrate.stop()
              vibrate.scene = vibrateqiangdu
              vibrate.start()
            }
          })
        //天气跳转
        let ButtonAppWeather = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 19,
          y: 174,
          src: "weather.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        })
          .addEventListener(hmUI.event.CLICK_UP, function () {
            if (1) {
              ButtonAppWeather = hmApp.startApp({
                url: "WeatherScreen",
                native: true,
              })
              vibrate.stop()
              vibrate.scene = vibrateqiangdu
              vibrate.start()
            }
          })
        //音乐跳转
        let ButtonAppMusic = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 19,
          y: 228,
          src: "music.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        })
          .addEventListener(hmUI.event.CLICK_UP, function () {
            if (1) {
              ButtonAppMusic = hmApp.startApp({
                url: "PhoneMusicCtrlScreen",
                native: true,
              })
              vibrate.stop()
              vibrate.scene = vibrateqiangdu
              vibrate.start()
            }
          })
        //支付宝跳转
        let ButtonTorch = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 19,
          y: 282,
          src: "torch.png",
          show_level: hmUI.show_level.ONLY_NORMAL,
        })
          .addEventListener(hmUI.event.CLICK_UP, function () {
            if (1) {
              ButtonToolBox = hmApp.startApp({
                id:33904,
                url: "FlashLightScreen",
                native: true,
              })
              vibrate.stop()
              vibrate.scene = vibrateqiangdu
              vibrate.start()
            }
          })
        //设置跳转
        let ButtonAppSetting = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 19,
          y: 336,
          src: "setting.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        })
          .addEventListener(hmUI.event.CLICK_UP, function () {
            if (1) {
              ButtonAppSetting = hmApp.startApp({
                url: "Settings_homeScreen",
                native: true,
              })
              vibrate.stop()
              vibrate.scene = vibrateqiangdu
              vibrate.start()
            }
          })


        function backButtonClickFunc(button) {          // 返回按钮
          switchUI(true);
        }

        let backButton = txtGroup.createWidget(hmUI.widget.BUTTON, {
          x: 55,
          y: 420,
          w: 90,
          h: 45,
          radius: 20,
          press_color: 0xD9D9D9,
          normal_color: 0xCDC1C5,
          text: '⇦',
          text_size: 22,
          color: 0x000000,
          click_func: backButtonClickFunc
        })

      let imageSteps = txtGroup.createWidget(hmUI.widget.IMG, {
          x: 123  ,
          y: 250,
          src: "steps.png",
          show_level: hmUI.show_level.ONLY_NORMAL
        })


        txtGroup.setProperty(hmUI.prop.VISIBLE, false);    // 设置隐藏
      },
      onInit() {
        p.log("index page.js on init invoke");
      },
      build() {
        this.init_view(), p.log("index page.js on ready invoke");
      },
      onDestory() {
        p.log("index page.js on destory invoke");
      }
    });
  })();
} catch (n) {
  console.log(n);
}
