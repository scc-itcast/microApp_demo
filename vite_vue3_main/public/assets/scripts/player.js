;(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory()
  else if (typeof define === 'function' && define.amd) define([], factory)
  else if (typeof exports === 'object') exports['epicgames-frontend'] = factory()
  else root['epicgames-frontend'] = factory()
})(this, () => {
  return /******/ (() => {
    // webpackBootstrap
    /******/ 'use strict'
    /******/ var __webpack_modules__ = {
      /***/ '../../library/dist/lib-pixelstreamingfrontend.esm.js':
        /*!************************************************************!*\
  !*** ../../library/dist/lib-pixelstreamingfrontend.esm.js ***!
  \************************************************************/
        /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__)
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ AfkLogic: () => /* binding */ __webpack_exports__AfkLogic,
            /* harmony export */ AfkTimedOutEvent: () => /* binding */ __webpack_exports__AfkTimedOutEvent,
            /* harmony export */ AfkWarningActivateEvent: () =>
              /* binding */ __webpack_exports__AfkWarningActivateEvent,
            /* harmony export */ AfkWarningDeactivateEvent: () =>
              /* binding */ __webpack_exports__AfkWarningDeactivateEvent,
            /* harmony export */ AfkWarningUpdateEvent: () => /* binding */ __webpack_exports__AfkWarningUpdateEvent,
            /* harmony export */ AggregatedStats: () => /* binding */ __webpack_exports__AggregatedStats,
            /* harmony export */ CandidatePairStats: () => /* binding */ __webpack_exports__CandidatePairStats,
            /* harmony export */ CandidateStat: () => /* binding */ __webpack_exports__CandidateStat,
            /* harmony export */ Config: () => /* binding */ __webpack_exports__Config,
            /* harmony export */ ControlSchemeType: () => /* binding */ __webpack_exports__ControlSchemeType,
            /* harmony export */ DataChannelCloseEvent: () => /* binding */ __webpack_exports__DataChannelCloseEvent,
            /* harmony export */ DataChannelErrorEvent: () => /* binding */ __webpack_exports__DataChannelErrorEvent,
            /* harmony export */ DataChannelOpenEvent: () => /* binding */ __webpack_exports__DataChannelOpenEvent,
            /* harmony export */ DataChannelStats: () => /* binding */ __webpack_exports__DataChannelStats,
            /* harmony export */ EncoderSettings: () => /* binding */ __webpack_exports__EncoderSettings,
            /* harmony export */ EventEmitter: () => /* binding */ __webpack_exports__EventEmitter,
            /* harmony export */ Flags: () => /* binding */ __webpack_exports__Flags,
            /* harmony export */ HideFreezeFrameEvent: () => /* binding */ __webpack_exports__HideFreezeFrameEvent,
            /* harmony export */ InboundAudioStats: () => /* binding */ __webpack_exports__InboundAudioStats,
            /* harmony export */ InboundVideoStats: () => /* binding */ __webpack_exports__InboundVideoStats,
            /* harmony export */ InitialSettings: () => /* binding */ __webpack_exports__InitialSettings,
            /* harmony export */ InitialSettingsEvent: () => /* binding */ __webpack_exports__InitialSettingsEvent,
            /* harmony export */ LatencyTestResultEvent: () => /* binding */ __webpack_exports__LatencyTestResultEvent,
            /* harmony export */ LatencyTestResults: () => /* binding */ __webpack_exports__LatencyTestResults,
            /* harmony export */ LoadFreezeFrameEvent: () => /* binding */ __webpack_exports__LoadFreezeFrameEvent,
            /* harmony export */ Logger: () => /* binding */ __webpack_exports__Logger,
            /* harmony export */ MessageRecv: () => /* binding */ __webpack_exports__MessageRecv,
            /* harmony export */ MessageSend: () => /* binding */ __webpack_exports__MessageSend,
            /* harmony export */ MessageStreamerList: () => /* binding */ __webpack_exports__MessageStreamerList,
            /* harmony export */ NumericParameters: () => /* binding */ __webpack_exports__NumericParameters,
            /* harmony export */ OptionParameters: () => /* binding */ __webpack_exports__OptionParameters,
            /* harmony export */ OutBoundVideoStats: () => /* binding */ __webpack_exports__OutBoundVideoStats,
            /* harmony export */ PixelStreaming: () => /* binding */ __webpack_exports__PixelStreaming,
            /* harmony export */ PlayStreamErrorEvent: () => /* binding */ __webpack_exports__PlayStreamErrorEvent,
            /* harmony export */ PlayStreamEvent: () => /* binding */ __webpack_exports__PlayStreamEvent,
            /* harmony export */ PlayStreamRejectedEvent: () =>
              /* binding */ __webpack_exports__PlayStreamRejectedEvent,
            /* harmony export */ SettingBase: () => /* binding */ __webpack_exports__SettingBase,
            /* harmony export */ SettingFlag: () => /* binding */ __webpack_exports__SettingFlag,
            /* harmony export */ SettingNumber: () => /* binding */ __webpack_exports__SettingNumber,
            /* harmony export */ SettingOption: () => /* binding */ __webpack_exports__SettingOption,
            /* harmony export */ SettingText: () => /* binding */ __webpack_exports__SettingText,
            /* harmony export */ SettingsChangedEvent: () => /* binding */ __webpack_exports__SettingsChangedEvent,
            /* harmony export */ SignallingProtocol: () => /* binding */ __webpack_exports__SignallingProtocol,
            /* harmony export */ StatsReceivedEvent: () => /* binding */ __webpack_exports__StatsReceivedEvent,
            /* harmony export */ StreamLoadingEvent: () => /* binding */ __webpack_exports__StreamLoadingEvent,
            /* harmony export */ StreamPreConnectEvent: () => /* binding */ __webpack_exports__StreamPreConnectEvent,
            /* harmony export */ StreamPreDisconnectEvent: () =>
              /* binding */ __webpack_exports__StreamPreDisconnectEvent,
            /* harmony export */ StreamReconnectEvent: () => /* binding */ __webpack_exports__StreamReconnectEvent,
            /* harmony export */ StreamerListMessageEvent: () =>
              /* binding */ __webpack_exports__StreamerListMessageEvent,
            /* harmony export */ TextParameters: () => /* binding */ __webpack_exports__TextParameters,
            /* harmony export */ UnquantizedAndDenormalizeUnsigned: () =>
              /* binding */ __webpack_exports__UnquantizedAndDenormalizeUnsigned,
            /* harmony export */ VideoEncoderAvgQPEvent: () => /* binding */ __webpack_exports__VideoEncoderAvgQPEvent,
            /* harmony export */ VideoInitializedEvent: () => /* binding */ __webpack_exports__VideoInitializedEvent,
            /* harmony export */ WebRTCSettings: () => /* binding */ __webpack_exports__WebRTCSettings,
            /* harmony export */ WebRtcAutoConnectEvent: () => /* binding */ __webpack_exports__WebRtcAutoConnectEvent,
            /* harmony export */ WebRtcConnectedEvent: () => /* binding */ __webpack_exports__WebRtcConnectedEvent,
            /* harmony export */ WebRtcConnectingEvent: () => /* binding */ __webpack_exports__WebRtcConnectingEvent,
            /* harmony export */ WebRtcDisconnectedEvent: () =>
              /* binding */ __webpack_exports__WebRtcDisconnectedEvent,
            /* harmony export */ WebRtcFailedEvent: () => /* binding */ __webpack_exports__WebRtcFailedEvent,
            /* harmony export */ WebRtcPlayerController: () => /* binding */ __webpack_exports__WebRtcPlayerController,
            /* harmony export */ WebRtcSdpEvent: () => /* binding */ __webpack_exports__WebRtcSdpEvent,
            /* harmony export */ WebSocketController: () => /* binding */ __webpack_exports__WebSocketController,
            /* harmony export */ WebXRController: () => /* binding */ __webpack_exports__WebXRController,
            /* harmony export */ XrFrameEvent: () => /* binding */ __webpack_exports__XrFrameEvent,
            /* harmony export */ XrSessionEndedEvent: () => /* binding */ __webpack_exports__XrSessionEndedEvent,
            /* harmony export */ XrSessionStartedEvent: () => /* binding */ __webpack_exports__XrSessionStartedEvent
            /* harmony export */
          })
          /* harmony import */ var sdp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! sdp */ '../../library/node_modules/sdp/sdp.js'
          )
          /* harmony import */ var sdp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            sdp__WEBPACK_IMPORTED_MODULE_0__
          )

          /******/ var __webpack_modules__ = {
            /***/ './src/AFK/AFKController.ts':
              /*!**********************************!*\
  !*** ./src/AFK/AFKController.ts ***!
  \**********************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_304__) => {
                __nested_webpack_require_304__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_304__.d(__webpack_exports__, {
                  /* harmony export */ AFKController: () => /* binding */ AFKController
                  /* harmony export */
                })
                /* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_304__(
                  /*! ../Config/Config */ './src/Config/Config.ts'
                )
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_304__(
                  /*! ../Logger/Logger */ './src/Logger/Logger.ts'
                )
                /* harmony import */ var _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_304__(/*! ../Util/EventEmitter */ './src/Util/EventEmitter.ts')
                // Copyright Epic Games, Inc. All Rights Reserved.

                class AFKController {
                  constructor(config, pixelStreaming, onDismissAfk) {
                    // time out logic details
                    this.closeTimeout = 10
                    this.active = false
                    this.countdownActive = false
                    this.warnTimer = undefined
                    this.countDown = 0
                    this.countDownTimer = undefined
                    this.config = config
                    this.pixelStreaming = pixelStreaming
                    this.onDismissAfk = onDismissAfk
                    this.onAFKTimedOutCallback = () => {
                      console.log('AFK timed out, did you want to override this callback?')
                    }
                  }
                  /**
                   * The methods that occur when an afk event listener is clicked
                   */
                  onAfkClick() {
                    clearInterval(this.countDownTimer)
                    if (this.active || this.countdownActive) {
                      this.startAfkWarningTimer()
                      this.pixelStreaming.dispatchEvent(
                        new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.AfkWarningDeactivateEvent()
                      )
                    }
                  }
                  /**
                   * Start the warning timer if a timeout is set greater that 0 seconds
                   */
                  startAfkWarningTimer() {
                    if (
                      this.config.getNumericSettingValue(
                        _Config_Config__WEBPACK_IMPORTED_MODULE_1__.NumericParameters.AFKTimeoutSecs
                      ) > 0 &&
                      this.config.isFlagEnabled(_Config_Config__WEBPACK_IMPORTED_MODULE_1__.Flags.AFKDetection)
                    ) {
                      this.active = true
                    } else {
                      this.active = false
                    }
                    this.resetAfkWarningTimer()
                  }
                  /**
                   * Stop the afk warning timer
                   */
                  stopAfkWarningTimer() {
                    this.active = false
                    this.countdownActive = false
                    clearTimeout(this.warnTimer)
                    clearInterval(this.countDownTimer)
                  }
                  /**
                   * Pause the timer which when elapsed will warn the user they are inactive.
                   */
                  pauseAfkWarningTimer() {
                    this.active = false
                  }
                  /**
                   * If the user interacts then reset the warning timer.
                   */
                  resetAfkWarningTimer() {
                    if (
                      this.active &&
                      this.config.isFlagEnabled(_Config_Config__WEBPACK_IMPORTED_MODULE_1__.Flags.AFKDetection)
                    ) {
                      clearTimeout(this.warnTimer)
                      this.warnTimer = setTimeout(
                        () => this.activateAfkEvent(),
                        this.config.getNumericSettingValue(
                          _Config_Config__WEBPACK_IMPORTED_MODULE_1__.NumericParameters.AFKTimeoutSecs
                        ) * 1000
                      )
                    }
                  }
                  /**
                   * Show the AFK overlay and begin the countDown
                   */
                  activateAfkEvent() {
                    // Pause the timer while the user is looking at the inactivity warning overlay
                    this.pauseAfkWarningTimer()
                    // instantiate a new overlay
                    this.pixelStreaming.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.AfkWarningActivateEvent({
                        countDown: this.countDown,
                        dismissAfk: this.onDismissAfk
                      })
                    )
                    // update our countDown timer and overlay contents
                    this.countDown = this.closeTimeout
                    this.countdownActive = true
                    this.pixelStreaming.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.AfkWarningUpdateEvent({
                        countDown: this.countDown
                      })
                    )
                    // if we are in locked mouse exit pointerlock
                    if (
                      !this.config.isFlagEnabled(_Config_Config__WEBPACK_IMPORTED_MODULE_1__.Flags.HoveringMouseMode)
                    ) {
                      // minor hack to alleviate ios not supporting pointerlock
                      if (document.exitPointerLock) {
                        document.exitPointerLock()
                      }
                    }
                    // reset our countDown interval accordingly
                    this.countDownTimer = setInterval(() => {
                      this.countDown--
                      if (this.countDown == 0) {
                        // The user failed to click so hide the overlay and disconnect them.
                        this.pixelStreaming.dispatchEvent(
                          new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.AfkTimedOutEvent()
                        )
                        this.onAFKTimedOutCallback()
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.GetStackTrace(),
                          'You have been disconnected due to inactivity'
                        )
                        // switch off the afk feature as stream has closed
                        this.stopAfkWarningTimer()
                      } else {
                        this.pixelStreaming.dispatchEvent(
                          new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.AfkWarningUpdateEvent({
                            countDown: this.countDown
                          })
                        )
                      }
                    }, 1000)
                  }
                }

                /***/
              },

            /***/ './src/Config/Config.ts':
              /*!******************************!*\
  !*** ./src/Config/Config.ts ***!
  \******************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_5733__) => {
                __nested_webpack_require_5733__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_5733__.d(__webpack_exports__, {
                  /* harmony export */ Config: () => /* binding */ Config,
                  /* harmony export */ ControlSchemeType: () => /* binding */ ControlSchemeType,
                  /* harmony export */ Flags: () => /* binding */ Flags,
                  /* harmony export */ NumericParameters: () => /* binding */ NumericParameters,
                  /* harmony export */ OptionParameters: () => /* binding */ OptionParameters,
                  /* harmony export */ TextParameters: () => /* binding */ TextParameters
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_5733__(
                  /*! ../Logger/Logger */ './src/Logger/Logger.ts'
                )
                /* harmony import */ var _SettingFlag__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_5733__(
                  /*! ./SettingFlag */ './src/Config/SettingFlag.ts'
                )
                /* harmony import */ var _SettingNumber__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_5733__(
                  /*! ./SettingNumber */ './src/Config/SettingNumber.ts'
                )
                /* harmony import */ var _SettingText__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_5733__(
                  /*! ./SettingText */ './src/Config/SettingText.ts'
                )
                /* harmony import */ var _SettingOption__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_5733__(
                  /*! ./SettingOption */ './src/Config/SettingOption.ts'
                )
                /* harmony import */ var _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_5__ =
                  __nested_webpack_require_5733__(/*! ../Util/EventEmitter */ './src/Util/EventEmitter.ts')
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * A collection of flags that can be toggled and are core to all Pixel Streaming experiences.
                 * These are used in the `Config.Flags` map.
                 */
                class Flags {}
                Flags.AutoConnect = 'AutoConnect'
                Flags.AutoPlayVideo = 'AutoPlayVideo'
                Flags.AFKDetection = 'TimeoutIfIdle'
                Flags.BrowserSendOffer = 'OfferToReceive'
                Flags.HoveringMouseMode = 'HoveringMouse'
                Flags.ForceMonoAudio = 'ForceMonoAudio'
                Flags.ForceTURN = 'ForceTURN'
                Flags.FakeMouseWithTouches = 'FakeMouseWithTouches'
                Flags.IsQualityController = 'ControlsQuality'
                Flags.MatchViewportResolution = 'MatchViewportRes'
                Flags.PreferSFU = 'preferSFU'
                Flags.StartVideoMuted = 'StartVideoMuted'
                Flags.SuppressBrowserKeys = 'SuppressBrowserKeys'
                Flags.UseMic = 'UseMic'
                Flags.KeyboardInput = 'KeyboardInput'
                Flags.MouseInput = 'MouseInput'
                Flags.TouchInput = 'TouchInput'
                Flags.GamepadInput = 'GamepadInput'
                Flags.XRControllerInput = 'XRControllerInput'
                const isFlagId = (id) => Object.getOwnPropertyNames(Flags).some((name) => Flags[name] === id)
                /**
                 * A collection of numeric parameters that are core to all Pixel Streaming experiences.
                 *
                 */
                class NumericParameters {}
                NumericParameters.AFKTimeoutSecs = 'AFKTimeout'
                NumericParameters.MinQP = 'MinQP'
                NumericParameters.MaxQP = 'MaxQP'
                NumericParameters.WebRTCFPS = 'WebRTCFPS'
                NumericParameters.WebRTCMinBitrate = 'WebRTCMinBitrate'
                NumericParameters.WebRTCMaxBitrate = 'WebRTCMaxBitrate'
                NumericParameters.MaxReconnectAttempts = 'MaxReconnectAttempts'
                const isNumericId = (id) =>
                  Object.getOwnPropertyNames(NumericParameters).some((name) => NumericParameters[name] === id)
                /**
                 * A collection of textual parameters that are core to all Pixel Streaming experiences.
                 *
                 */
                class TextParameters {}
                TextParameters.SignallingServerUrl = 'ss'
                const isTextId = (id) =>
                  Object.getOwnPropertyNames(TextParameters).some((name) => TextParameters[name] === id)
                /**
                 * A collection of enum based parameters that are core to all Pixel Streaming experiences.
                 *
                 */
                class OptionParameters {}
                OptionParameters.PreferredCodec = 'PreferredCodec'
                OptionParameters.StreamerId = 'StreamerId'
                const isOptionId = (id) =>
                  Object.getOwnPropertyNames(OptionParameters).some((name) => OptionParameters[name] === id)
                class Config {
                  // ------------ Settings -----------------
                  constructor(config = {}) {
                    /* A map of flags that can be toggled - options that can be set in the application - e.g. Use Mic? */
                    this.flags = new Map()
                    /* A map of numerical settings - options that can be in the application - e.g. MinBitrate */
                    this.numericParameters = new Map()
                    /* A map of text settings - e.g. signalling server url */
                    this.textParameters = new Map()
                    /* A map of enum based settings - e.g. preferred codec */
                    this.optionParameters = new Map()
                    const { initialSettings, useUrlParams } = config
                    this._useUrlParams = !!useUrlParams
                    this.populateDefaultSettings(this._useUrlParams)
                    if (initialSettings) {
                      this.setSettings(initialSettings)
                    }
                  }
                  /**
                   * True if reading configuration initial values from URL parameters, and
                   * persisting changes in URL when changed.
                   */
                  get useUrlParams() {
                    return this._useUrlParams
                  }
                  /**
                   * Populate the default settings for a Pixel Streaming application
                   */
                  populateDefaultSettings(useUrlParams) {
                    /**
                     * Text Parameters
                     */
                    this.textParameters.set(
                      TextParameters.SignallingServerUrl,
                      new _SettingText__WEBPACK_IMPORTED_MODULE_0__.SettingText(
                        TextParameters.SignallingServerUrl,
                        'Signalling url',
                        'Url of the signalling server',
                        (location.protocol === 'https:' ? 'wss://' : 'ws://') + window.webSocketStream,
                        // window.location.hostname +
                        // // for readability, we omit the port if it's 80
                        // (window.location.port === '80' || window.location.port === ''
                        //   ? ''
                        //   : `:${window.location.port}`),
                        useUrlParams
                      )
                    )
                    this.optionParameters.set(
                      OptionParameters.StreamerId,
                      new _SettingOption__WEBPACK_IMPORTED_MODULE_1__.SettingOption(
                        OptionParameters.StreamerId,
                        'Streamer ID',
                        'The ID of the streamer to stream.',
                        '',
                        [],
                        useUrlParams
                      )
                    )
                    /**
                     * Enum Parameters
                     */
                    this.optionParameters.set(
                      OptionParameters.PreferredCodec,
                      new _SettingOption__WEBPACK_IMPORTED_MODULE_1__.SettingOption(
                        OptionParameters.PreferredCodec,
                        'Preferred Codec',
                        'The preferred codec to be used during codec negotiation',
                        'H264 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f',
                        (function () {
                          const browserSupportedCodecs = []
                          // Try get the info needed from the RTCRtpReceiver. This is only available on chrome
                          if (!RTCRtpReceiver.getCapabilities) {
                            browserSupportedCodecs.push('Only available on Chrome')
                            return browserSupportedCodecs
                          }
                          const matcher = /(VP\d|H26\d|AV1).*/
                          const codecs = RTCRtpReceiver.getCapabilities('video').codecs
                          codecs.forEach((codec) => {
                            const str = codec.mimeType.split('/')[1] + ' ' + (codec.sdpFmtpLine || '')
                            const match = matcher.exec(str)
                            if (match !== null) {
                              browserSupportedCodecs.push(str)
                            }
                          })
                          return browserSupportedCodecs
                        })(),
                        useUrlParams
                      )
                    )
                    /**
                     * Boolean parameters
                     */
                    this.flags.set(
                      Flags.AutoConnect,
                      new _SettingFlag__WEBPACK_IMPORTED_MODULE_2__.SettingFlag(
                        Flags.AutoConnect,
                        'Auto connect to stream',
                        'Whether we should attempt to auto connect to the signalling server or show a click to start prompt.',
                        false,
                        useUrlParams
                      )
                    )
                    this.flags.set(
                      Flags.AutoPlayVideo,
                      new _SettingFlag__WEBPACK_IMPORTED_MODULE_2__.SettingFlag(
                        Flags.AutoPlayVideo,
                        'Auto play video',
                        'When video is ready automatically start playing it as opposed to showing a play button.',
                        true,
                        useUrlParams
                      )
                    )
                    this.flags.set(
                      Flags.BrowserSendOffer,
                      new _SettingFlag__WEBPACK_IMPORTED_MODULE_2__.SettingFlag(
                        Flags.BrowserSendOffer,
                        'Browser send offer',
                        'Browser will initiate the WebRTC handshake by sending the offer to the streamer',
                        false,
                        useUrlParams
                      )
                    )
                    this.flags.set(
                      Flags.UseMic,
                      new _SettingFlag__WEBPACK_IMPORTED_MODULE_2__.SettingFlag(
                        Flags.UseMic,
                        'Use microphone',
                        'Make browser request microphone access and open an input audio track.',
                        false,
                        useUrlParams
                      )
                    )
                    this.flags.set(
                      Flags.StartVideoMuted,
                      new _SettingFlag__WEBPACK_IMPORTED_MODULE_2__.SettingFlag(
                        Flags.StartVideoMuted,
                        'Start video muted',
                        'Video will start muted if true.',
                        false,
                        useUrlParams
                      )
                    )
                    this.flags.set(
                      Flags.SuppressBrowserKeys,
                      new _SettingFlag__WEBPACK_IMPORTED_MODULE_2__.SettingFlag(
                        Flags.SuppressBrowserKeys,
                        'Suppress browser keys',
                        'Suppress certain browser keys that we use in UE, for example F5 to show shader complexity instead of refresh the page.',
                        true,
                        useUrlParams
                      )
                    )
                    this.flags.set(
                      Flags.PreferSFU,
                      new _SettingFlag__WEBPACK_IMPORTED_MODULE_2__.SettingFlag(
                        Flags.PreferSFU,
                        'Prefer SFU',
                        'Try to connect to the SFU instead of P2P.',
                        false,
                        useUrlParams
                      )
                    )
                    this.flags.set(
                      Flags.IsQualityController,
                      new _SettingFlag__WEBPACK_IMPORTED_MODULE_2__.SettingFlag(
                        Flags.IsQualityController,
                        'Is quality controller?',
                        'True if this peer controls stream quality',
                        true,
                        useUrlParams
                      )
                    )
                    this.flags.set(
                      Flags.ForceMonoAudio,
                      new _SettingFlag__WEBPACK_IMPORTED_MODULE_2__.SettingFlag(
                        Flags.ForceMonoAudio,
                        'Force mono audio',
                        'Force browser to request mono audio in the SDP',
                        false,
                        useUrlParams
                      )
                    )
                    this.flags.set(
                      Flags.ForceTURN,
                      new _SettingFlag__WEBPACK_IMPORTED_MODULE_2__.SettingFlag(
                        Flags.ForceTURN,
                        'Force TURN',
                        'Only generate TURN/Relayed ICE candidates.',
                        false,
                        useUrlParams
                      )
                    )
                    this.flags.set(
                      Flags.AFKDetection,
                      new _SettingFlag__WEBPACK_IMPORTED_MODULE_2__.SettingFlag(
                        Flags.AFKDetection,
                        'AFK if idle',
                        'Timeout the experience if user is AFK for a period.',
                        false,
                        useUrlParams
                      )
                    )
                    this.flags.set(
                      Flags.MatchViewportResolution,
                      new _SettingFlag__WEBPACK_IMPORTED_MODULE_2__.SettingFlag(
                        Flags.MatchViewportResolution,
                        'Match viewport resolution',
                        'Pixel Streaming will be instructed to dynamically resize the video stream to match the size of the video element.',
                        false,
                        useUrlParams
                      )
                    )
                    this.flags.set(
                      Flags.HoveringMouseMode,
                      new _SettingFlag__WEBPACK_IMPORTED_MODULE_2__.SettingFlag(
                        Flags.HoveringMouseMode,
                        'Control Scheme: Locked Mouse',
                        'Either locked mouse, where the pointer is consumed by the video and locked to it, or hovering mouse, where the mouse is not consumed.',
                        false,
                        useUrlParams,
                        (isHoveringMouse, setting) => {
                          setting.label = `Control Scheme: ${isHoveringMouse ? 'Hovering' : 'Locked'} Mouse`
                        }
                      )
                    )
                    this.flags.set(
                      Flags.FakeMouseWithTouches,
                      new _SettingFlag__WEBPACK_IMPORTED_MODULE_2__.SettingFlag(
                        Flags.FakeMouseWithTouches,
                        'Fake mouse with touches',
                        'A single finger touch is converted into a mouse event. This allows a non-touch application to be controlled partially via a touch device.',
                        false,
                        useUrlParams
                      )
                    )
                    this.flags.set(
                      Flags.KeyboardInput,
                      new _SettingFlag__WEBPACK_IMPORTED_MODULE_2__.SettingFlag(
                        Flags.KeyboardInput,
                        'Keyboard input',
                        'If enabled, send keyboard events to streamer',
                        true,
                        useUrlParams
                      )
                    )
                    this.flags.set(
                      Flags.MouseInput,
                      new _SettingFlag__WEBPACK_IMPORTED_MODULE_2__.SettingFlag(
                        Flags.MouseInput,
                        'Mouse input',
                        'If enabled, send mouse events to streamer',
                        true,
                        useUrlParams
                      )
                    )
                    this.flags.set(
                      Flags.TouchInput,
                      new _SettingFlag__WEBPACK_IMPORTED_MODULE_2__.SettingFlag(
                        Flags.TouchInput,
                        'Touch input',
                        'If enabled, send touch events to streamer',
                        true,
                        useUrlParams
                      )
                    )
                    this.flags.set(
                      Flags.GamepadInput,
                      new _SettingFlag__WEBPACK_IMPORTED_MODULE_2__.SettingFlag(
                        Flags.GamepadInput,
                        'Gamepad input',
                        'If enabled, send gamepad events to streamer',
                        true,
                        useUrlParams
                      )
                    )
                    this.flags.set(
                      Flags.XRControllerInput,
                      new _SettingFlag__WEBPACK_IMPORTED_MODULE_2__.SettingFlag(
                        Flags.XRControllerInput,
                        'XR controller input',
                        'If enabled, send XR controller events to streamer',
                        true,
                        useUrlParams
                      )
                    )
                    /**
                     * Numeric parameters
                     */
                    this.numericParameters.set(
                      NumericParameters.AFKTimeoutSecs,
                      new _SettingNumber__WEBPACK_IMPORTED_MODULE_3__.SettingNumber(
                        NumericParameters.AFKTimeoutSecs,
                        'AFK timeout',
                        'The time (in seconds) it takes for the application to time out if AFK timeout is enabled.',
                        0 /*min*/,
                        600 /*max*/,
                        120 /*value*/,
                        useUrlParams
                      )
                    )
                    this.numericParameters.set(
                      NumericParameters.MaxReconnectAttempts,
                      new _SettingNumber__WEBPACK_IMPORTED_MODULE_3__.SettingNumber(
                        NumericParameters.MaxReconnectAttempts,
                        'Max Reconnects',
                        'Maximum number of reconnects the application will attempt when a streamer disconnects.',
                        0 /*min*/,
                        999 /*max*/,
                        3 /*value*/,
                        useUrlParams
                      )
                    )
                    this.numericParameters.set(
                      NumericParameters.MinQP,
                      new _SettingNumber__WEBPACK_IMPORTED_MODULE_3__.SettingNumber(
                        NumericParameters.MinQP,
                        'Min QP',
                        'The lower bound for the quantization parameter (QP) of the encoder. 0 = Best quality, 51 = worst quality.',
                        0 /*min*/,
                        51 /*max*/,
                        0 /*value*/,
                        useUrlParams
                      )
                    )
                    this.numericParameters.set(
                      NumericParameters.MaxQP,
                      new _SettingNumber__WEBPACK_IMPORTED_MODULE_3__.SettingNumber(
                        NumericParameters.MaxQP,
                        'Max QP',
                        'The upper bound for the quantization parameter (QP) of the encoder. 0 = Best quality, 51 = worst quality.',
                        0 /*min*/,
                        51 /*max*/,
                        51 /*value*/,
                        useUrlParams
                      )
                    )
                    this.numericParameters.set(
                      NumericParameters.WebRTCFPS,
                      new _SettingNumber__WEBPACK_IMPORTED_MODULE_3__.SettingNumber(
                        NumericParameters.WebRTCFPS,
                        'Max FPS',
                        'The maximum FPS that WebRTC will try to transmit frames at.',
                        1 /*min*/,
                        999 /*max*/,
                        60 /*value*/,
                        useUrlParams
                      )
                    )
                    this.numericParameters.set(
                      NumericParameters.WebRTCMinBitrate,
                      new _SettingNumber__WEBPACK_IMPORTED_MODULE_3__.SettingNumber(
                        NumericParameters.WebRTCMinBitrate,
                        'Min Bitrate (kbps)',
                        'The minimum bitrate that WebRTC should use.',
                        0 /*min*/,
                        500000 /*max*/,
                        0 /*value*/,
                        useUrlParams
                      )
                    )
                    this.numericParameters.set(
                      NumericParameters.WebRTCMaxBitrate,
                      new _SettingNumber__WEBPACK_IMPORTED_MODULE_3__.SettingNumber(
                        NumericParameters.WebRTCMaxBitrate,
                        'Max Bitrate (kbps)',
                        'The maximum bitrate that WebRTC should use.',
                        0 /*min*/,
                        500000 /*max*/,
                        0 /*value*/,
                        useUrlParams
                      )
                    )
                  }
                  /**
                   * Add a callback to fire when the numeric setting is toggled.
                   * @param id The id of the flag.
                   * @param onChangedListener The callback to fire when the numeric value changes.
                   */
                  _addOnNumericSettingChangedListener(id, onChangedListener) {
                    if (this.numericParameters.has(id)) {
                      this.numericParameters.get(id).addOnChangedListener(onChangedListener)
                    }
                  }
                  _addOnOptionSettingChangedListener(id, onChangedListener) {
                    if (this.optionParameters.has(id)) {
                      this.optionParameters.get(id).addOnChangedListener(onChangedListener)
                    }
                  }
                  /**
                   * @param id The id of the numeric setting we are interested in getting a value for.
                   * @returns The numeric value stored in the parameter with the passed id.
                   */
                  getNumericSettingValue(id) {
                    if (this.numericParameters.has(id)) {
                      return this.numericParameters.get(id).number
                    } else {
                      throw new Error(`There is no numeric setting with the id of ${id}`)
                    }
                  }
                  /**
                   * @param id The id of the text setting we are interested in getting a value for.
                   * @returns The text value stored in the parameter with the passed id.
                   */
                  getTextSettingValue(id) {
                    if (this.textParameters.has(id)) {
                      return this.textParameters.get(id).value
                    } else {
                      throw new Error(`There is no numeric setting with the id of ${id}`)
                    }
                  }
                  /**
                   * Set number in the setting.
                   * @param id The id of the numeric setting we are interested in.
                   * @param value The numeric value to set.
                   */
                  setNumericSetting(id, value) {
                    if (this.numericParameters.has(id)) {
                      this.numericParameters.get(id).number = value
                    } else {
                      throw new Error(`There is no numeric setting with the id of ${id}`)
                    }
                  }
                  /**
                   * Add a callback to fire when the flag is toggled.
                   * @param id The id of the flag.
                   * @param onChangeListener The callback to fire when the value changes.
                   */
                  _addOnSettingChangedListener(id, onChangeListener) {
                    if (this.flags.has(id)) {
                      this.flags.get(id).onChange = onChangeListener
                    }
                  }
                  /**
                   * Add a callback to fire when the text is changed.
                   * @param id The id of the flag.
                   * @param onChangeListener The callback to fire when the value changes.
                   */
                  _addOnTextSettingChangedListener(id, onChangeListener) {
                    if (this.textParameters.has(id)) {
                      this.textParameters.get(id).onChange = onChangeListener
                    }
                  }
                  /**
                   * Get the option which has the given id.
                   * @param id The id of the option.
                   * @returns The SettingOption object matching id
                   */
                  getSettingOption(id) {
                    return this.optionParameters.get(id)
                  }
                  /**
                   * Get the value of the configuration flag which has the given id.
                   * @param id The unique id for the flag.
                   * @returns True if the flag is enabled.
                   */
                  isFlagEnabled(id) {
                    return this.flags.get(id).flag
                  }
                  /**
                   * Set flag to be enabled/disabled.
                   * @param id The id of the flag to toggle.
                   * @param flagEnabled True if the flag should be enabled.
                   */
                  setFlagEnabled(id, flagEnabled) {
                    if (!this.flags.has(id)) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Warning(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_4__.Logger.GetStackTrace(),
                        `Cannot toggle flag called ${id} - it does not exist in the Config.flags map.`
                      )
                    } else {
                      this.flags.get(id).flag = flagEnabled
                    }
                  }
                  /**
                   * Set the text setting.
                   * @param id The id of the setting
                   * @param settingValue The value to set in the setting.
                   */
                  setTextSetting(id, settingValue) {
                    if (!this.textParameters.has(id)) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Warning(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_4__.Logger.GetStackTrace(),
                        `Cannot set text setting called ${id} - it does not exist in the Config.textParameters map.`
                      )
                    } else {
                      this.textParameters.get(id).text = settingValue
                    }
                  }
                  /**
                   * Set the option setting list of options.
                   * @param id The id of the setting
                   * @param settingOptions The values the setting could take
                   */
                  setOptionSettingOptions(id, settingOptions) {
                    if (!this.optionParameters.has(id)) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Warning(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_4__.Logger.GetStackTrace(),
                        `Cannot set text setting called ${id} - it does not exist in the Config.optionParameters map.`
                      )
                    } else {
                      this.optionParameters.get(id).options = settingOptions
                    }
                  }
                  /**
                   * Set option enum settings selected option.
                   * @param id The id of the setting
                   * @param settingOptions The value to select out of all the options
                   */
                  setOptionSettingValue(id, settingValue) {
                    if (!this.optionParameters.has(id)) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Warning(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_4__.Logger.GetStackTrace(),
                        `Cannot set text setting called ${id} - it does not exist in the Config.enumParameters map.`
                      )
                    } else {
                      this.optionParameters.get(id).selected = settingValue
                    }
                  }
                  /**
                   * Set the label for the flag.
                   * @param id The id of the flag.
                   * @param label The new label to use for the flag.
                   */
                  setFlagLabel(id, label) {
                    if (!this.flags.has(id)) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_4__.Logger.Warning(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_4__.Logger.GetStackTrace(),
                        `Cannot set label for flag called ${id} - it does not exist in the Config.flags map.`
                      )
                    } else {
                      this.flags.get(id).label = label
                    }
                  }
                  /**
                   * Set a subset of all settings in one function call.
                   *
                   * @param settings A (partial) list of settings to set
                   */
                  setSettings(settings) {
                    for (const key of Object.keys(settings)) {
                      if (isFlagId(key)) {
                        this.setFlagEnabled(key, settings[key])
                      } else if (isNumericId(key)) {
                        this.setNumericSetting(key, settings[key])
                      } else if (isTextId(key)) {
                        this.setTextSetting(key, settings[key])
                      } else if (isOptionId(key)) {
                        this.setOptionSettingValue(key, settings[key])
                      }
                    }
                  }
                  /**
                   * Get all settings
                   * @returns All setting values as an object with setting ids as keys
                   */
                  getSettings() {
                    const settings = {}
                    for (const [key, value] of this.flags.entries()) {
                      settings[key] = value.flag
                    }
                    for (const [key, value] of this.numericParameters.entries()) {
                      settings[key] = value.number
                    }
                    for (const [key, value] of this.textParameters.entries()) {
                      settings[key] = value.text
                    }
                    for (const [key, value] of this.optionParameters.entries()) {
                      settings[key] = value.selected
                    }
                    return settings
                  }
                  /**
                   * Get all Flag settings as an array.
                   * @returns All SettingFlag objects
                   */
                  getFlags() {
                    return Array.from(this.flags.values())
                  }
                  /**
                   * Get all Text settings as an array.
                   * @returns All SettingText objects
                   */
                  getTextSettings() {
                    return Array.from(this.textParameters.values())
                  }
                  /**
                   * Get all Number settings as an array.
                   * @returns All SettingNumber objects
                   */
                  getNumericSettings() {
                    return Array.from(this.numericParameters.values())
                  }
                  /**
                   * Get all Option settings as an array.
                   * @returns All SettingOption objects
                   */
                  getOptionSettings() {
                    return Array.from(this.optionParameters.values())
                  }
                  /**
                   * Emit events when settings change.
                   * @param eventEmitter
                   */
                  _registerOnChangeEvents(eventEmitter) {
                    for (const key of this.flags.keys()) {
                      const flag = this.flags.get(key)
                      if (flag) {
                        flag.onChangeEmit = (newValue) =>
                          eventEmitter.dispatchEvent(
                            new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_5__.SettingsChangedEvent({
                              id: flag.id,
                              type: 'flag',
                              value: newValue,
                              target: flag
                            })
                          )
                      }
                    }
                    for (const key of this.numericParameters.keys()) {
                      const number = this.numericParameters.get(key)
                      if (number) {
                        number.onChangeEmit = (newValue) =>
                          eventEmitter.dispatchEvent(
                            new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_5__.SettingsChangedEvent({
                              id: number.id,
                              type: 'number',
                              value: newValue,
                              target: number
                            })
                          )
                      }
                    }
                    for (const key of this.textParameters.keys()) {
                      const text = this.textParameters.get(key)
                      if (text) {
                        text.onChangeEmit = (newValue) =>
                          eventEmitter.dispatchEvent(
                            new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_5__.SettingsChangedEvent({
                              id: text.id,
                              type: 'text',
                              value: newValue,
                              target: text
                            })
                          )
                      }
                    }
                    for (const key of this.optionParameters.keys()) {
                      const option = this.optionParameters.get(key)
                      if (option) {
                        option.onChangeEmit = (newValue) =>
                          eventEmitter.dispatchEvent(
                            new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_5__.SettingsChangedEvent({
                              id: option.id,
                              type: 'option',
                              value: newValue,
                              target: option
                            })
                          )
                      }
                    }
                  }
                }
                window.Config = Config
                /**
                 * The enum associated with the mouse being locked or hovering
                 */
                var ControlSchemeType
                ;(function (ControlSchemeType) {
                  ControlSchemeType[(ControlSchemeType['LockedMouse'] = 0)] = 'LockedMouse'
                  ControlSchemeType[(ControlSchemeType['HoveringMouse'] = 1)] = 'HoveringMouse'
                })(ControlSchemeType || (ControlSchemeType = {}))

                /***/
              },

            /***/ './src/Config/SettingBase.ts':
              /*!***********************************!*\
  !*** ./src/Config/SettingBase.ts ***!
  \***********************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_30961__) => {
                __nested_webpack_require_30961__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_30961__.d(__webpack_exports__, {
                  /* harmony export */ SettingBase: () => /* binding */ SettingBase
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * Base class for a setting that has a text label and an arbitrary setting value it stores.
                 */
                class SettingBase {
                  constructor(
                    id,
                    label,
                    description,
                    defaultSettingValue,
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    defaultOnChangeListener = () => {}
                  ) {
                    this.onChange = defaultOnChangeListener
                    this.onChangeEmit = () => {
                      /* Do nothing, to be overridden. */
                    }
                    this.id = id
                    this.description = description
                    this.label = label
                    this.value = defaultSettingValue
                  }
                  /**
                   * Set the label text for the setting.
                   * @param label setting label.
                   */
                  set label(inLabel) {
                    this._label = inLabel
                    this.onChangeEmit(this._value)
                  }
                  /**
                   * @returns The label text for the setting.
                   */
                  get label() {
                    return this._label
                  }
                  /**
                   * @return The setting's value.
                   */
                  get value() {
                    return this._value
                  }
                  /**
                   * Update the setting's stored value.
                   * @param inValue The new value for the setting.
                   */
                  set value(inValue) {
                    this._value = inValue
                    this.onChange(this._value, this)
                    this.onChangeEmit(this._value)
                  }
                }

                /***/
              },

            /***/ './src/Config/SettingFlag.ts':
              /*!***********************************!*\
  !*** ./src/Config/SettingFlag.ts ***!
  \***********************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_32768__) => {
                __nested_webpack_require_32768__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_32768__.d(__webpack_exports__, {
                  /* harmony export */ SettingFlag: () => /* binding */ SettingFlag
                  /* harmony export */
                })
                /* harmony import */ var _SettingBase__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_32768__(
                  /*! ./SettingBase */ './src/Config/SettingBase.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * A boolean flag setting object with a text label.
                 */
                class SettingFlag extends _SettingBase__WEBPACK_IMPORTED_MODULE_0__.SettingBase {
                  constructor(
                    id,
                    label,
                    description,
                    defaultFlagValue,
                    useUrlParams,
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    defaultOnChangeListener = () => {}
                  ) {
                    super(id, label, description, defaultFlagValue, defaultOnChangeListener)
                    const urlParams = new URLSearchParams(window.location.search)
                    if (!useUrlParams || !urlParams.has(this.id)) {
                      this.flag = defaultFlagValue
                    } else {
                      // parse flag from url parameters
                      const urlParamFlag = this.getUrlParamFlag()
                      this.flag = urlParamFlag
                    }
                    this.useUrlParams = useUrlParams
                  }
                  /**
                   * Parse the flag value from the url parameters.
                   * @returns True if the url parameters contains /?id, but False if /?id=false
                   */
                  getUrlParamFlag() {
                    const urlParams = new URLSearchParams(window.location.search)
                    if (urlParams.has(this.id)) {
                      if (urlParams.get(this.id) === 'false' || urlParams.get(this.id) === 'False') {
                        return false
                      }
                      return true
                    }
                    return false
                  }
                  /**
                   * Persist the setting value in URL.
                   */
                  updateURLParams() {
                    if (this.useUrlParams) {
                      // set url params
                      const urlParams = new URLSearchParams(window.location.search)
                      if (this.flag === true) {
                        urlParams.set(this.id, 'true')
                      } else {
                        urlParams.set(this.id, 'false')
                      }
                      window.history.replaceState(
                        {},
                        '',
                        urlParams.toString() !== '' ? `${location.pathname}?${urlParams}` : `${location.pathname}`
                      )
                    }
                  }
                  /**
                   * Enables this flag.
                   */
                  enable() {
                    this.flag = true
                  }
                  /**
                   * @return The setting's value.
                   */
                  get flag() {
                    return !!this.value
                  }
                  /**
                   * Update the setting's stored value.
                   * @param inValue The new value for the setting.
                   */
                  set flag(inValue) {
                    this.value = inValue
                  }
                }

                /***/
              },

            /***/ './src/Config/SettingNumber.ts':
              /*!*************************************!*\
  !*** ./src/Config/SettingNumber.ts ***!
  \*************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_35761__) => {
                __nested_webpack_require_35761__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_35761__.d(__webpack_exports__, {
                  /* harmony export */ SettingNumber: () => /* binding */ SettingNumber
                  /* harmony export */
                })
                /* harmony import */ var _SettingBase__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_35761__(
                  /*! ./SettingBase */ './src/Config/SettingBase.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * A number setting object with a text label. Min and max limit the range of allowed values.
                 */
                class SettingNumber extends _SettingBase__WEBPACK_IMPORTED_MODULE_0__.SettingBase {
                  constructor(
                    id,
                    label,
                    description,
                    min,
                    max,
                    defaultNumber,
                    useUrlParams,
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    defaultOnChangeListener = () => {}
                  ) {
                    super(id, label, description, defaultNumber, defaultOnChangeListener)
                    this._min = min
                    this._max = max
                    // attempt to read the number from the url params
                    const urlParams = new URLSearchParams(window.location.search)
                    if (!useUrlParams || !urlParams.has(this.id)) {
                      this.number = defaultNumber
                    } else {
                      const parsedValue = Number.parseInt(urlParams.get(this.id))
                      this.number = Number.isNaN(parsedValue) ? defaultNumber : parsedValue
                    }
                    this.useUrlParams = useUrlParams
                  }
                  /**
                   * Persist the setting value in URL.
                   */
                  updateURLParams() {
                    if (this.useUrlParams) {
                      // set url params like ?id=number
                      const urlParams = new URLSearchParams(window.location.search)
                      urlParams.set(this.id, this.number.toString())
                      window.history.replaceState(
                        {},
                        '',
                        urlParams.toString() !== '' ? `${location.pathname}?${urlParams}` : `${location.pathname}`
                      )
                    }
                  }
                  /**
                   * Set the number value (will be clamped within range).
                   */
                  set number(newNumber) {
                    this.value = this.clamp(newNumber)
                  }
                  /**
                   * @returns The number stored.
                   */
                  get number() {
                    return this.value
                  }
                  /**
                   * Clamps a number between the min and max values (inclusive).
                   * @param inNumber The number to clamp.
                   * @returns The clamped number.
                   */
                  clamp(inNumber) {
                    return Math.max(Math.min(this._max, inNumber), this._min)
                  }
                  /**
                   * Returns the minimum value
                   * @returns The minimum value
                   */
                  get min() {
                    return this._min
                  }
                  /**
                   * Returns the maximum value
                   * @returns The maximum value
                   */
                  get max() {
                    return this._max
                  }
                  /**
                   * Add a change listener to the number object.
                   */
                  addOnChangedListener(onChangedFunc) {
                    this.onChange = onChangedFunc
                  }
                }

                /***/
              },

            /***/ './src/Config/SettingOption.ts':
              /*!*************************************!*\
  !*** ./src/Config/SettingOption.ts ***!
  \*************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_38926__) => {
                __nested_webpack_require_38926__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_38926__.d(__webpack_exports__, {
                  /* harmony export */ SettingOption: () => /* binding */ SettingOption
                  /* harmony export */
                })
                /* harmony import */ var _SettingBase__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_38926__(
                  /*! ./SettingBase */ './src/Config/SettingBase.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * An Option setting object with a text label. Allows you to specify an array of options and select one of them.
                 */
                class SettingOption extends _SettingBase__WEBPACK_IMPORTED_MODULE_0__.SettingBase {
                  constructor(
                    id,
                    label,
                    description,
                    defaultTextValue,
                    options,
                    useUrlParams,
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    defaultOnChangeListener = () => {}
                  ) {
                    super(id, label, description, [defaultTextValue, defaultTextValue], defaultOnChangeListener)
                    this.options = options
                    const urlParams = new URLSearchParams(window.location.search)
                    const stringToMatch =
                      useUrlParams && urlParams.has(this.id) ? this.getUrlParamText() : defaultTextValue
                    this.selected = stringToMatch
                    this.useUrlParams = useUrlParams
                  }
                  /**
                   * Parse the text value from the url parameters.
                   * @returns The text value parsed from the url if the url parameters contains /?id=value, but empty string if just /?id or no url param found.
                   */
                  getUrlParamText() {
                    var _a
                    const urlParams = new URLSearchParams(window.location.search)
                    if (urlParams.has(this.id)) {
                      return (_a = urlParams.get(this.id)) !== null && _a !== void 0 ? _a : ''
                    }
                    return ''
                  }
                  /**
                   * Persist the setting value in URL.
                   */
                  updateURLParams() {
                    if (this.useUrlParams) {
                      // set url params
                      const urlParams = new URLSearchParams(window.location.search)
                      urlParams.set(this.id, this.selected)
                      window.history.replaceState(
                        {},
                        '',
                        urlParams.toString() !== '' ? `${location.pathname}?${urlParams}` : `${location.pathname}`
                      )
                    }
                  }
                  /**
                   * Add a change listener to the select element.
                   */
                  addOnChangedListener(onChangedFunc) {
                    this.onChange = onChangedFunc
                  }
                  /**
                   * @returns All available options as an array
                   */
                  get options() {
                    return this._options
                  }
                  /**
                   * Set options
                   * @param values Array of options
                   */
                  set options(values) {
                    this._options = values
                    this.onChangeEmit(this.selected)
                  }
                  /**
                   * @returns Selected option as a string
                   */
                  get selected() {
                    return this.value
                  }
                  /**
                   * Set selected option if it matches one of the available options
                   * @param value Selected option
                   */
                  set selected(value) {
                    // A user may not specify the full possible value so we instead use the closest match.
                    // eg ?xxx=H264 would select 'H264 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f'
                    const filteredList = this.options.filter((option) => option.indexOf(value) !== -1)
                    if (filteredList.length) {
                      this.value = filteredList[0]
                    }
                  }
                }

                /***/
              },

            /***/ './src/Config/SettingText.ts':
              /*!***********************************!*\
  !*** ./src/Config/SettingText.ts ***!
  \***********************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_42555__) => {
                __nested_webpack_require_42555__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_42555__.d(__webpack_exports__, {
                  /* harmony export */ SettingText: () => /* binding */ SettingText
                  /* harmony export */
                })
                /* harmony import */ var _SettingBase__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_42555__(
                  /*! ./SettingBase */ './src/Config/SettingBase.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * A text setting object with a text label.
                 */
                class SettingText extends _SettingBase__WEBPACK_IMPORTED_MODULE_0__.SettingBase {
                  constructor(
                    id,
                    label,
                    description,
                    defaultTextValue,
                    useUrlParams,
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    defaultOnChangeListener = () => {}
                  ) {
                    super(id, label, description, defaultTextValue, defaultOnChangeListener)
                    const urlParams = new URLSearchParams(window.location.search)
                    if (!useUrlParams || !urlParams.has(this.id)) {
                      this.text = defaultTextValue
                    } else {
                      // parse flag from url parameters
                      const urlParamFlag = this.getUrlParamText()
                      this.text = urlParamFlag
                    }
                    this.useUrlParams = useUrlParams
                  }
                  /**
                   * Parse the text value from the url parameters.
                   * @returns The text value parsed from the url if the url parameters contains /?id=value, but empty string if just /?id or no url param found.
                   */
                  getUrlParamText() {
                    var _a
                    const urlParams = new URLSearchParams(window.location.search)
                    if (urlParams.has(this.id)) {
                      return (_a = urlParams.get(this.id)) !== null && _a !== void 0 ? _a : ''
                    }
                    return ''
                  }
                  /**
                   * Persist the setting value in URL.
                   */
                  updateURLParams() {
                    if (this.useUrlParams) {
                      // set url params
                      const urlParams = new URLSearchParams(window.location.search)
                      urlParams.set(this.id, this.text)
                      window.history.replaceState(
                        {},
                        '',
                        urlParams.toString() !== '' ? `${location.pathname}?${urlParams}` : `${location.pathname}`
                      )
                    }
                  }
                  /**
                   * @return The setting's value.
                   */
                  get text() {
                    return this.value
                  }
                  /**
                   * Update the setting's stored value.
                   * @param inValue The new value for the setting.
                   */
                  set text(inValue) {
                    this.value = inValue
                  }
                }

                /***/
              },

            /***/ './src/DataChannel/DataChannelController.ts':
              /*!**************************************************!*\
  !*** ./src/DataChannel/DataChannelController.ts ***!
  \**************************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_45339__) => {
                __nested_webpack_require_45339__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_45339__.d(__webpack_exports__, {
                  /* harmony export */ DataChannelController: () => /* binding */ DataChannelController
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_45339__(
                  /*! ../Logger/Logger */ './src/Logger/Logger.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Handles the Sending and Receiving of messages to the UE Instance via the Data Channel
                 */
                class DataChannelController {
                  constructor() {
                    this.isReceivingFreezeFrame = false
                  }
                  /**
                   * return the current state of a datachannel controller instance
                   * @returns the current DataChannelController instance
                   */
                  getDataChannelInstance() {
                    return this
                  }
                  /**
                   * To Create and Set up a Data Channel
                   * @param peerConnection - The RTC Peer Connection
                   * @param label - Label of the Data Channel
                   * @param datachannelOptions - Optional RTC DataChannel options
                   */
                  createDataChannel(peerConnection, label, datachannelOptions) {
                    this.peerConnection = peerConnection
                    this.label = label
                    this.datachannelOptions = datachannelOptions
                    if (datachannelOptions == null) {
                      this.datachannelOptions = {}
                      this.datachannelOptions.ordered = true
                    }
                    this.dataChannel = this.peerConnection.createDataChannel(this.label, this.datachannelOptions)
                    this.setupDataChannel()
                  }
                  setupDataChannel() {
                    //We Want an Array Buffer not a blob
                    this.dataChannel.binaryType = 'arraybuffer'
                    this.dataChannel.onopen = (ev) => this.handleOnOpen(ev)
                    this.dataChannel.onclose = (ev) => this.handleOnClose(ev)
                    this.dataChannel.onmessage = (ev) => this.handleOnMessage(ev)
                    this.dataChannel.onerror = (ev) => this.handleOnError(ev)
                  }
                  /**
                   * Handles when the Data Channel is opened
                   */
                  handleOnOpen(ev) {
                    var _a
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      `Data Channel (${this.label}) opened.`,
                      7
                    )
                    this.onOpen((_a = this.dataChannel) === null || _a === void 0 ? void 0 : _a.label, ev)
                  }
                  /**
                   * Handles when the Data Channel is closed
                   */
                  handleOnClose(ev) {
                    var _a
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      `Data Channel (${this.label}) closed.`,
                      7
                    )
                    this.onClose((_a = this.dataChannel) === null || _a === void 0 ? void 0 : _a.label, ev)
                  }
                  /**
                   * Handles when a message is received
                   * @param event - Message Event
                   */
                  handleOnMessage(event) {
                    // Higher log level to prevent log spam with messages received
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      `Data Channel (${this.label}) message: ${event}`,
                      8
                    )
                  }
                  /**
                   * Handles when an error is thrown
                   * @param event - Error Event
                   */
                  handleOnError(event) {
                    var _a
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      `Data Channel (${this.label}) error: ${event}`,
                      7
                    )
                    this.onError((_a = this.dataChannel) === null || _a === void 0 ? void 0 : _a.label, event)
                  }
                  /**
                   * Override to register onOpen handler
                   * @param label Data channel label ("datachannel", "send-datachannel", "recv-datachannel")
                   * @param ev event
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  onOpen(label, ev) {
                    // empty default implementation
                  }
                  /**
                   * Override to register onClose handler
                   * @param label Data channel label ("datachannel", "send-datachannel", "recv-datachannel")
                   * @param ev event
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  onClose(label, ev) {
                    // empty default implementation
                  }
                  /**
                   * Override to register onError handler
                   * @param label Data channel label ("datachannel", "send-datachannel", "recv-datachannel")
                   * @param ev event
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  onError(label, ev) {
                    // empty default implementation
                  }
                }

                /***/
              },

            /***/ './src/DataChannel/DataChannelSender.ts':
              /*!**********************************************!*\
  !*** ./src/DataChannel/DataChannelSender.ts ***!
  \**********************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_50182__) => {
                __nested_webpack_require_50182__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_50182__.d(__webpack_exports__, {
                  /* harmony export */ DataChannelSender: () => /* binding */ DataChannelSender
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_50182__(
                  /*! ../Logger/Logger */ './src/Logger/Logger.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * A class for sending data channel messages
                 */
                class DataChannelSender {
                  /**
                   * @param dataChannelProvider - Data channel object type
                   */
                  constructor(dataChannelProvider) {
                    this.dataChannelProvider = dataChannelProvider
                  }
                  canSend() {
                    return (
                      this.dataChannelProvider.getDataChannelInstance().dataChannel !== undefined &&
                      this.dataChannelProvider.getDataChannelInstance().dataChannel.readyState == 'open'
                    )
                  }
                  /**
                   * Send Data over the Data channel to the UE Instance
                   * @param data - Message Data Array Buffer
                   */
                  sendData(data) {
                    // reset the afk inactivity
                    const dataChannelInstance = this.dataChannelProvider.getDataChannelInstance()
                    if (dataChannelInstance.dataChannel.readyState == 'open') {
                      dataChannelInstance.dataChannel.send(data)
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        `Message Sent: ${new Uint8Array(data)}`,
                        6
                      )
                      this.resetAfkWarningTimerOnDataSend()
                    } else {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Error(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        `Message Failed: ${new Uint8Array(data)}`
                      )
                    }
                  }
                  /**
                   * An override method for resetting the Afk warning timer when data is sent over the data channel
                   */
                  resetAfkWarningTimerOnDataSend() {
                    // Base Functionality: Do Nothing
                  }
                }

                /***/
              },

            /***/ './src/DataChannel/InitialSettings.ts':
              /*!********************************************!*\
  !*** ./src/DataChannel/InitialSettings.ts ***!
  \********************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_52474__) => {
                __nested_webpack_require_52474__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_52474__.d(__webpack_exports__, {
                  /* harmony export */ EncoderSettings: () => /* binding */ EncoderSettings,
                  /* harmony export */ InitialSettings: () => /* binding */ InitialSettings,
                  /* harmony export */ PixelStreamingSettings: () => /* binding */ PixelStreamingSettings,
                  /* harmony export */ WebRTCSettings: () => /* binding */ WebRTCSettings
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * Latency Test Results Data
                 */
                class InitialSettings {
                  constructor() {
                    this.PixelStreamingSettings = new PixelStreamingSettings()
                    this.EncoderSettings = new EncoderSettings()
                    this.WebRTCSettings = new WebRTCSettings()
                  }
                  /**
                   * Checks for compatibility with the FPS and MaxFPS stats between 4.27 and 5
                   */
                  ueCompatible() {
                    if (this.WebRTCSettings.MaxFPS != null) {
                      this.WebRTCSettings.FPS = this.WebRTCSettings.MaxFPS
                    }
                  }
                }
                /**
                 * A class for handling Pixel Streaming details
                 */
                class PixelStreamingSettings {}
                /**
                 * A class for handling encoder stats
                 */
                class EncoderSettings {}
                /**
                 * A class for handling web rtc stats
                 */
                class WebRTCSettings {}

                /***/
              },

            /***/ './src/DataChannel/LatencyTestResults.ts':
              /*!***********************************************!*\
  !*** ./src/DataChannel/LatencyTestResults.ts ***!
  \***********************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_54075__) => {
                __nested_webpack_require_54075__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_54075__.d(__webpack_exports__, {
                  /* harmony export */ LatencyTestResults: () => /* binding */ LatencyTestResults
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_54075__(
                  /*! ../Logger/Logger */ './src/Logger/Logger.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Latency Test Results Data
                 */
                class LatencyTestResults {
                  constructor() {
                    //Fields Set from the latency payload regardless of version
                    this.ReceiptTimeMs = null
                    this.TransmissionTimeMs = null
                    //Fields Set from the latency payload from 4.27.2
                    this.PreCaptureTimeMs = null
                    this.PostCaptureTimeMs = null
                    this.PreEncodeTimeMs = null
                    this.PostEncodeTimeMs = null
                    //Fields Set from the latency payload from 5.0
                    this.EncodeMs = null
                    this.CaptureToSendMs = null
                    //Fields Set when processed
                    this.testStartTimeMs = 0
                    this.browserReceiptTimeMs = 0
                    //Fields set from calculations
                    this.latencyExcludingDecode = 0
                    this.testDuration = 0
                    //ueLatency: number = 0;
                    this.networkLatency = 0
                    this.browserSendLatency = 0
                    this.frameDisplayDeltaTimeMs = 0
                    this.endToEndLatency = 0
                    //uePixelStreamLatency: number = 0;
                    this.encodeLatency = 0
                  }
                  /**
                   * Sets the Delta Time Milliseconds
                   * @param DeltaTimeMs - Delta Time Milliseconds
                   */
                  setFrameDisplayDeltaTime(DeltaTimeMs) {
                    if (this.frameDisplayDeltaTimeMs == 0) {
                      this.frameDisplayDeltaTimeMs = Math.round(DeltaTimeMs)
                    }
                  }
                  /**
                   * Process the encoder times and set them
                   */
                  processFields() {
                    if (this.EncodeMs == null && (this.PreEncodeTimeMs != null || this.PostEncodeTimeMs != null)) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        `Setting Encode Ms \n ${this.PostEncodeTimeMs} \n ${this.PreEncodeTimeMs}`,
                        6
                      )
                      this.EncodeMs = this.PostEncodeTimeMs - this.PreEncodeTimeMs
                    }
                    if (
                      this.CaptureToSendMs == null &&
                      (this.PreCaptureTimeMs != null || this.PostCaptureTimeMs != null)
                    ) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        `Setting CaptureToSendMs Ms \n ${this.PostCaptureTimeMs} \n ${this.PreCaptureTimeMs}`,
                        6
                      )
                      this.CaptureToSendMs = this.PostCaptureTimeMs - this.PreCaptureTimeMs
                    }
                  }
                }

                /***/
              },

            /***/ './src/FreezeFrame/FreezeFrame.ts':
              /*!****************************************!*\
  !*** ./src/FreezeFrame/FreezeFrame.ts ***!
  \****************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_57113__) => {
                __nested_webpack_require_57113__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_57113__.d(__webpack_exports__, {
                  /* harmony export */ FreezeFrame: () => /* binding */ FreezeFrame
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * A class for managing the freeze frame object
                 */
                class FreezeFrame {
                  /**
                   * Construct a freeze frame
                   * @param rootDiv the div that a freeze frame element will be injected into
                   */
                  constructor(rootDiv) {
                    this.freezeFrameHeight = 0
                    this.freezeFrameWidth = 0
                    this.rootDiv = rootDiv
                    // create the overlay
                    this.rootElement = document.createElement('div')
                    this.rootElement.id = 'freezeFrame'
                    this.rootElement.style.display = 'none'
                    this.rootElement.style.pointerEvents = 'none'
                    this.rootElement.style.position = 'absolute'
                    this.rootElement.style.zIndex = '20'
                    // create the image place holder
                    this.imageElement = document.createElement('img')
                    this.imageElement.style.position = 'absolute'
                    // append the image into the root element and append the element to the root div
                    this.rootElement.appendChild(this.imageElement)
                    this.rootDiv.appendChild(this.rootElement)
                  }
                  /**
                   * Set the freeze frame element for showing
                   */
                  setElementForShow() {
                    this.rootElement.style.display = 'block'
                  }
                  /**
                   * Set the freeze frame element for hiding
                   */
                  setElementForHide() {
                    this.rootElement.style.display = 'none'
                  }
                  /**
                   * Update the freeze frames image source
                   * @param jpeg - the freeze frame image as a byte array data
                   */
                  updateImageElementSource(jpeg) {
                    const base64 = btoa(jpeg.reduce((data, byte) => data + String.fromCharCode(byte), ''))
                    this.imageElement.src = 'data:image/jpeg;base64,' + base64
                  }
                  /**
                   * Set the dimensions for the freeze frame from the element and resize it
                   */
                  setDimensionsFromElementAndResize() {
                    this.freezeFrameHeight = this.imageElement.naturalHeight
                    this.freezeFrameWidth = this.imageElement.naturalWidth
                    this.resize()
                  }
                  /**
                   * Resize a freeze frame element
                   */
                  resize() {
                    if (this.freezeFrameWidth !== 0 && this.freezeFrameHeight !== 0) {
                      let displayWidth = 0
                      let displayHeight = 0
                      let displayTop = 0
                      let displayLeft = 0
                      const parentAspectRatio = this.rootDiv.clientWidth / this.rootDiv.clientHeight
                      const videoAspectRatio = this.freezeFrameWidth / this.freezeFrameHeight
                      if (parentAspectRatio < videoAspectRatio) {
                        displayWidth = this.rootDiv.clientWidth
                        displayHeight = Math.floor(this.rootDiv.clientWidth / videoAspectRatio)
                        displayTop = Math.floor((this.rootDiv.clientHeight - displayHeight) * 0.5)
                        displayLeft = 0
                      } else {
                        displayWidth = Math.floor(this.rootDiv.clientHeight * videoAspectRatio)
                        displayHeight = this.rootDiv.clientHeight
                        displayTop = 0
                        displayLeft = Math.floor((this.rootDiv.clientWidth - displayWidth) * 0.5)
                      }
                      this.rootElement.style.width = this.rootDiv.offsetWidth + 'px'
                      this.rootElement.style.height = this.rootDiv.offsetHeight + 'px'
                      this.rootElement.style.left = 0 + 'px'
                      this.rootElement.style.top = 0 + 'px'
                      this.imageElement.style.width = displayWidth + 'px'
                      this.imageElement.style.height = displayHeight + 'px'
                      this.imageElement.style.left = displayLeft + 'px'
                      this.imageElement.style.top = displayTop + 'px'
                    }
                  }
                }

                /***/
              },

            /***/ './src/FreezeFrame/FreezeFrameController.ts':
              /*!**************************************************!*\
  !*** ./src/FreezeFrame/FreezeFrameController.ts ***!
  \**************************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_61351__) => {
                __nested_webpack_require_61351__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_61351__.d(__webpack_exports__, {
                  /* harmony export */ FreezeFrameController: () => /* binding */ FreezeFrameController
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_61351__(
                  /*! ../Logger/Logger */ './src/Logger/Logger.ts'
                )
                /* harmony import */ var _FreezeFrame__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_61351__(
                  /*! ./FreezeFrame */ './src/FreezeFrame/FreezeFrame.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * A class for controlling freeze frame functionality
                 */
                class FreezeFrameController {
                  /**
                   * Construct a freeze frame controller
                   * @param rootDiv - the div that a freeze frame element will be injected into
                   */
                  constructor(rootDiv) {
                    this.receiving = false
                    this.size = 0
                    this.jpeg = undefined
                    this.valid = false
                    this.freezeFrameDelay = 50
                    this.freezeFrame = new _FreezeFrame__WEBPACK_IMPORTED_MODULE_0__.FreezeFrame(rootDiv)
                  }
                  /**
                   * Show the freeze frame if it is valid
                   */
                  showFreezeFrame() {
                    if (this.valid) {
                      this.freezeFrame.setElementForShow()
                    }
                  }
                  /**
                   * Hide the freeze frame and set the validity to false
                   */
                  hideFreezeFrame() {
                    this.valid = false
                    this.freezeFrame.setElementForHide()
                  }
                  /**
                   * Update the freeze frames image source and load it
                   * @param jpeg - the freeze frame image as a byte array data
                   * @param onLoadCallBack - a call back for managing if the play overlay needs to be shown or not
                   */
                  updateFreezeFrameAndShow(jpeg, onLoadCallBack) {
                    this.freezeFrame.updateImageElementSource(jpeg)
                    this.freezeFrame.imageElement.onload = () => {
                      this.freezeFrame.setDimensionsFromElementAndResize()
                      onLoadCallBack()
                    }
                  }
                  /**
                   * Process the new freeze frame image and update it
                   * @param view - the freeze frame image as a byte array data
                   * @param onLoadCallBack - a call back for managing if the play overlay needs to be shown or not
                   */
                  processFreezeFrameMessage(view, onLoadCallBack) {
                    // Reset freeze frame if we got a freeze frame message and we are not "receiving" yet.
                    if (!this.receiving) {
                      this.receiving = true
                      this.valid = false
                      this.size = 0
                      this.jpeg = undefined
                    }
                    // Extract total size of freeze frame (across all chunks)
                    this.size = new DataView(view.slice(1, 5).buffer).getInt32(0, true)
                    // Get the jpeg part of the payload
                    const jpegBytes = view.slice(1 + 4)
                    // Append to existing jpeg that holds the freeze frame
                    if (this.jpeg) {
                      const jpeg = new Uint8Array(this.jpeg.length + jpegBytes.length)
                      jpeg.set(this.jpeg, 0)
                      jpeg.set(jpegBytes, this.jpeg.length)
                      this.jpeg = jpeg
                    }
                    // No existing freeze frame jpeg, make one
                    else {
                      this.jpeg = jpegBytes
                      this.receiving = true
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                        `received first chunk of freeze frame: ${this.jpeg.length}/${this.size}`,
                        6
                      )
                    }
                    // Finished receiving freeze frame, we can show it now
                    if (this.jpeg.length === this.size) {
                      this.receiving = false
                      this.valid = true
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                        `received complete freeze frame ${this.size}`,
                        6
                      )
                      this.updateFreezeFrameAndShow(this.jpeg, onLoadCallBack)
                    }
                    // We received more data than the freeze frame payload message indicate (this is an error)
                    else if (this.jpeg.length > this.size) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                        `received bigger freeze frame than advertised: ${this.jpeg.length}/${this.size}`
                      )
                      this.jpeg = undefined
                      this.receiving = false
                    }
                  }
                }

                /***/
              },

            /***/ './src/Inputs/FakeTouchController.ts':
              /*!*******************************************!*\
  !*** ./src/Inputs/FakeTouchController.ts ***!
  \*******************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_66019__) => {
                __nested_webpack_require_66019__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_66019__.d(__webpack_exports__, {
                  /* harmony export */ FakeTouchController: () => /* binding */ FakeTouchController,
                  /* harmony export */ FakeTouchFinger: () => /* binding */ FakeTouchFinger
                  /* harmony export */
                })
                /* harmony import */ var _MouseButtons__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_66019__(
                  /*! ./MouseButtons */ './src/Inputs/MouseButtons.ts'
                )
                /* harmony import */ var _Util_EventListenerTracker__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_66019__(
                    /*! ../Util/EventListenerTracker */ './src/Util/EventListenerTracker.ts'
                  )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Allows for the usage of fake touch events and implements ITouchController
                 * @param dataChannelController - The controller for the Data channel
                 * @param videoElementParent - The video player DOM element
                 */
                class FakeTouchController {
                  /**
                   * @param toStreamerMessagesProvider - Stream message instance
                   * @param videoElementProvider - Video element instance
                   * @param coordinateConverter - A coordinate converter instance
                   */
                  constructor(toStreamerMessagesProvider, videoElementProvider, coordinateConverter) {
                    // Utility for keeping track of event handlers and unregistering them
                    this.touchEventListenerTracker =
                      new _Util_EventListenerTracker__WEBPACK_IMPORTED_MODULE_0__.EventListenerTracker()
                    this.toStreamerMessagesProvider = toStreamerMessagesProvider
                    this.videoElementProvider = videoElementProvider
                    this.coordinateConverter = coordinateConverter
                    const ontouchstart = (ev) => this.onTouchStart(ev)
                    const ontouchend = (ev) => this.onTouchEnd(ev)
                    const ontouchmove = (ev) => this.onTouchMove(ev)
                    document.addEventListener('touchstart', ontouchstart, {
                      passive: false
                    })
                    document.addEventListener('touchend', ontouchend, {
                      passive: false
                    })
                    document.addEventListener('touchmove', ontouchmove, {
                      passive: false
                    })
                    this.touchEventListenerTracker.addUnregisterCallback(() =>
                      document.removeEventListener('touchstart', ontouchstart)
                    )
                    this.touchEventListenerTracker.addUnregisterCallback(() =>
                      document.removeEventListener('touchend', ontouchend)
                    )
                    this.touchEventListenerTracker.addUnregisterCallback(() =>
                      document.removeEventListener('touchmove', ontouchmove)
                    )
                  }
                  /**
                   * Unregister all touch events
                   */
                  unregisterTouchEvents() {
                    this.touchEventListenerTracker.unregisterAll()
                  }
                  /**
                   * Sets the video Element Parent Client Rect numbers for this class
                   * @param videoElementParentClientRect - a html ElementParentClientRect object
                   */
                  setVideoElementParentClientRect(videoElementParentClientRect) {
                    this.videoElementParentClientRect = videoElementParentClientRect
                  }
                  /**
                   * When a touch event begins
                   * @param touch - the activating touch event
                   */
                  onTouchStart(touch) {
                    if (!this.videoElementProvider.isVideoReady()) {
                      return
                    }
                    if (this.fakeTouchFinger == null) {
                      const first_touch = touch.changedTouches[0]
                      this.fakeTouchFinger = new FakeTouchFinger(
                        first_touch.identifier,
                        first_touch.clientX - this.videoElementParentClientRect.left,
                        first_touch.clientY - this.videoElementParentClientRect.top
                      )
                      const videoElementParent = this.videoElementProvider.getVideoParentElement()
                      const mouseEvent = new MouseEvent('mouseenter', first_touch)
                      videoElementParent.dispatchEvent(mouseEvent)
                      const coord = this.coordinateConverter.normalizeAndQuantizeUnsigned(
                        this.fakeTouchFinger.x,
                        this.fakeTouchFinger.y
                      )
                      const toStreamerHandlers = this.toStreamerMessagesProvider.toStreamerHandlers
                      toStreamerHandlers.get('MouseDown')([
                        _MouseButtons__WEBPACK_IMPORTED_MODULE_1__.MouseButton.mainButton,
                        coord.x,
                        coord.y
                      ])
                    }
                    touch.preventDefault()
                  }
                  /**
                   * When a touch event ends
                   * @param touchEvent - the activating touch event
                   */
                  onTouchEnd(touchEvent) {
                    if (!this.videoElementProvider.isVideoReady()) {
                      return
                    }
                    const videoElementParent = this.videoElementProvider.getVideoParentElement()
                    const toStreamerHandlers = this.toStreamerMessagesProvider.toStreamerHandlers
                    for (let t = 0; t < touchEvent.changedTouches.length; t++) {
                      const touch = touchEvent.changedTouches[t]
                      if (touch.identifier === this.fakeTouchFinger.id) {
                        const x = touch.clientX - this.videoElementParentClientRect.left
                        const y = touch.clientY - this.videoElementParentClientRect.top
                        const coord = this.coordinateConverter.normalizeAndQuantizeUnsigned(x, y)
                        toStreamerHandlers.get('MouseUp')([
                          _MouseButtons__WEBPACK_IMPORTED_MODULE_1__.MouseButton.mainButton,
                          coord.x,
                          coord.y
                        ])
                        const mouseEvent = new MouseEvent('mouseleave', touch)
                        videoElementParent.dispatchEvent(mouseEvent)
                        this.fakeTouchFinger = null
                        break
                      }
                    }
                    touchEvent.preventDefault()
                  }
                  /**
                   * On a Move touch event
                   * @param touchEvent - the activating touch event
                   */
                  onTouchMove(touchEvent) {
                    if (!this.videoElementProvider.isVideoReady()) {
                      return
                    }
                    const toStreamerHandlers = this.toStreamerMessagesProvider.toStreamerHandlers
                    for (let t = 0; t < touchEvent.touches.length; t++) {
                      const touch = touchEvent.touches[t]
                      if (touch.identifier === this.fakeTouchFinger.id) {
                        const x = touch.clientX - this.videoElementParentClientRect.left
                        const y = touch.clientY - this.videoElementParentClientRect.top
                        const coord = this.coordinateConverter.normalizeAndQuantizeUnsigned(x, y)
                        const delta = this.coordinateConverter.normalizeAndQuantizeSigned(
                          x - this.fakeTouchFinger.x,
                          y - this.fakeTouchFinger.y
                        )
                        toStreamerHandlers.get('MouseMove')([coord.x, coord.y, delta.x, delta.y])
                        this.fakeTouchFinger.x = x
                        this.fakeTouchFinger.y = y
                        break
                      }
                    }
                    touchEvent.preventDefault()
                  }
                }
                /**
                 * The interface for finger position mapping
                 */
                class FakeTouchFinger {
                  /**
                   * @param id - the button id
                   * @param x - the x axis value
                   * @param y - the y axis value
                   */
                  constructor(id, x, y) {
                    this.id = id
                    this.x = x
                    this.y = y
                  }
                }

                /***/
              },

            /***/ './src/Inputs/GamepadController.ts':
              /*!*****************************************!*\
  !*** ./src/Inputs/GamepadController.ts ***!
  \*****************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_73359__) => {
                __nested_webpack_require_73359__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_73359__.d(__webpack_exports__, {
                  /* harmony export */ GamePadController: () => /* binding */ GamePadController,
                  /* harmony export */ gamepadLayout: () => /* binding */ gamepadLayout
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_73359__(
                  /*! ../Logger/Logger */ './src/Logger/Logger.ts'
                )
                /* harmony import */ var _Util_EventListenerTracker__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_73359__(
                    /*! ../Util/EventListenerTracker */ './src/Util/EventListenerTracker.ts'
                  )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * The class that handles the functionality of gamepads and controllers
                 */
                class GamePadController {
                  /**
                   * @param toStreamerMessagesProvider - Stream message instance
                   */
                  constructor(toStreamerMessagesProvider) {
                    // Utility for keeping track of event handlers and unregistering them
                    this.gamePadEventListenerTracker =
                      new _Util_EventListenerTracker__WEBPACK_IMPORTED_MODULE_0__.EventListenerTracker()
                    this.toStreamerMessagesProvider = toStreamerMessagesProvider
                    this.requestAnimationFrame = (
                      window.mozRequestAnimationFrame ||
                      window.webkitRequestAnimationFrame ||
                      window.requestAnimationFrame
                    ).bind(window)
                    const browserWindow = window
                    if ('GamepadEvent' in browserWindow) {
                      const onGamePadConnected = (ev) => this.gamePadConnectHandler(ev)
                      const onGamePadDisconnected = (ev) => this.gamePadDisconnectHandler(ev)
                      window.addEventListener('gamepadconnected', onGamePadConnected)
                      window.addEventListener('gamepaddisconnected', onGamePadDisconnected)
                      this.gamePadEventListenerTracker.addUnregisterCallback(() =>
                        window.removeEventListener('gamepadconnected', onGamePadConnected)
                      )
                      this.gamePadEventListenerTracker.addUnregisterCallback(() =>
                        window.removeEventListener('gamepaddisconnected', onGamePadDisconnected)
                      )
                    } else if ('WebKitGamepadEvent' in browserWindow) {
                      const onWebkitGamePadConnected = (ev) => this.gamePadConnectHandler(ev)
                      const onWebkitGamePadDisconnected = (ev) => this.gamePadDisconnectHandler(ev)
                      window.addEventListener('webkitgamepadconnected', onWebkitGamePadConnected)
                      window.addEventListener('webkitgamepaddisconnected', onWebkitGamePadDisconnected)
                      this.gamePadEventListenerTracker.addUnregisterCallback(() =>
                        window.removeEventListener('webkitgamepadconnected', onWebkitGamePadConnected)
                      )
                      this.gamePadEventListenerTracker.addUnregisterCallback(() =>
                        window.removeEventListener('webkitgamepaddisconnected', onWebkitGamePadDisconnected)
                      )
                    }
                    this.controllers = []
                    if (navigator.getGamepads) {
                      for (const gamepad of navigator.getGamepads()) {
                        if (gamepad) {
                          this.gamePadConnectHandler(new GamepadEvent('gamepadconnected', { gamepad }))
                        }
                      }
                    }
                  }
                  /**
                   * Unregisters all event handlers
                   */
                  unregisterGamePadEvents() {
                    this.gamePadEventListenerTracker.unregisterAll()
                    for (const controller of this.controllers) {
                      if (controller.id !== undefined) {
                        this.onGamepadDisconnected(controller.id)
                      }
                    }
                    this.controllers = []
                    this.onGamepadConnected = () => {}
                    this.onGamepadDisconnected = () => {}
                  }
                  /**
                   * Connects the gamepad handler
                   * @param gamePadEvent - the activating gamepad event
                   */
                  gamePadConnectHandler(gamePadEvent) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                      'Gamepad connect handler',
                      6
                    )
                    const gamepad = gamePadEvent.gamepad
                    const temp = {
                      currentState: gamepad,
                      prevState: gamepad,
                      id: undefined
                    }
                    this.controllers.push(temp)
                    this.controllers[gamepad.index].currentState = gamepad
                    this.controllers[gamepad.index].prevState = gamepad
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                      'gamepad: ' + gamepad.id + ' connected',
                      6
                    )
                    window.requestAnimationFrame(() => this.updateStatus())
                    this.onGamepadConnected()
                  }
                  /**
                   * Disconnects the gamepad handler
                   * @param gamePadEvent - the activating gamepad event
                   */
                  gamePadDisconnectHandler(gamePadEvent) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                      'Gamepad disconnect handler',
                      6
                    )
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                      'gamepad: ' + gamePadEvent.gamepad.id + ' disconnected',
                      6
                    )
                    const deletedController = this.controllers[gamePadEvent.gamepad.index]
                    delete this.controllers[gamePadEvent.gamepad.index]
                    this.controllers = this.controllers.filter((controller) => controller !== undefined)
                    this.onGamepadDisconnected(deletedController.id)
                  }
                  /**
                   * Scan for connected gamepads
                   */
                  scanGamePads() {
                    const gamepads = navigator.getGamepads
                      ? navigator.getGamepads()
                      : navigator.webkitGetGamepads
                      ? navigator.webkitGetGamepads()
                      : []
                    for (let i = 0; i < gamepads.length; i++) {
                      if (gamepads[i] && gamepads[i].index in this.controllers) {
                        this.controllers[gamepads[i].index].currentState = gamepads[i]
                      }
                    }
                  }
                  /**
                   * Updates the status of the gamepad and sends the inputs
                   */
                  updateStatus() {
                    this.scanGamePads()
                    const toStreamerHandlers = this.toStreamerMessagesProvider.toStreamerHandlers
                    // Iterate over multiple controllers in the case the multiple gamepads are connected
                    for (const controller of this.controllers) {
                      // If we haven't received an id (possible if using an older version of UE), return to original functionality
                      const controllerIndex =
                        controller.id === undefined ? this.controllers.indexOf(controller) : controller.id
                      const currentState = controller.currentState
                      for (let i = 0; i < controller.currentState.buttons.length; i++) {
                        const currentButton = controller.currentState.buttons[i]
                        const previousButton = controller.prevState.buttons[i]
                        if (currentButton.pressed) {
                          // press
                          if (i == gamepadLayout.LeftTrigger) {
                            //                       UEs left analog has a button index of 5
                            toStreamerHandlers.get('GamepadAnalog')([controllerIndex, 5, currentButton.value])
                          } else if (i == gamepadLayout.RightTrigger) {
                            //                       UEs right analog has a button index of 6
                            toStreamerHandlers.get('GamepadAnalog')([controllerIndex, 6, currentButton.value])
                          } else {
                            toStreamerHandlers.get('GamepadButtonPressed')([
                              controllerIndex,
                              i,
                              previousButton.pressed ? 1 : 0
                            ])
                          }
                        } else if (!currentButton.pressed && previousButton.pressed) {
                          // release
                          if (i == gamepadLayout.LeftTrigger) {
                            //                       UEs left analog has a button index of 5
                            toStreamerHandlers.get('GamepadAnalog')([controllerIndex, 5, 0])
                          } else if (i == gamepadLayout.RightTrigger) {
                            //                       UEs right analog has a button index of 6
                            toStreamerHandlers.get('GamepadAnalog')([controllerIndex, 6, 0])
                          } else {
                            toStreamerHandlers.get('GamepadButtonReleased')([controllerIndex, i])
                          }
                        }
                      }
                      // Iterate over gamepad axes (we will increment in lots of 2 as there is 2 axes per stick)
                      for (let i = 0; i < currentState.axes.length; i += 2) {
                        // Horizontal axes are even numbered
                        const x = parseFloat(currentState.axes[i].toFixed(4))
                        // Vertical axes are odd numbered
                        // https://w3c.github.io/gamepad/#remapping Gamepad browser side standard mapping has positive down, negative up. This is downright disgusting. So we fix it.
                        const y = -parseFloat(currentState.axes[i + 1].toFixed(4))
                        // UE's analog axes follow the same order as the browsers, but start at index 1 so we will offset as such
                        toStreamerHandlers.get('GamepadAnalog')([controllerIndex, i + 1, x]) // Horizontal axes, only offset by 1
                        toStreamerHandlers.get('GamepadAnalog')([controllerIndex, i + 2, y]) // Vertical axes, offset by two (1 to match UEs axes convention and then another 1 for the vertical axes)
                      }
                      this.controllers[controllerIndex].prevState = currentState
                    }
                    if (this.controllers.length > 0) {
                      this.requestAnimationFrame(() => this.updateStatus())
                    }
                  }
                  onGamepadResponseReceived(gamepadId) {
                    for (const controller of this.controllers) {
                      if (controller.id === undefined) {
                        controller.id = gamepadId
                        break
                      }
                    }
                  }
                  /**
                   * Event to send the gamepadconnected message to the application
                   */
                  onGamepadConnected() {
                    // Default Functionality: Do Nothing
                  }
                  /**
                   * Event to send the gamepaddisconnected message to the application
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  onGamepadDisconnected(controllerIdx) {
                    // Default Functionality: Do Nothing
                  }
                }
                /**
                 * Gamepad layout codes enum
                 */
                var gamepadLayout
                ;(function (gamepadLayout) {
                  gamepadLayout[(gamepadLayout['RightClusterBottomButton'] = 0)] = 'RightClusterBottomButton'
                  gamepadLayout[(gamepadLayout['RightClusterRightButton'] = 1)] = 'RightClusterRightButton'
                  gamepadLayout[(gamepadLayout['RightClusterLeftButton'] = 2)] = 'RightClusterLeftButton'
                  gamepadLayout[(gamepadLayout['RightClusterTopButton'] = 3)] = 'RightClusterTopButton'
                  gamepadLayout[(gamepadLayout['LeftShoulder'] = 4)] = 'LeftShoulder'
                  gamepadLayout[(gamepadLayout['RightShoulder'] = 5)] = 'RightShoulder'
                  gamepadLayout[(gamepadLayout['LeftTrigger'] = 6)] = 'LeftTrigger'
                  gamepadLayout[(gamepadLayout['RightTrigger'] = 7)] = 'RightTrigger'
                  gamepadLayout[(gamepadLayout['SelectOrBack'] = 8)] = 'SelectOrBack'
                  gamepadLayout[(gamepadLayout['StartOrForward'] = 9)] = 'StartOrForward'
                  gamepadLayout[(gamepadLayout['LeftAnalogPress'] = 10)] = 'LeftAnalogPress'
                  gamepadLayout[(gamepadLayout['RightAnalogPress'] = 11)] = 'RightAnalogPress'
                  gamepadLayout[(gamepadLayout['LeftClusterTopButton'] = 12)] = 'LeftClusterTopButton'
                  gamepadLayout[(gamepadLayout['LeftClusterBottomButton'] = 13)] = 'LeftClusterBottomButton'
                  gamepadLayout[(gamepadLayout['LeftClusterLeftButton'] = 14)] = 'LeftClusterLeftButton'
                  gamepadLayout[(gamepadLayout['LeftClusterRightButton'] = 15)] = 'LeftClusterRightButton'
                  gamepadLayout[(gamepadLayout['CentreButton'] = 16)] = 'CentreButton'
                  // Axes
                  gamepadLayout[(gamepadLayout['LeftStickHorizontal'] = 0)] = 'LeftStickHorizontal'
                  gamepadLayout[(gamepadLayout['LeftStickVertical'] = 1)] = 'LeftStickVertical'
                  gamepadLayout[(gamepadLayout['RightStickHorizontal'] = 2)] = 'RightStickHorizontal'
                  gamepadLayout[(gamepadLayout['RightStickVertical'] = 3)] = 'RightStickVertical'
                })(gamepadLayout || (gamepadLayout = {}))

                /***/
              },

            /***/ './src/Inputs/HoveringMouseEvents.ts':
              /*!*******************************************!*\
  !*** ./src/Inputs/HoveringMouseEvents.ts ***!
  \*******************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_86794__) => {
                __nested_webpack_require_86794__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_86794__.d(__webpack_exports__, {
                  /* harmony export */ HoveringMouseEvents: () => /* binding */ HoveringMouseEvents
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_86794__(
                  /*! ../Logger/Logger */ './src/Logger/Logger.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Video Player mouse Hover handler
                 */
                class HoveringMouseEvents {
                  /**
                   * @param mouseController - Mouse Controller instance
                   */
                  constructor(mouseController) {
                    this.mouseController = mouseController
                  }
                  /**
                   * Unregister event handlers
                   */
                  unregisterMouseEvents() {
                    // empty for HoveringMouseEvents implementation
                  }
                  /**
                   * Handle the mouse move event, sends the mouse data to the UE Instance
                   * @param mouseEvent - Mouse Event
                   */
                  updateMouseMovePosition(mouseEvent) {
                    if (!this.mouseController.videoElementProvider.isVideoReady()) {
                      return
                    }
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      'MouseMove',
                      6
                    )
                    const coord = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(
                      mouseEvent.offsetX,
                      mouseEvent.offsetY
                    )
                    const delta = this.mouseController.coordinateConverter.normalizeAndQuantizeSigned(
                      mouseEvent.movementX,
                      mouseEvent.movementY
                    )
                    const toStreamerHandlers = this.mouseController.toStreamerMessagesProvider.toStreamerHandlers
                    toStreamerHandlers.get('MouseMove')([coord.x, coord.y, delta.x, delta.y])
                    mouseEvent.preventDefault()
                  }
                  /**
                   * Handle the mouse Down event, sends the mouse data to the UE Instance
                   * @param mouseEvent - Mouse Event
                   */
                  handleMouseDown(mouseEvent) {
                    if (!this.mouseController.videoElementProvider.isVideoReady()) {
                      return
                    }
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      'onMouse Down',
                      6
                    )
                    const coord = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(
                      mouseEvent.offsetX,
                      mouseEvent.offsetY
                    )
                    const toStreamerHandlers = this.mouseController.toStreamerMessagesProvider.toStreamerHandlers
                    toStreamerHandlers.get('MouseDown')([mouseEvent.button, coord.x, coord.y])
                    mouseEvent.preventDefault()
                  }
                  /**
                   * Handle the mouse Up event, sends the mouse data to the UE Instance
                   * @param mouseEvent - Mouse Event
                   */
                  handleMouseUp(mouseEvent) {
                    if (!this.mouseController.videoElementProvider.isVideoReady()) {
                      return
                    }
                    const coord = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(
                      mouseEvent.offsetX,
                      mouseEvent.offsetY
                    )
                    const toStreamerHandlers = this.mouseController.toStreamerMessagesProvider.toStreamerHandlers
                    toStreamerHandlers.get('MouseUp')([mouseEvent.button, coord.x, coord.y])
                    mouseEvent.preventDefault()
                  }
                  /**
                   * Handle the mouse context menu event, sends the mouse data to the UE Instance
                   * @param mouseEvent - Mouse Event
                   */
                  handleContextMenu(mouseEvent) {
                    if (!this.mouseController.videoElementProvider.isVideoReady()) {
                      return
                    }
                    const coord = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(
                      mouseEvent.offsetX,
                      mouseEvent.offsetY
                    )
                    const toStreamerHandlers = this.mouseController.toStreamerMessagesProvider.toStreamerHandlers
                    toStreamerHandlers.get('MouseUp')([mouseEvent.button, coord.x, coord.y])
                    mouseEvent.preventDefault()
                  }
                  /**
                   * Handle the mouse wheel event, sends the mouse wheel data to the UE Instance
                   * @param wheelEvent - Mouse Event
                   */
                  handleMouseWheel(wheelEvent) {
                    if (!this.mouseController.videoElementProvider.isVideoReady()) {
                      return
                    }
                    const coord = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(
                      wheelEvent.offsetX,
                      wheelEvent.offsetY
                    )
                    const toStreamerHandlers = this.mouseController.toStreamerMessagesProvider.toStreamerHandlers
                    toStreamerHandlers.get('MouseWheel')([wheelEvent.wheelDelta, coord.x, coord.y])
                    wheelEvent.preventDefault()
                  }
                  /**
                   * Handle the mouse double click event, sends the mouse data to the UE Instance
                   * @param mouseEvent - Mouse Event
                   */
                  handleMouseDouble(mouseEvent) {
                    if (!this.mouseController.videoElementProvider.isVideoReady()) {
                      return
                    }
                    const coord = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(
                      mouseEvent.offsetX,
                      mouseEvent.offsetY
                    )
                    const toStreamerHandlers = this.mouseController.toStreamerMessagesProvider.toStreamerHandlers
                    toStreamerHandlers.get('MouseDouble')([mouseEvent.button, coord.x, coord.y])
                  }
                  /**
                   * Handle the press mouse buttons event, sends the mouse data to the UE Instance
                   * @param mouseEvent - Mouse Event
                   */
                  handlePressMouseButtons(mouseEvent) {
                    if (!this.mouseController.videoElementProvider.isVideoReady()) {
                      return
                    }
                    this.mouseController.pressMouseButtons(mouseEvent.buttons, mouseEvent.offsetX, mouseEvent.offsetY)
                  }
                  /**
                   * Handle the release mouse buttons event, sends the mouse data to the UE Instance
                   * @param mouseEvent - Mouse Event
                   */
                  handleReleaseMouseButtons(mouseEvent) {
                    if (!this.mouseController.videoElementProvider.isVideoReady()) {
                      return
                    }
                    this.mouseController.releaseMouseButtons(mouseEvent.buttons, mouseEvent.offsetX, mouseEvent.offsetY)
                  }
                }

                /***/
              },

            /***/ './src/Inputs/InputClassesFactory.ts':
              /*!*******************************************!*\
  !*** ./src/Inputs/InputClassesFactory.ts ***!
  \*******************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_93327__) => {
                __nested_webpack_require_93327__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_93327__.d(__webpack_exports__, {
                  /* harmony export */ ActiveKeys: () => /* binding */ ActiveKeys,
                  /* harmony export */ InputClassesFactory: () => /* binding */ InputClassesFactory
                  /* harmony export */
                })
                /* harmony import */ var _FakeTouchController__WEBPACK_IMPORTED_MODULE_4__ =
                  __nested_webpack_require_93327__(/*! ./FakeTouchController */ './src/Inputs/FakeTouchController.ts')
                /* harmony import */ var _KeyboardController__WEBPACK_IMPORTED_MODULE_1__ =
                  __nested_webpack_require_93327__(/*! ./KeyboardController */ './src/Inputs/KeyboardController.ts')
                /* harmony import */ var _MouseController__WEBPACK_IMPORTED_MODULE_2__ =
                  __nested_webpack_require_93327__(/*! ./MouseController */ './src/Inputs/MouseController.ts')
                /* harmony import */ var _TouchController__WEBPACK_IMPORTED_MODULE_5__ =
                  __nested_webpack_require_93327__(/*! ./TouchController */ './src/Inputs/TouchController.ts')
                /* harmony import */ var _GamepadController__WEBPACK_IMPORTED_MODULE_6__ =
                  __nested_webpack_require_93327__(/*! ./GamepadController */ './src/Inputs/GamepadController.ts')
                /* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_93327__(
                  /*! ../Config/Config */ './src/Config/Config.ts'
                )
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_93327__(
                  /*! ../Logger/Logger */ './src/Logger/Logger.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Class for making and setting up input class types
                 */
                class InputClassesFactory {
                  /**
                   * @param toStreamerMessagesProvider - Stream message instance
                   * @param videoElementProvider - Video Player instance
                   * @param coordinateConverter - A coordinateConverter instance
                   */
                  constructor(toStreamerMessagesProvider, videoElementProvider, coordinateConverter) {
                    this.activeKeys = new ActiveKeys()
                    this.toStreamerMessagesProvider = toStreamerMessagesProvider
                    this.videoElementProvider = videoElementProvider
                    this.coordinateConverter = coordinateConverter
                  }
                  /**
                   * Registers browser key events.
                   */
                  registerKeyBoard(config) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      'Register Keyboard Events',
                      7
                    )
                    const keyboardController = new _KeyboardController__WEBPACK_IMPORTED_MODULE_1__.KeyboardController(
                      this.toStreamerMessagesProvider,
                      config,
                      this.activeKeys
                    )
                    keyboardController.registerKeyBoardEvents()
                    return keyboardController
                  }
                  /**
                   * register mouse events based on a control type
                   * @param controlScheme - if the mouse is either hovering or locked
                   */
                  registerMouse(controlScheme) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      'Register Mouse Events',
                      7
                    )
                    const mouseController = new _MouseController__WEBPACK_IMPORTED_MODULE_2__.MouseController(
                      this.toStreamerMessagesProvider,
                      this.videoElementProvider,
                      this.coordinateConverter,
                      this.activeKeys
                    )
                    switch (controlScheme) {
                      case _Config_Config__WEBPACK_IMPORTED_MODULE_3__.ControlSchemeType.LockedMouse:
                        mouseController.registerLockedMouseEvents(mouseController)
                        break
                      case _Config_Config__WEBPACK_IMPORTED_MODULE_3__.ControlSchemeType.HoveringMouse:
                        mouseController.registerHoveringMouseEvents(mouseController)
                        break
                      default:
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Info(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                          'unknown Control Scheme Type Defaulting to Locked Mouse Events'
                        )
                        mouseController.registerLockedMouseEvents(mouseController)
                        break
                    }
                    return mouseController
                  }
                  /**
                   * register touch events
                   * @param fakeMouseTouch - the faked mouse touch event
                   */
                  registerTouch(fakeMouseTouch, videoElementParentClientRect) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      'Registering Touch',
                      6
                    )
                    if (fakeMouseTouch) {
                      const fakeTouchController =
                        new _FakeTouchController__WEBPACK_IMPORTED_MODULE_4__.FakeTouchController(
                          this.toStreamerMessagesProvider,
                          this.videoElementProvider,
                          this.coordinateConverter
                        )
                      fakeTouchController.setVideoElementParentClientRect(videoElementParentClientRect)
                      return fakeTouchController
                    } else {
                      return new _TouchController__WEBPACK_IMPORTED_MODULE_5__.TouchController(
                        this.toStreamerMessagesProvider,
                        this.videoElementProvider,
                        this.coordinateConverter
                      )
                    }
                  }
                  /**
                   * registers a gamepad
                   */
                  registerGamePad() {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      'Register Game Pad',
                      7
                    )
                    const gamePadController = new _GamepadController__WEBPACK_IMPORTED_MODULE_6__.GamePadController(
                      this.toStreamerMessagesProvider
                    )
                    return gamePadController
                  }
                }
                /**
                 * A class that keeps track of current active keys
                 */
                class ActiveKeys {
                  constructor() {
                    this.activeKeys = []
                    this.activeKeys = []
                  }
                  /**
                   * Get the current array of active keys
                   * @returns - an array of active keys
                   */
                  getActiveKeys() {
                    return this.activeKeys
                  }
                }

                /***/
              },

            /***/ './src/Inputs/KeyboardController.ts':
              /*!******************************************!*\
  !*** ./src/Inputs/KeyboardController.ts ***!
  \******************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_99229__) => {
                __nested_webpack_require_99229__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_99229__.d(__webpack_exports__, {
                  /* harmony export */ KeyboardController: () => /* binding */ KeyboardController
                  /* harmony export */
                })
                /* harmony import */ var _SpecialKeyCodes__WEBPACK_IMPORTED_MODULE_2__ =
                  __nested_webpack_require_99229__(/*! ./SpecialKeyCodes */ './src/Inputs/SpecialKeyCodes.ts')
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_99229__(
                  /*! ../Logger/Logger */ './src/Logger/Logger.ts'
                )
                /* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_99229__(
                  /*! ../Config/Config */ './src/Config/Config.ts'
                )
                /* harmony import */ var _Util_EventListenerTracker__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_99229__(
                    /*! ../Util/EventListenerTracker */ './src/Util/EventListenerTracker.ts'
                  )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Handles the Keyboard Inputs for the document
                 */
                class KeyboardController {
                  /**
                   * @param toStreamerMessagesProvider Stream message provider class object
                   * @param config The applications configuration. We're interested in the suppress browser keys option
                   * @param activeKeysProvider Active keys provider class object
                   */
                  constructor(toStreamerMessagesProvider, config, activeKeysProvider) {
                    // Utility for keeping track of event handlers and unregistering them
                    this.keyboardEventListenerTracker =
                      new _Util_EventListenerTracker__WEBPACK_IMPORTED_MODULE_0__.EventListenerTracker()
                    /*
                     * New browser APIs have moved away from KeyboardEvent.keyCode to KeyboardEvent.Code.
                     * For details see: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode#constants_for_keycode_value
                     * We still use old KeyboardEvent.keyCode integers in the UE C++ side, so we need a way to map the new
                     * string-based KeyboardEvent.Code to the old integers.
                     */
                    this.CodeToKeyCode = {
                      Escape: 27,
                      Digit0: 48,
                      Digit1: 49,
                      Digit2: 50,
                      Digit3: 51,
                      Digit4: 52,
                      Digit5: 53,
                      Digit6: 54,
                      Digit7: 55,
                      Digit8: 56,
                      Digit9: 57,
                      Minus: 173,
                      Equal: 187,
                      Backspace: 8,
                      Tab: 9,
                      KeyQ: 81,
                      KeyW: 87,
                      KeyE: 69,
                      KeyR: 82,
                      KeyT: 84,
                      KeyY: 89,
                      KeyU: 85,
                      KeyI: 73,
                      KeyO: 79,
                      KeyP: 80,
                      BracketLeft: 219,
                      BracketRight: 221,
                      Enter: 13,
                      ControlLeft: 17,
                      KeyA: 65,
                      KeyS: 83,
                      KeyD: 68,
                      KeyF: 70,
                      KeyG: 71,
                      KeyH: 72,
                      KeyJ: 74,
                      KeyK: 75,
                      KeyL: 76,
                      Semicolon: 186,
                      Quote: 222,
                      Backquote: 192,
                      ShiftLeft: 16,
                      Backslash: 220,
                      KeyZ: 90,
                      KeyX: 88,
                      KeyC: 67,
                      KeyV: 86,
                      KeyB: 66,
                      KeyN: 78,
                      KeyM: 77,
                      Comma: 188,
                      Period: 190,
                      Slash: 191,
                      ShiftRight: 253,
                      AltLeft: 18,
                      Space: 32,
                      CapsLock: 20,
                      F1: 112,
                      F2: 113,
                      F3: 114,
                      F4: 115,
                      F5: 116,
                      F6: 117,
                      F7: 118,
                      F8: 119,
                      F9: 120,
                      F10: 121,
                      F11: 122,
                      F12: 123,
                      Pause: 19,
                      ScrollLock: 145,
                      NumpadDivide: 111,
                      NumpadMultiply: 106,
                      NumpadSubtract: 109,
                      NumpadAdd: 107,
                      NumpadDecimal: 110,
                      Numpad9: 105,
                      Numpad8: 104,
                      Numpad7: 103,
                      Numpad6: 102,
                      Numpad5: 101,
                      Numpad4: 100,
                      Numpad3: 99,
                      Numpad2: 98,
                      Numpad1: 97,
                      Numpad0: 96,
                      NumLock: 144,
                      ControlRight: 254,
                      AltRight: 255,
                      Home: 36,
                      End: 35,
                      ArrowUp: 38,
                      ArrowLeft: 37,
                      ArrowRight: 39,
                      ArrowDown: 40,
                      PageUp: 33,
                      PageDown: 34,
                      Insert: 45,
                      Delete: 46,
                      ContextMenu: 93
                    }
                    this.toStreamerMessagesProvider = toStreamerMessagesProvider
                    this.config = config
                    this.activeKeysProvider = activeKeysProvider
                  }
                  /**
                   * Registers document keyboard events with the controller
                   */
                  registerKeyBoardEvents() {
                    const keyDownHandler = (ev) => this.handleOnKeyDown(ev)
                    const keyUpHandler = (ev) => this.handleOnKeyUp(ev)
                    const keyPressHandler = (ev) => this.handleOnKeyPress(ev)
                    document.addEventListener('keydown', keyDownHandler)
                    document.addEventListener('keyup', keyUpHandler)
                    //This has been deprecated as at Jun 13 2021
                    document.addEventListener('keypress', keyPressHandler)
                    this.keyboardEventListenerTracker.addUnregisterCallback(() =>
                      document.removeEventListener('keydown', keyDownHandler)
                    )
                    this.keyboardEventListenerTracker.addUnregisterCallback(() =>
                      document.removeEventListener('keyup', keyUpHandler)
                    )
                    this.keyboardEventListenerTracker.addUnregisterCallback(() =>
                      document.removeEventListener('keypress', keyPressHandler)
                    )
                  }
                  /**
                   * Unregisters document keyboard events
                   */
                  unregisterKeyBoardEvents() {
                    this.keyboardEventListenerTracker.unregisterAll()
                  }
                  /**
                   * Handles When a key is down
                   * @param keyboardEvent - Keyboard event
                   */
                  handleOnKeyDown(keyboardEvent) {
                    const keyCode = this.getKeycode(keyboardEvent)
                    // console.log('keyCode', keyCode)
                    if (!keyCode || keyCode === 116 || keyCode === 122 || keyCode === 123) {
                      return
                    }
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                      `key down ${keyCode}, repeat = ${keyboardEvent.repeat}`,
                      6
                    )
                    const toStreamerHandlers = this.toStreamerMessagesProvider.toStreamerHandlers
                    toStreamerHandlers.get('KeyDown')([this.getKeycode(keyboardEvent), keyboardEvent.repeat ? 1 : 0])
                    const activeKeys = this.activeKeysProvider.getActiveKeys()
                    activeKeys.push(keyCode)
                    // Backspace is not considered a keypress in JavaScript but we need it
                    // to be so characters may be deleted in a UE text entry field.
                    if (keyCode === _SpecialKeyCodes__WEBPACK_IMPORTED_MODULE_2__.SpecialKeyCodes.backSpace) {
                      document.dispatchEvent(
                        new KeyboardEvent('keypress', {
                          charCode: _SpecialKeyCodes__WEBPACK_IMPORTED_MODULE_2__.SpecialKeyCodes.backSpace
                        })
                      )
                    }
                    if (
                      this.config.isFlagEnabled(
                        _Config_Config__WEBPACK_IMPORTED_MODULE_3__.Flags.SuppressBrowserKeys
                      ) &&
                      this.isKeyCodeBrowserKey(keyCode)
                    ) {
                      keyboardEvent.preventDefault()
                    }
                  }
                  /**
                   * handles when a key is up
                   * @param keyboardEvent - Keyboard event
                   */
                  handleOnKeyUp(keyboardEvent) {
                    const keyCode = this.getKeycode(keyboardEvent)
                    // console.log('keyCode', keyCode)
                    if (!keyCode || keyCode === 116 || keyCode === 122 || keyCode === 123) {
                      return
                    }
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                      `key up ${keyCode}`,
                      6
                    )
                    const toStreamerHandlers = this.toStreamerMessagesProvider.toStreamerHandlers
                    toStreamerHandlers.get('KeyUp')([keyCode, keyboardEvent.repeat ? 1 : 0])
                    if (
                      this.config.isFlagEnabled(
                        _Config_Config__WEBPACK_IMPORTED_MODULE_3__.Flags.SuppressBrowserKeys
                      ) &&
                      this.isKeyCodeBrowserKey(keyCode)
                    ) {
                      keyboardEvent.preventDefault()
                    }
                  }
                  /**
                   * Handles when a key is press
                   * @param keyboard - Keyboard Event
                   */
                  handleOnKeyPress(keyboard) {
                    if (!('charCode' in keyboard)) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Warning(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                        'KeyboardEvent.charCode is deprecated in this browser, cannot send key press.'
                      )
                      return
                    }
                    const charCode = keyboard.charCode
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                      `key press ${charCode}`,
                      6
                    )
                    const toStreamerHandlers = this.toStreamerMessagesProvider.toStreamerHandlers
                    toStreamerHandlers.get('KeyPress')([charCode])
                  }
                  /**
                   * Gets the Keycode of the Key pressed
                   * @param keyboardEvent - Key board Event
                   * @returns - the key code of the Key
                   */
                  getKeycode(keyboardEvent) {
                    // If we don't have keyCode property because browser API is deprecated then use KeyboardEvent.code instead.
                    // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode#constants_for_keycode_value
                    if (!('keyCode' in keyboardEvent)) {
                      // Convert KeyboardEvent.code string into integer-based key code for backwards compatibility reasons.
                      const event = keyboardEvent
                      if (event.code in this.CodeToKeyCode) {
                        return this.CodeToKeyCode[event.code]
                      } else {
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Warning(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                          `Keyboard code of ${event.code} is not supported in our mapping, ignoring this key.`
                        )
                        return null
                      }
                    }
                    // If we made it here KeyboardEvent.keyCode is still supported so we can safely use it.
                    if (
                      keyboardEvent.keyCode === _SpecialKeyCodes__WEBPACK_IMPORTED_MODULE_2__.SpecialKeyCodes.shift &&
                      keyboardEvent.code === 'ShiftRight'
                    ) {
                      return _SpecialKeyCodes__WEBPACK_IMPORTED_MODULE_2__.SpecialKeyCodes.rightShift
                    } else if (
                      keyboardEvent.keyCode === _SpecialKeyCodes__WEBPACK_IMPORTED_MODULE_2__.SpecialKeyCodes.control &&
                      keyboardEvent.code === 'ControlRight'
                    ) {
                      return _SpecialKeyCodes__WEBPACK_IMPORTED_MODULE_2__.SpecialKeyCodes.rightControl
                    } else if (
                      keyboardEvent.keyCode === _SpecialKeyCodes__WEBPACK_IMPORTED_MODULE_2__.SpecialKeyCodes.alt &&
                      keyboardEvent.code === 'AltRight'
                    ) {
                      return _SpecialKeyCodes__WEBPACK_IMPORTED_MODULE_2__.SpecialKeyCodes.rightAlt
                    } else {
                      return keyboardEvent.keyCode
                    }
                  }
                  /**
                   * Browser keys do not have a charCode so we only need to test keyCode.
                   * @param keyCode - the browser keycode number
                   */
                  isKeyCodeBrowserKey(keyCode) {
                    // Function keys or tab key are considered "browser keys" that we may wish to suppress by preventing them being process by browser.
                    return (keyCode >= 112 && keyCode <= 123) || keyCode === 9
                  }
                }

                /***/
              },

            /***/ './src/Inputs/LockedMouseEvents.ts':
              /*!*****************************************!*\
  !*** ./src/Inputs/LockedMouseEvents.ts ***!
  \*****************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_110834__) => {
                __nested_webpack_require_110834__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_110834__.d(__webpack_exports__, {
                  /* harmony export */ LockedMouseEvents: () => /* binding */ LockedMouseEvents
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__ =
                  __nested_webpack_require_110834__(/*! ../Logger/Logger */ './src/Logger/Logger.ts')
                /* harmony import */ var _Util_EventListenerTracker__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_110834__(
                    /*! ../Util/EventListenerTracker */ './src/Util/EventListenerTracker.ts'
                  )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Handle the mouse locked events
                 */
                class LockedMouseEvents {
                  /**
                   * @param videoElementProvider - Video Player instance
                   * @param mouseController - Mouse controller instance
                   * @param activeKeysProvider - Active keys provider instance
                   * @param playerStyleAttributesProvider - Player style attributes instance
                   */
                  constructor(videoElementProvider, mouseController, activeKeysProvider) {
                    this.x = 0
                    this.y = 0
                    this.updateMouseMovePositionEvent = (mouseEvent) => {
                      this.updateMouseMovePosition(mouseEvent)
                    }
                    // Utility for keeping track of event handlers and unregistering them
                    this.mouseEventListenerTracker =
                      new _Util_EventListenerTracker__WEBPACK_IMPORTED_MODULE_0__.EventListenerTracker()
                    this.videoElementProvider = videoElementProvider
                    this.mouseController = mouseController
                    this.activeKeysProvider = activeKeysProvider
                    const videoElementParent = this.videoElementProvider.getVideoParentElement()
                    this.x = videoElementParent.getBoundingClientRect().width / 2
                    this.y = videoElementParent.getBoundingClientRect().height / 2
                    this.coord = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(this.x, this.y)
                  }
                  /**
                   * Unregisters all event handlers
                   */
                  unregisterMouseEvents() {
                    this.mouseEventListenerTracker.unregisterAll()
                  }
                  /**
                   * Handle when the locked state Changed
                   */
                  lockStateChange() {
                    const videoElementParent = this.videoElementProvider.getVideoParentElement()
                    const toStreamerHandlers = this.mouseController.toStreamerMessagesProvider.toStreamerHandlers
                    if (
                      document.pointerLockElement === videoElementParent ||
                      document.mozPointerLockElement === videoElementParent
                    ) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                        'Pointer locked',
                        6
                      )
                      document.addEventListener('mousemove', this.updateMouseMovePositionEvent, false)
                      this.mouseEventListenerTracker.addUnregisterCallback(() =>
                        document.removeEventListener('mousemove', this.updateMouseMovePositionEvent, false)
                      )
                    } else {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                        'The pointer lock status is now unlocked',
                        6
                      )
                      // !a new arrow function must not be used here as it will be counted as a new function that cannot be removed
                      document.removeEventListener('mousemove', this.updateMouseMovePositionEvent, false)
                      // If mouse loses focus, send a key up for all of the currently held-down keys
                      // This is necessary as when the mouse loses focus, the windows stops listening for events and as such
                      // the keyup listener won't get fired
                      let activeKeys = this.activeKeysProvider.getActiveKeys()
                      const setKeys = new Set(activeKeys)
                      const newKeysIterable = []
                      setKeys.forEach((setKey) => {
                        newKeysIterable[setKey]
                      })
                      newKeysIterable.forEach((uniqueKeycode) => {
                        toStreamerHandlers.get('KeyUp')([uniqueKeycode])
                      })
                      // Reset the active keys back to nothing
                      activeKeys = []
                    }
                  }
                  /**
                   * Handle the mouse move event, sends the mouse data to the UE Instance
                   * @param mouseEvent - Mouse Event
                   */
                  updateMouseMovePosition(mouseEvent) {
                    if (!this.videoElementProvider.isVideoReady()) {
                      return
                    }
                    const toStreamerHandlers = this.mouseController.toStreamerMessagesProvider.toStreamerHandlers
                    const styleWidth = this.videoElementProvider.getVideoParentElement().clientWidth
                    const styleHeight = this.videoElementProvider.getVideoParentElement().clientHeight
                    this.x += mouseEvent.movementX
                    this.y += mouseEvent.movementY
                    if (this.x > styleWidth) {
                      this.x -= styleWidth
                    }
                    if (this.y > styleHeight) {
                      this.y -= styleHeight
                    }
                    if (this.x < 0) {
                      this.x = styleWidth + this.x
                    }
                    if (this.y < 0) {
                      this.y = styleHeight - this.y
                    }
                    this.coord = this.mouseController.coordinateConverter.normalizeAndQuantizeUnsigned(this.x, this.y)
                    const delta = this.mouseController.coordinateConverter.normalizeAndQuantizeSigned(
                      mouseEvent.movementX,
                      mouseEvent.movementY
                    )
                    toStreamerHandlers.get('MouseMove')([this.coord.x, this.coord.y, delta.x, delta.y])
                  }
                  /**
                   * Handle the mouse Down event, sends the mouse data to the UE Instance
                   * @param mouseEvent - Mouse Event
                   */
                  handleMouseDown(mouseEvent) {
                    if (!this.videoElementProvider.isVideoReady()) {
                      return
                    }
                    const toStreamerHandlers = this.mouseController.toStreamerMessagesProvider.toStreamerHandlers
                    toStreamerHandlers.get('MouseDown')([
                      mouseEvent.button,
                      // We use the store value of this.coord as opposed to the mouseEvent.x/y as the mouseEvent location
                      // uses the system cursor location which hasn't moved
                      this.coord.x,
                      this.coord.y
                    ])
                  }
                  /**
                   * Handle the mouse Up event, sends the mouse data to the UE Instance
                   * @param mouseEvent - Mouse Event
                   */
                  handleMouseUp(mouseEvent) {
                    if (!this.videoElementProvider.isVideoReady()) {
                      return
                    }
                    const toStreamerHandlers = this.mouseController.toStreamerMessagesProvider.toStreamerHandlers
                    toStreamerHandlers.get('MouseUp')([
                      mouseEvent.button,
                      // We use the store value of this.coord as opposed to the mouseEvent.x/y as the mouseEvent location
                      // uses the system cursor location which hasn't moved
                      this.coord.x,
                      this.coord.y
                    ])
                  }
                  /**
                   * Handle the mouse wheel event, sends the mouse wheel data to the UE Instance
                   * @param wheelEvent - Mouse Event
                   */
                  handleMouseWheel(wheelEvent) {
                    if (!this.videoElementProvider.isVideoReady()) {
                      return
                    }
                    const toStreamerHandlers = this.mouseController.toStreamerMessagesProvider.toStreamerHandlers
                    toStreamerHandlers.get('MouseWheel')([
                      wheelEvent.wheelDelta,
                      // We use the store value of this.coord as opposed to the mouseEvent.x/y as the mouseEvent location
                      // uses the system cursor location which hasn't moved
                      this.coord.x,
                      this.coord.y
                    ])
                  }
                  /**
                   * Handle the mouse double click event, sends the mouse data to the UE Instance
                   * @param mouseEvent - Mouse Event
                   */
                  handleMouseDouble(mouseEvent) {
                    if (!this.videoElementProvider.isVideoReady()) {
                      return
                    }
                    const toStreamerHandlers = this.mouseController.toStreamerMessagesProvider.toStreamerHandlers
                    toStreamerHandlers.get('MouseDouble')([
                      mouseEvent.button,
                      // We use the store value of this.coord as opposed to the mouseEvent.x/y as the mouseEvent location
                      // uses the system cursor location which hasn't moved
                      this.coord.x,
                      this.coord.y
                    ])
                  }
                  /**
                   * Handle the press mouse buttons event, sends the mouse data to the UE Instance
                   * @param mouseEvent - Mouse Event
                   */
                  handlePressMouseButtons(mouseEvent) {
                    if (!this.videoElementProvider.isVideoReady()) {
                      return
                    }
                    this.mouseController.pressMouseButtons(mouseEvent.buttons, this.x, this.y)
                  }
                  /**
                   * Handle the release mouse buttons event, sends the mouse data to the UE Instance
                   * @param mouseEvent - Mouse Event
                   */
                  handleReleaseMouseButtons(mouseEvent) {
                    if (!this.videoElementProvider.isVideoReady()) {
                      return
                    }
                    this.mouseController.releaseMouseButtons(mouseEvent.buttons, this.x, this.y)
                  }
                }

                /***/
              },

            /***/ './src/Inputs/MouseButtons.ts':
              /*!************************************!*\
  !*** ./src/Inputs/MouseButtons.ts ***!
  \************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_120136__) => {
                __nested_webpack_require_120136__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_120136__.d(__webpack_exports__, {
                  /* harmony export */ MouseButton: () => /* binding */ MouseButton,
                  /* harmony export */ MouseButtonsMask: () => /* binding */ MouseButtonsMask
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * Mouse Button Data
                 * {@link https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button}
                 */
                class MouseButton {}
                MouseButton.mainButton = 0 // Left button.
                MouseButton.auxiliaryButton = 1 // Wheel button.
                MouseButton.secondaryButton = 2 // Right button.
                MouseButton.fourthButton = 3 // Browser Back button.
                MouseButton.fifthButton = 4 // Browser Forward button.
                /**
                 * Mouse Button Mask Data
                 * {@link https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons}
                 */
                class MouseButtonsMask {}
                MouseButtonsMask.primaryButton = 1 // Left button.
                MouseButtonsMask.secondaryButton = 2 // Right button.
                MouseButtonsMask.auxiliaryButton = 4 // Wheel button.
                MouseButtonsMask.fourthButton = 8 // Browser Back button.
                MouseButtonsMask.fifthButton = 16 // Browser Forward button.

                /***/
              },

            /***/ './src/Inputs/MouseController.ts':
              /*!***************************************!*\
  !*** ./src/Inputs/MouseController.ts ***!
  \***************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_121575__) => {
                __nested_webpack_require_121575__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_121575__.d(__webpack_exports__, {
                  /* harmony export */ MouseController: () => /* binding */ MouseController
                  /* harmony export */
                })
                /* harmony import */ var _MouseButtons__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_121575__(
                  /*! ./MouseButtons */ './src/Inputs/MouseButtons.ts'
                )
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_3__ =
                  __nested_webpack_require_121575__(/*! ../Logger/Logger */ './src/Logger/Logger.ts')
                /* harmony import */ var _LockedMouseEvents__WEBPACK_IMPORTED_MODULE_1__ =
                  __nested_webpack_require_121575__(/*! ./LockedMouseEvents */ './src/Inputs/LockedMouseEvents.ts')
                /* harmony import */ var _HoveringMouseEvents__WEBPACK_IMPORTED_MODULE_2__ =
                  __nested_webpack_require_121575__(/*! ./HoveringMouseEvents */ './src/Inputs/HoveringMouseEvents.ts')
                /* harmony import */ var _Util_EventListenerTracker__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_121575__(
                    /*! ../Util/EventListenerTracker */ './src/Util/EventListenerTracker.ts'
                  )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Handles the Mouse Inputs for the document
                 */
                class MouseController {
                  /**
                   * @param toStreamerMessagesProvider - Stream message instance
                   * @param videoElementProvider - Video Player instance
                   * @param normalizeAndQuantize - A normalize and quantize instance
                   */
                  constructor(
                    toStreamerMessagesProvider,
                    videoElementProvider,
                    coordinateConverter,
                    activeKeysProvider
                  ) {
                    // Utility for keeping track of event handlers and unregistering them
                    this.mouseEventListenerTracker =
                      new _Util_EventListenerTracker__WEBPACK_IMPORTED_MODULE_0__.EventListenerTracker()
                    this.toStreamerMessagesProvider = toStreamerMessagesProvider
                    this.coordinateConverter = coordinateConverter
                    this.videoElementProvider = videoElementProvider
                    this.activeKeysProvider = activeKeysProvider
                    this.registerMouseEnterAndLeaveEvents()
                  }
                  /**
                   * Clears all the click events on the current video element parent div
                   */
                  unregisterMouseEvents() {
                    this.mouseEventListenerTracker.unregisterAll()
                  }
                  /**
                   * Register a locked mouse class
                   * @param mouseController - a mouse controller instance
                   * @param playerStyleAttributesProvider - a player style attributes instance
                   */
                  registerLockedMouseEvents(mouseController) {
                    const videoElementParent = this.videoElementProvider.getVideoParentElement()
                    const lockedMouseEvents = new _LockedMouseEvents__WEBPACK_IMPORTED_MODULE_1__.LockedMouseEvents(
                      this.videoElementProvider,
                      mouseController,
                      this.activeKeysProvider
                    )
                    videoElementParent.requestPointerLock =
                      videoElementParent.requestPointerLock || videoElementParent.mozRequestPointerLock
                    document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock
                    // minor hack to alleviate ios not supporting pointerlock
                    if (videoElementParent.requestPointerLock) {
                      const onclick = () => {
                        videoElementParent.requestPointerLock()
                      }
                      videoElementParent.addEventListener('click', onclick)
                      this.mouseEventListenerTracker.addUnregisterCallback(() =>
                        videoElementParent.removeEventListener('click', onclick)
                      )
                    }
                    const lockStateChangeListener = () => lockedMouseEvents.lockStateChange()
                    document.addEventListener('pointerlockchange', lockStateChangeListener, false)
                    document.addEventListener('mozpointerlockchange', lockStateChangeListener, false)
                    this.mouseEventListenerTracker.addUnregisterCallback(() =>
                      document.removeEventListener('pointerlockchange', lockStateChangeListener, false)
                    )
                    this.mouseEventListenerTracker.addUnregisterCallback(() =>
                      document.removeEventListener('mozpointerlockchange', lockStateChangeListener, false)
                    )
                    const onmousedown = (mouseEvent) => lockedMouseEvents.handleMouseDown(mouseEvent)
                    const onmouseup = (mouseEvent) => lockedMouseEvents.handleMouseUp(mouseEvent)
                    const onwheel = (wheelEvent) => lockedMouseEvents.handleMouseWheel(wheelEvent)
                    const ondblclick = (mouseEvent) => lockedMouseEvents.handleMouseDouble(mouseEvent)
                    videoElementParent.addEventListener('mousedown', onmousedown)
                    videoElementParent.addEventListener('mouseup', onmouseup)
                    videoElementParent.addEventListener('wheel', onwheel)
                    videoElementParent.addEventListener('dblclick', ondblclick)
                    this.mouseEventListenerTracker.addUnregisterCallback(() =>
                      videoElementParent.removeEventListener('mousedown', onmousedown)
                    )
                    this.mouseEventListenerTracker.addUnregisterCallback(() =>
                      videoElementParent.removeEventListener('mouseup', onmouseup)
                    )
                    this.mouseEventListenerTracker.addUnregisterCallback(() =>
                      videoElementParent.removeEventListener('wheel', onwheel)
                    )
                    this.mouseEventListenerTracker.addUnregisterCallback(() =>
                      videoElementParent.removeEventListener('dblclick', ondblclick)
                    )
                    this.mouseEventListenerTracker.addUnregisterCallback(() =>
                      lockedMouseEvents.unregisterMouseEvents()
                    )
                    this.mouseEventListenerTracker.addUnregisterCallback(() => {
                      if (
                        document.exitPointerLock &&
                        (document.pointerLockElement === videoElementParent ||
                          document.mozPointerLockElement === videoElementParent)
                      ) {
                        document.exitPointerLock()
                      }
                    })
                  }
                  /**
                   * Register a hovering mouse class
                   * @param mouseController - A mouse controller object
                   */
                  registerHoveringMouseEvents(mouseController) {
                    const videoElementParent = this.videoElementProvider.getVideoParentElement()
                    const hoveringMouseEvents =
                      new _HoveringMouseEvents__WEBPACK_IMPORTED_MODULE_2__.HoveringMouseEvents(mouseController)
                    const onmousemove = (mouseEvent) => hoveringMouseEvents.updateMouseMovePosition(mouseEvent)
                    const onmousedown = (mouseEvent) => hoveringMouseEvents.handleMouseDown(mouseEvent)
                    const onmouseup = (mouseEvent) => hoveringMouseEvents.handleMouseUp(mouseEvent)
                    const oncontextmenu = (mouseEvent) => hoveringMouseEvents.handleContextMenu(mouseEvent)
                    const onwheel = (wheelEvent) => hoveringMouseEvents.handleMouseWheel(wheelEvent)
                    const ondblclick = (mouseEvent) => hoveringMouseEvents.handleMouseDouble(mouseEvent)
                    videoElementParent.addEventListener('mousemove', onmousemove)
                    videoElementParent.addEventListener('mousedown', onmousedown)
                    videoElementParent.addEventListener('mouseup', onmouseup)
                    videoElementParent.addEventListener('contextmenu', oncontextmenu)
                    videoElementParent.addEventListener('wheel', onwheel)
                    videoElementParent.addEventListener('dblclick', ondblclick)
                    this.mouseEventListenerTracker.addUnregisterCallback(() =>
                      videoElementParent.removeEventListener('mousemove', onmousemove)
                    )
                    this.mouseEventListenerTracker.addUnregisterCallback(() =>
                      videoElementParent.removeEventListener('mousedown', onmousedown)
                    )
                    this.mouseEventListenerTracker.addUnregisterCallback(() =>
                      videoElementParent.removeEventListener('mouseup', onmouseup)
                    )
                    this.mouseEventListenerTracker.addUnregisterCallback(() =>
                      videoElementParent.removeEventListener('contextmenu', oncontextmenu)
                    )
                    this.mouseEventListenerTracker.addUnregisterCallback(() =>
                      videoElementParent.removeEventListener('wheel', onwheel)
                    )
                    this.mouseEventListenerTracker.addUnregisterCallback(() =>
                      videoElementParent.removeEventListener('dblclick', ondblclick)
                    )
                    this.mouseEventListenerTracker.addUnregisterCallback(() =>
                      hoveringMouseEvents.unregisterMouseEvents()
                    )
                  }
                  /**
                   * Set the mouse enter and mouse leave events
                   */
                  registerMouseEnterAndLeaveEvents() {
                    const videoElementParent = this.videoElementProvider.getVideoParentElement()
                    // Handle when the Mouse has entered the element
                    const onmouseenter = (event) => {
                      if (!this.videoElementProvider.isVideoReady()) {
                        return
                      }
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_3__.Logger.GetStackTrace(),
                        'Mouse Entered',
                        6
                      )
                      this.sendMouseEnter()
                      this.pressMouseButtons(event.buttons, event.x, event.y)
                    }
                    // Handles when the mouse has left the element
                    const onmouseleave = (event) => {
                      if (!this.videoElementProvider.isVideoReady()) {
                        return
                      }
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_3__.Logger.GetStackTrace(),
                        'Mouse Left',
                        6
                      )
                      this.sendMouseLeave()
                      this.releaseMouseButtons(event.buttons, event.x, event.y)
                    }
                    videoElementParent.addEventListener('mouseenter', onmouseenter)
                    videoElementParent.addEventListener('mouseleave', onmouseleave)
                    this.mouseEventListenerTracker.addUnregisterCallback(() =>
                      videoElementParent.removeEventListener('mouseenter', onmouseenter)
                    )
                    this.mouseEventListenerTracker.addUnregisterCallback(() =>
                      videoElementParent.removeEventListener('mouseleave', onmouseleave)
                    )
                  }
                  /**
                   * Handle when a mouse button is released
                   * @param buttons - Mouse Button
                   * @param X - Mouse pointer X coordinate
                   * @param Y - Mouse pointer Y coordinate
                   */
                  releaseMouseButtons(buttons, X, Y) {
                    const coord = this.coordinateConverter.normalizeAndQuantizeUnsigned(X, Y)
                    if (buttons & _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButtonsMask.primaryButton) {
                      this.sendMouseUp(
                        _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButton.mainButton,
                        coord.x,
                        coord.y
                      )
                    }
                    if (buttons & _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButtonsMask.secondaryButton) {
                      this.sendMouseUp(
                        _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButton.secondaryButton,
                        coord.x,
                        coord.y
                      )
                    }
                    if (buttons & _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButtonsMask.auxiliaryButton) {
                      this.sendMouseUp(
                        _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButton.auxiliaryButton,
                        coord.x,
                        coord.y
                      )
                    }
                    if (buttons & _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButtonsMask.fourthButton) {
                      this.sendMouseUp(
                        _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButton.fourthButton,
                        coord.x,
                        coord.y
                      )
                    }
                    if (buttons & _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButtonsMask.fifthButton) {
                      this.sendMouseUp(
                        _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButton.fifthButton,
                        coord.x,
                        coord.y
                      )
                    }
                  }
                  /**
                   * Handle when a mouse button is pressed
                   * @param buttons - Mouse Button
                   * @param X - Mouse pointer X coordinate
                   * @param Y - Mouse pointer Y coordinate
                   */
                  pressMouseButtons(buttons, X, Y) {
                    if (!this.videoElementProvider.isVideoReady()) {
                      return
                    }
                    const coord = this.coordinateConverter.normalizeAndQuantizeUnsigned(X, Y)
                    if (buttons & _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButtonsMask.primaryButton) {
                      this.sendMouseDown(
                        _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButton.mainButton,
                        coord.x,
                        coord.y
                      )
                    }
                    if (buttons & _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButtonsMask.secondaryButton) {
                      this.sendMouseDown(
                        _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButton.secondaryButton,
                        coord.x,
                        coord.y
                      )
                    }
                    if (buttons & _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButtonsMask.auxiliaryButton) {
                      this.sendMouseDown(
                        _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButton.auxiliaryButton,
                        coord.x,
                        coord.y
                      )
                    }
                    if (buttons & _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButtonsMask.fourthButton) {
                      this.sendMouseDown(
                        _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButton.fourthButton,
                        coord.x,
                        coord.y
                      )
                    }
                    if (buttons & _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButtonsMask.fifthButton) {
                      this.sendMouseDown(
                        _MouseButtons__WEBPACK_IMPORTED_MODULE_4__.MouseButton.fifthButton,
                        coord.x,
                        coord.y
                      )
                    }
                  }
                  /**
                   * Handles mouse enter
                   */
                  sendMouseEnter() {
                    if (!this.videoElementProvider.isVideoReady()) {
                      return
                    }
                    const toStreamerHandlers = this.toStreamerMessagesProvider.toStreamerHandlers
                    toStreamerHandlers.get('MouseEnter')()
                  }
                  /**
                   * Handles mouse Leave
                   */
                  sendMouseLeave() {
                    if (!this.videoElementProvider.isVideoReady()) {
                      return
                    }
                    const toStreamerHandlers = this.toStreamerMessagesProvider.toStreamerHandlers
                    toStreamerHandlers.get('MouseLeave')()
                  }
                  /**
                   * Handles when a mouse button is pressed down
                   * @param button - Mouse Button Pressed
                   * @param X  - Mouse X Coordinate
                   * @param Y  - Mouse Y Coordinate
                   */
                  sendMouseDown(button, X, Y) {
                    if (!this.videoElementProvider.isVideoReady()) {
                      return
                    }
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_3__.Logger.GetStackTrace(),
                      `mouse button ${button} down at (${X}, ${Y})`,
                      6
                    )
                    const toStreamerHandlers = this.toStreamerMessagesProvider.toStreamerHandlers
                    toStreamerHandlers.get('MouseDown')([button, X, Y])
                  }
                  /**
                   * Handles when a mouse button is pressed up
                   * @param button - Mouse Button Pressed
                   * @param X  - Mouse X Coordinate
                   * @param Y  - Mouse Y Coordinate
                   */
                  sendMouseUp(button, X, Y) {
                    if (!this.videoElementProvider.isVideoReady()) {
                      return
                    }
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_3__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_3__.Logger.GetStackTrace(),
                      `mouse button ${button} up at (${X}, ${Y})`,
                      6
                    )
                    const coord = this.coordinateConverter.normalizeAndQuantizeUnsigned(X, Y)
                    const toStreamerHandlers = this.toStreamerMessagesProvider.toStreamerHandlers
                    toStreamerHandlers.get('MouseUp')([button, coord.x, coord.y])
                  }
                }

                /***/
              },

            /***/ './src/Inputs/SpecialKeyCodes.ts':
              /*!***************************************!*\
  !*** ./src/Inputs/SpecialKeyCodes.ts ***!
  \***************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_136371__) => {
                __nested_webpack_require_136371__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_136371__.d(__webpack_exports__, {
                  /* harmony export */ SpecialKeyCodes: () => /* binding */ SpecialKeyCodes
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * Registers the Special Key codes
                 *  Must be kept in sync with JavaScriptKeyCodeToFKey C++ array.
                 * The index of the entry in the array is the special key code given below.
                 */
                class SpecialKeyCodes {}
                SpecialKeyCodes.backSpace = 8
                SpecialKeyCodes.shift = 16
                SpecialKeyCodes.control = 17
                SpecialKeyCodes.alt = 18
                SpecialKeyCodes.rightShift = 253
                SpecialKeyCodes.rightControl = 254
                SpecialKeyCodes.rightAlt = 255

                /***/
              },

            /***/ './src/Inputs/TouchController.ts':
              /*!***************************************!*\
  !*** ./src/Inputs/TouchController.ts ***!
  \***************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_137348__) => {
                __nested_webpack_require_137348__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_137348__.d(__webpack_exports__, {
                  /* harmony export */ TouchController: () => /* binding */ TouchController
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__ =
                  __nested_webpack_require_137348__(/*! ../Logger/Logger */ './src/Logger/Logger.ts')
                /* harmony import */ var _Util_EventListenerTracker__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_137348__(
                    /*! ../Util/EventListenerTracker */ './src/Util/EventListenerTracker.ts'
                  )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Handles the Touch input Events
                 */
                class TouchController {
                  /**
                   * @param toStreamerMessagesProvider - Stream message instance
                   * @param videoElementProvider - Video Player instance
                   * @param coordinateConverter - A coordinate converter instance
                   */
                  constructor(toStreamerMessagesProvider, videoElementProvider, coordinateConverter) {
                    this.fingers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
                    this.fingerIds = new Map()
                    this.maxByteValue = 255
                    // Utility for keeping track of event handlers and unregistering them
                    this.touchEventListenerTracker =
                      new _Util_EventListenerTracker__WEBPACK_IMPORTED_MODULE_0__.EventListenerTracker()
                    this.toStreamerMessagesProvider = toStreamerMessagesProvider
                    this.videoElementProvider = videoElementProvider
                    this.coordinateConverter = coordinateConverter
                    this.videoElementParent = videoElementProvider.getVideoElement()
                    const ontouchstart = (ev) => this.onTouchStart(ev)
                    const ontouchend = (ev) => this.onTouchEnd(ev)
                    const ontouchmove = (ev) => this.onTouchMove(ev)
                    this.videoElementParent.addEventListener('touchstart', ontouchstart, { passive: false })
                    this.videoElementParent.addEventListener('touchend', ontouchend, { passive: false })
                    this.videoElementParent.addEventListener('touchmove', ontouchmove, { passive: false })
                    this.touchEventListenerTracker.addUnregisterCallback(() =>
                      this.videoElementParent.removeEventListener('touchstart', ontouchstart)
                    )
                    this.touchEventListenerTracker.addUnregisterCallback(() =>
                      this.videoElementParent.removeEventListener('touchend', ontouchend)
                    )
                    this.touchEventListenerTracker.addUnregisterCallback(() =>
                      this.videoElementParent.removeEventListener('touchmove', ontouchmove)
                    )
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                      'Touch Events Registered',
                      6
                    )
                    // is this strictly necessary?
                    const preventOnTouchMove = (event) => {
                      event.preventDefault()
                    }
                    document.addEventListener('touchmove', preventOnTouchMove, {
                      passive: false
                    })
                    this.touchEventListenerTracker.addUnregisterCallback(() =>
                      document.removeEventListener('touchmove', preventOnTouchMove)
                    )
                  }
                  /**
                   * Unregister all touch events
                   */
                  unregisterTouchEvents() {
                    this.touchEventListenerTracker.unregisterAll()
                  }
                  /**
                   * Remember a touch command
                   * @param touch - the touch command
                   */
                  rememberTouch(touch) {
                    const finger = this.fingers.pop()
                    if (finger === undefined) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                        'exhausted touch identifiers',
                        6
                      )
                    }
                    this.fingerIds.set(touch.identifier, finger)
                  }
                  /**
                   * Forgets a touch command
                   * @param touch - the touch command
                   */
                  forgetTouch(touch) {
                    this.fingers.push(this.fingerIds.get(touch.identifier))
                    // Sort array back into descending order. This means if finger '1' were to lift after finger '0', we would ensure that 0 will be the first index to pop
                    this.fingers.sort(function (a, b) {
                      return b - a
                    })
                    this.fingerIds.delete(touch.identifier)
                  }
                  /**
                   * When a touch event starts
                   * @param touchEvent - the touch event being intercepted
                   */
                  onTouchStart(touchEvent) {
                    if (!this.videoElementProvider.isVideoReady()) {
                      return
                    }
                    for (let t = 0; t < touchEvent.changedTouches.length; t++) {
                      this.rememberTouch(touchEvent.changedTouches[t])
                    }
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                      'touch start',
                      6
                    )
                    this.emitTouchData('TouchStart', touchEvent.changedTouches)
                    touchEvent.preventDefault()
                  }
                  /**
                   * When a touch event ends
                   * @param touchEvent - the touch event being intercepted
                   */
                  onTouchEnd(touchEvent) {
                    if (!this.videoElementProvider.isVideoReady()) {
                      return
                    }
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                      'touch end',
                      6
                    )
                    this.emitTouchData('TouchEnd', touchEvent.changedTouches)
                    // Re-cycle unique identifiers previously assigned to each touch.
                    for (let t = 0; t < touchEvent.changedTouches.length; t++) {
                      this.forgetTouch(touchEvent.changedTouches[t])
                    }
                    touchEvent.preventDefault()
                  }
                  /**
                   * when a moving touch event occurs
                   * @param touchEvent - the touch event being intercepted
                   */
                  onTouchMove(touchEvent) {
                    if (!this.videoElementProvider.isVideoReady()) {
                      return
                    }
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                      'touch move',
                      6
                    )
                    this.emitTouchData('TouchMove', touchEvent.touches)
                    touchEvent.preventDefault()
                  }
                  emitTouchData(type, touches) {
                    if (!this.videoElementProvider.isVideoReady()) {
                      return
                    }
                    const videoElementParent = this.videoElementProvider.getVideoParentElement()
                    const toStreamerHandlers = this.toStreamerMessagesProvider.toStreamerHandlers
                    for (let t = 0; t < touches.length; t++) {
                      const numTouches = 1 // the number of touches to be sent this message
                      const touch = touches[t]
                      const x = touch.clientX - videoElementParent.offsetLeft
                      const y = touch.clientY - videoElementParent.offsetTop
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                        `F${this.fingerIds.get(touch.identifier)}=(${x}, ${y})`,
                        6
                      )
                      const coord = this.coordinateConverter.normalizeAndQuantizeUnsigned(x, y)
                      switch (type) {
                        case 'TouchStart':
                          toStreamerHandlers.get('TouchStart')([
                            numTouches,
                            coord.x,
                            coord.y,
                            this.fingerIds.get(touch.identifier),
                            this.maxByteValue * touch.force,
                            coord.inRange ? 1 : 0
                          ])
                          break
                        case 'TouchEnd':
                          toStreamerHandlers.get('TouchEnd')([
                            numTouches,
                            coord.x,
                            coord.y,
                            this.fingerIds.get(touch.identifier),
                            this.maxByteValue * touch.force,
                            coord.inRange ? 1 : 0
                          ])
                          break
                        case 'TouchMove':
                          toStreamerHandlers.get('TouchMove')([
                            numTouches,
                            coord.x,
                            coord.y,
                            this.fingerIds.get(touch.identifier),
                            this.maxByteValue * touch.force,
                            coord.inRange ? 1 : 0
                          ])
                          break
                      }
                    }
                  }
                }

                /***/
              },

            /***/ './src/Inputs/XRGamepadController.ts':
              /*!*******************************************!*\
  !*** ./src/Inputs/XRGamepadController.ts ***!
  \*******************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_145771__) => {
                __nested_webpack_require_145771__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_145771__.d(__webpack_exports__, {
                  /* harmony export */ XRGamepadController: () => /* binding */ XRGamepadController
                  /* harmony export */
                })
                /* harmony import */ var _Util_WebXRUtils__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_145771__(/*! ../Util/WebXRUtils */ './src/Util/WebXRUtils.ts')
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * The class that handles the functionality of xrgamepads and controllers
                 */
                class XRGamepadController {
                  /**
                   * @param toStreamerMessagesProvider - Stream message instance
                   */
                  constructor(toStreamerMessagesProvider) {
                    this.toStreamerMessagesProvider = toStreamerMessagesProvider
                    this.controllers = []
                  }
                  updateStatus(source, frame, refSpace) {
                    if (source.gamepad) {
                      const gamepadPose = frame.getPose(source.gripSpace, refSpace)
                      if (!gamepadPose) {
                        return
                      }
                      let system = 0
                      if (source.profiles.includes('htc-vive')) {
                        system = 1
                      } else if (source.profiles.includes('oculus-touch')) {
                        system = 2
                      }
                      // TODO (william.belcher): Add other profiles (Quest, Microsoft Mixed Reality, etc)
                      this.toStreamerMessagesProvider.toStreamerHandlers.get('XRSystem')([system])
                      // Default: AnyHand (2)
                      let handedness = 2
                      switch (source.handedness) {
                        case 'left':
                          handedness = 0
                          break
                        case 'right':
                          handedness = 1
                          break
                      }
                      // Send controller transform
                      const matrix = gamepadPose.transform.matrix
                      const mat = []
                      for (let i = 0; i < 16; i++) {
                        mat[i] = new Float32Array([matrix[i]])[0]
                      }
                      // prettier-ignore
                      this.toStreamerMessagesProvider.toStreamerHandlers.get('XRControllerTransform')([
                mat[0], mat[4], mat[8], mat[12],
                mat[1], mat[5], mat[9], mat[13],
                mat[2], mat[6], mat[10], mat[14],
                mat[3], mat[7], mat[11], mat[15],
                handedness
            ]);
                      // Handle controller buttons and axes
                      if (this.controllers[handedness] === undefined) {
                        this.controllers[handedness] = {
                          prevState: undefined,
                          currentState: undefined,
                          id: undefined
                        }
                        this.controllers[handedness].prevState =
                          _Util_WebXRUtils__WEBPACK_IMPORTED_MODULE_0__.WebXRUtils.deepCopyGamepad(source.gamepad)
                      }
                      this.controllers[handedness].currentState =
                        _Util_WebXRUtils__WEBPACK_IMPORTED_MODULE_0__.WebXRUtils.deepCopyGamepad(source.gamepad)
                      const controller = this.controllers[handedness]
                      const currState = controller.currentState
                      const prevState = controller.prevState
                      // Iterate over buttons
                      for (let i = 0; i < currState.buttons.length; i++) {
                        const currButton = currState.buttons[i]
                        const prevButton = prevState.buttons[i]
                        if (currButton.pressed) {
                          // press
                          this.toStreamerMessagesProvider.toStreamerHandlers.get('XRButtonPressed')([
                            handedness,
                            i,
                            prevButton.pressed ? 1 : 0
                          ])
                        } else if (!currButton.pressed && prevButton.pressed) {
                          this.toStreamerMessagesProvider.toStreamerHandlers.get('XRButtonReleased')([handedness, i, 0])
                        }
                        if (currButton.touched && !currButton.pressed) {
                          // press
                          this.toStreamerMessagesProvider.toStreamerHandlers.get('XRButtonPressed')([
                            handedness,
                            3,
                            prevButton.touched ? 1 : 0
                          ])
                        } else if (!currButton.touched && prevButton.touched) {
                          this.toStreamerMessagesProvider.toStreamerHandlers.get('XRButtonReleased')([handedness, 3, 0])
                        }
                      }
                      // Iterate over gamepad axes
                      for (let i = 0; i < currState.axes.length; i++) {
                        this.toStreamerMessagesProvider.toStreamerHandlers.get('XRAnalog')([
                          handedness,
                          i,
                          currState.axes[i]
                        ])
                      }
                      this.controllers[handedness].prevState = currState
                    }
                  }
                }

                /***/
              },

            /***/ './src/Logger/Logger.ts':
              /*!******************************!*\
  !*** ./src/Logger/Logger.ts ***!
  \******************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_150702__) => {
                __nested_webpack_require_150702__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_150702__.d(__webpack_exports__, {
                  /* harmony export */ Logger: () => /* binding */ Logger
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                class Logger {
                  /**
                   * Captures the stack and returns it
                   * @returns the current stack
                   */
                  static GetStackTrace() {
                    const error = new Error()
                    let formattedStack = 'No Stack Available for this browser'
                    // format the error
                    if (error.stack) {
                      formattedStack = error.stack.toString().replace(/Error/g, '')
                    }
                    return formattedStack
                  }
                  /**
                   * Set the log verbosity level
                   */
                  static SetLoggerVerbosity(verboseLogLevel) {
                    if (this.verboseLogLevel != null) {
                      this.verboseLogLevel = verboseLogLevel
                    }
                  }
                  /**
                   * The standard logging output
                   * @param stack - the stack trace
                   * @param message - the message to be logged
                   * @param verbosity - the verbosity level
                   */
                  static Log(stack, message, verbosity) {
                    if (verbosity > this.verboseLogLevel) {
                      return
                    }
                    const returnString = `Level: Log\nMsg: ${message}\nCaller: ${stack}`
                    console.log(returnString)
                  }
                  /**
                   * The standard logging output
                   * @param stack - the stack trace
                   * @param message - the message to be logged
                   * @param verbosity - the verbosity level
                   */
                  static Info(stack, message, verbosity) {
                    if (verbosity > this.verboseLogLevel) {
                      return
                    }
                    const returnString = `Level: Info\nMsg: ${message}`
                    console.info(returnString)
                  }
                  /**
                   * The standard logging output
                   * @param stack - the stack trace
                   * @param message - the message to be logged
                   */
                  static Error(stack, message) {
                    const returnString = `Level: Error\nMsg: ${message}\nCaller: ${stack}`
                    console.error(returnString)
                  }
                  /**
                   * The standard logging output
                   * @param stack - the stack trace
                   * @param message - the message to be logged
                   */
                  static Warning(stack, message) {
                    const returnString = `Level: Warning\nCaller: ${stack}\nMsg: ${message}`
                    console.warn(returnString)
                  }
                }
                Logger.verboseLogLevel = 5

                /***/
              },

            /***/ './src/PeerConnectionController/AggregatedStats.ts':
              /*!*********************************************************!*\
  !*** ./src/PeerConnectionController/AggregatedStats.ts ***!
  \*********************************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_153447__) => {
                __nested_webpack_require_153447__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_153447__.d(__webpack_exports__, {
                  /* harmony export */ AggregatedStats: () => /* binding */ AggregatedStats
                  /* harmony export */
                })
                /* harmony import */ var _InboundRTPStats__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_153447__(
                    /*! ./InboundRTPStats */ './src/PeerConnectionController/InboundRTPStats.ts'
                  )
                /* harmony import */ var _DataChannelStats__WEBPACK_IMPORTED_MODULE_2__ =
                  __nested_webpack_require_153447__(
                    /*! ./DataChannelStats */ './src/PeerConnectionController/DataChannelStats.ts'
                  )
                /* harmony import */ var _CandidateStat__WEBPACK_IMPORTED_MODULE_7__ =
                  __nested_webpack_require_153447__(
                    /*! ./CandidateStat */ './src/PeerConnectionController/CandidateStat.ts'
                  )
                /* harmony import */ var _CandidatePairStats__WEBPACK_IMPORTED_MODULE_1__ =
                  __nested_webpack_require_153447__(
                    /*! ./CandidatePairStats */ './src/PeerConnectionController/CandidatePairStats.ts'
                  )
                /* harmony import */ var _OutBoundRTPStats__WEBPACK_IMPORTED_MODULE_3__ =
                  __nested_webpack_require_153447__(
                    /*! ./OutBoundRTPStats */ './src/PeerConnectionController/OutBoundRTPStats.ts'
                  )
                /* harmony import */ var _SessionStats__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_153447__(
                  /*! ./SessionStats */ './src/PeerConnectionController/SessionStats.ts'
                )
                /* harmony import */ var _StreamStats__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_153447__(
                  /*! ./StreamStats */ './src/PeerConnectionController/StreamStats.ts'
                )
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_6__ =
                  __nested_webpack_require_153447__(/*! ../Logger/Logger */ './src/Logger/Logger.ts')
                // Copyright Epic Games, Inc. All Rights Reserved.

                class AggregatedStats {
                  constructor() {
                    this.inboundVideoStats = new _InboundRTPStats__WEBPACK_IMPORTED_MODULE_0__.InboundVideoStats()
                    this.inboundAudioStats = new _InboundRTPStats__WEBPACK_IMPORTED_MODULE_0__.InboundAudioStats()
                    this.candidatePair = new _CandidatePairStats__WEBPACK_IMPORTED_MODULE_1__.CandidatePairStats()
                    this.DataChannelStats = new _DataChannelStats__WEBPACK_IMPORTED_MODULE_2__.DataChannelStats()
                    this.outBoundVideoStats = new _OutBoundRTPStats__WEBPACK_IMPORTED_MODULE_3__.OutBoundVideoStats()
                    this.sessionStats = new _SessionStats__WEBPACK_IMPORTED_MODULE_4__.SessionStats()
                    this.streamStats = new _StreamStats__WEBPACK_IMPORTED_MODULE_5__.StreamStats()
                    this.codecs = new Map()
                  }
                  /**
                   * Gather all the information from the RTC Peer Connection Report
                   * @param rtcStatsReport - RTC Stats Report
                   */
                  processStats(rtcStatsReport) {
                    this.localCandidates = new Array()
                    this.remoteCandidates = new Array()
                    rtcStatsReport.forEach((stat) => {
                      const type = stat.type
                      switch (type) {
                        case 'candidate-pair':
                          this.handleCandidatePair(stat)
                          break
                        case 'certificate':
                          break
                        case 'codec':
                          this.handleCodec(stat)
                          break
                        case 'data-channel':
                          this.handleDataChannel(stat)
                          break
                        case 'inbound-rtp':
                          this.handleInBoundRTP(stat)
                          break
                        case 'local-candidate':
                          this.handleLocalCandidate(stat)
                          break
                        case 'media-source':
                          break
                        case 'media-playout':
                          break
                        case 'outbound-rtp':
                          break
                        case 'peer-connection':
                          break
                        case 'remote-candidate':
                          this.handleRemoteCandidate(stat)
                          break
                        case 'remote-inbound-rtp':
                          break
                        case 'remote-outbound-rtp':
                          this.handleRemoteOutBound(stat)
                          break
                        case 'track':
                          this.handleTrack(stat)
                          break
                        case 'transport':
                          break
                        case 'stream':
                          this.handleStream(stat)
                          break
                        default:
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_6__.Logger.Error(
                            _Logger_Logger__WEBPACK_IMPORTED_MODULE_6__.Logger.GetStackTrace(),
                            'unhandled Stat Type'
                          )
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_6__.Logger.Log(
                            _Logger_Logger__WEBPACK_IMPORTED_MODULE_6__.Logger.GetStackTrace(),
                            stat
                          )
                          break
                      }
                    })
                  }
                  /**
                   * Process stream stats data from webrtc
                   *
                   * @param stat - the stats coming in from webrtc
                   */
                  handleStream(stat) {
                    this.streamStats = stat
                  }
                  /**
                   * Process the Ice Candidate Pair Data
                   * @param stat - the stats coming in from ice candidates
                   */
                  handleCandidatePair(stat) {
                    this.candidatePair.bytesReceived = stat.bytesReceived
                    this.candidatePair.bytesSent = stat.bytesSent
                    this.candidatePair.localCandidateId = stat.localCandidateId
                    this.candidatePair.remoteCandidateId = stat.remoteCandidateId
                    this.candidatePair.nominated = stat.nominated
                    this.candidatePair.readable = stat.readable
                    this.candidatePair.selected = stat.selected
                    this.candidatePair.writable = stat.writable
                    this.candidatePair.state = stat.state
                    this.candidatePair.currentRoundTripTime = stat.currentRoundTripTime
                  }
                  /**
                   * Process the Data Channel Data
                   * @param stat - the stats coming in from the data channel
                   */
                  handleDataChannel(stat) {
                    this.DataChannelStats.bytesReceived = stat.bytesReceived
                    this.DataChannelStats.bytesSent = stat.bytesSent
                    this.DataChannelStats.dataChannelIdentifier = stat.dataChannelIdentifier
                    this.DataChannelStats.id = stat.id
                    this.DataChannelStats.label = stat.label
                    this.DataChannelStats.messagesReceived = stat.messagesReceived
                    this.DataChannelStats.messagesSent = stat.messagesSent
                    this.DataChannelStats.protocol = stat.protocol
                    this.DataChannelStats.state = stat.state
                    this.DataChannelStats.timestamp = stat.timestamp
                  }
                  /**
                   * Process the Local Ice Candidate Data
                   * @param stat - local stats
                   */
                  handleLocalCandidate(stat) {
                    const localCandidate = new _CandidateStat__WEBPACK_IMPORTED_MODULE_7__.CandidateStat()
                    localCandidate.label = 'local-candidate'
                    localCandidate.address = stat.address
                    localCandidate.port = stat.port
                    localCandidate.protocol = stat.protocol
                    localCandidate.candidateType = stat.candidateType
                    localCandidate.id = stat.id
                    this.localCandidates.push(localCandidate)
                  }
                  /**
                   * Process the Remote Ice Candidate Data
                   * @param stat - ice candidate stats
                   */
                  handleRemoteCandidate(stat) {
                    const RemoteCandidate = new _CandidateStat__WEBPACK_IMPORTED_MODULE_7__.CandidateStat()
                    RemoteCandidate.label = 'local-candidate'
                    RemoteCandidate.address = stat.address
                    RemoteCandidate.port = stat.port
                    RemoteCandidate.protocol = stat.protocol
                    RemoteCandidate.id = stat.id
                    RemoteCandidate.candidateType = stat.candidateType
                    this.remoteCandidates.push(RemoteCandidate)
                  }
                  /**
                   * Process the Inbound RTP Audio and Video Data
                   * @param stat - inbound rtp stats
                   */
                  handleInBoundRTP(stat) {
                    switch (stat.kind) {
                      case 'video':
                        // Need to convert to unknown first to remove an error around
                        // InboundVideoStats having the bitrate member which isn't found on
                        // the InboundRTPStats
                        this.inboundVideoStats = stat
                        if (this.lastVideoStats != undefined) {
                          this.inboundVideoStats.bitrate =
                            (8 * (this.inboundVideoStats.bytesReceived - this.lastVideoStats.bytesReceived)) /
                            (this.inboundVideoStats.timestamp - this.lastVideoStats.timestamp)
                          this.inboundVideoStats.bitrate = Math.floor(this.inboundVideoStats.bitrate)
                        }
                        this.lastVideoStats = Object.assign({}, this.inboundVideoStats)
                        break
                      case 'audio':
                        // Need to convert to unknown first to remove an error around
                        // InboundAudioStats having the bitrate member which isn't found on
                        // the InboundRTPStats
                        this.inboundAudioStats = stat
                        if (this.lastAudioStats != undefined) {
                          this.inboundAudioStats.bitrate =
                            (8 * (this.inboundAudioStats.bytesReceived - this.lastAudioStats.bytesReceived)) /
                            (this.inboundAudioStats.timestamp - this.lastAudioStats.timestamp)
                          this.inboundAudioStats.bitrate = Math.floor(this.inboundAudioStats.bitrate)
                        }
                        this.lastAudioStats = Object.assign({}, this.inboundAudioStats)
                        break
                      default:
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_6__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_6__.Logger.GetStackTrace(),
                          'Kind is not handled'
                        )
                        break
                    }
                  }
                  /**
                   * Process the outbound RTP Audio and Video Data
                   * @param stat - remote outbound stats
                   */
                  handleRemoteOutBound(stat) {
                    switch (stat.kind) {
                      case 'video':
                        this.outBoundVideoStats.bytesSent = stat.bytesSent
                        this.outBoundVideoStats.id = stat.id
                        this.outBoundVideoStats.localId = stat.localId
                        this.outBoundVideoStats.packetsSent = stat.packetsSent
                        this.outBoundVideoStats.remoteTimestamp = stat.remoteTimestamp
                        this.outBoundVideoStats.timestamp = stat.timestamp
                        break
                      case 'audio':
                        break
                      default:
                        break
                    }
                  }
                  /**
                   * Process the Inbound Video Track Data
                   * @param stat - video track stats
                   */
                  handleTrack(stat) {
                    // we only want to extract stats from the video track
                    if (stat.type === 'track' && (stat.trackIdentifier === 'video_label' || stat.kind === 'video')) {
                      this.inboundVideoStats.framesDropped = stat.framesDropped
                      this.inboundVideoStats.framesReceived = stat.framesReceived
                      this.inboundVideoStats.frameHeight = stat.frameHeight
                      this.inboundVideoStats.frameWidth = stat.frameWidth
                    }
                  }
                  handleCodec(stat) {
                    const codecId = stat.id
                    const codecType = `${stat.mimeType.replace('video/', '').replace('audio/', '')}${
                      stat.sdpFmtpLine ? ` ${stat.sdpFmtpLine}` : ''
                    }`
                    this.codecs.set(codecId, codecType)
                  }
                  handleSessionStatistics(videoStartTime, inputController, videoEncoderAvgQP) {
                    const deltaTime = Date.now() - videoStartTime
                    this.sessionStats.runTime = new Date(deltaTime).toISOString().substr(11, 8).toString()
                    const controlsStreamInput =
                      inputController === null ? 'Not sent yet' : inputController ? 'true' : 'false'
                    this.sessionStats.controlsStreamInput = controlsStreamInput
                    this.sessionStats.videoEncoderAvgQP = videoEncoderAvgQP
                  }
                  /**
                   * Check if a value coming in from our stats is actually a number
                   * @param value - the number to be checked
                   */
                  isNumber(value) {
                    return typeof value === 'number' && isFinite(value)
                  }
                }

                /***/
              },

            /***/ './src/PeerConnectionController/CandidatePairStats.ts':
              /*!************************************************************!*\
  !*** ./src/PeerConnectionController/CandidatePairStats.ts ***!
  \************************************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_166124__) => {
                __nested_webpack_require_166124__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_166124__.d(__webpack_exports__, {
                  /* harmony export */ CandidatePairStats: () => /* binding */ CandidatePairStats
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * ICE Candidate Pair Stats collected from the RTC Stats Report
                 */
                class CandidatePairStats {}

                /***/
              },

            /***/ './src/PeerConnectionController/CandidateStat.ts':
              /*!*******************************************************!*\
  !*** ./src/PeerConnectionController/CandidateStat.ts ***!
  \*******************************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_166836__) => {
                __nested_webpack_require_166836__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_166836__.d(__webpack_exports__, {
                  /* harmony export */ CandidateStat: () => /* binding */ CandidateStat
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * ICE Candidate Stat collected from the RTC Stats Report
                 */
                class CandidateStat {}

                /***/
              },

            /***/ './src/PeerConnectionController/DataChannelStats.ts':
              /*!**********************************************************!*\
  !*** ./src/PeerConnectionController/DataChannelStats.ts ***!
  \**********************************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_167539__) => {
                __nested_webpack_require_167539__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_167539__.d(__webpack_exports__, {
                  /* harmony export */ DataChannelStats: () => /* binding */ DataChannelStats
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * Data Channel Stats collected from the RTC Stats Report
                 */
                class DataChannelStats {}

                /***/
              },

            /***/ './src/PeerConnectionController/InboundRTPStats.ts':
              /*!*********************************************************!*\
  !*** ./src/PeerConnectionController/InboundRTPStats.ts ***!
  \*********************************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_168247__) => {
                __nested_webpack_require_168247__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_168247__.d(__webpack_exports__, {
                  /* harmony export */ InboundAudioStats: () => /* binding */ InboundAudioStats,
                  /* harmony export */ InboundRTPStats: () => /* binding */ InboundRTPStats,
                  /* harmony export */ InboundVideoStats: () => /* binding */ InboundVideoStats
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * Inbound Audio Stats collected from the RTC Stats Report
                 */
                class InboundAudioStats {}
                /**
                 * Inbound Video Stats collected from the RTC Stats Report
                 */
                class InboundVideoStats {}
                /**
                 * Inbound Stats collected from the RTC Stats Report
                 */
                class InboundRTPStats {}

                /***/
              },

            /***/ './src/PeerConnectionController/OutBoundRTPStats.ts':
              /*!**********************************************************!*\
  !*** ./src/PeerConnectionController/OutBoundRTPStats.ts ***!
  \**********************************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_169321__) => {
                __nested_webpack_require_169321__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_169321__.d(__webpack_exports__, {
                  /* harmony export */ OutBoundRTPStats: () => /* binding */ OutBoundRTPStats,
                  /* harmony export */ OutBoundVideoStats: () => /* binding */ OutBoundVideoStats
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * Outbound Video Stats collected from the RTC Stats Report
                 */
                class OutBoundVideoStats {}
                /**
                 * Outbound Stats collected from the RTC Stats Report
                 */
                class OutBoundRTPStats {}

                /***/
              },

            /***/ './src/PeerConnectionController/PeerConnectionController.ts':
              /*!******************************************************************!*\
  !*** ./src/PeerConnectionController/PeerConnectionController.ts ***!
  \******************************************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_170250__) => {
                __nested_webpack_require_170250__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_170250__.d(__webpack_exports__, {
                  /* harmony export */ PeerConnectionController: () => /* binding */ PeerConnectionController
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__ =
                  __nested_webpack_require_170250__(/*! ../Logger/Logger */ './src/Logger/Logger.ts')
                /* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_1__ =
                  __nested_webpack_require_170250__(/*! ../Config/Config */ './src/Config/Config.ts')
                /* harmony import */ var _AggregatedStats__WEBPACK_IMPORTED_MODULE_3__ =
                  __nested_webpack_require_170250__(
                    /*! ./AggregatedStats */ './src/PeerConnectionController/AggregatedStats.ts'
                  )
                /* harmony import */ var sdp__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_170250__(
                  /*! sdp */ 'sdp'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.
                var __awaiter =
                  false ||
                  function (thisArg, _arguments, P, generator) {
                    function adopt(value) {
                      return value instanceof P
                        ? value
                        : new P(function (resolve) {
                            resolve(value)
                          })
                    }
                    return new (P || (P = Promise))(function (resolve, reject) {
                      function fulfilled(value) {
                        try {
                          step(generator.next(value))
                        } catch (e) {
                          reject(e)
                        }
                      }
                      function rejected(value) {
                        try {
                          step(generator['throw'](value))
                        } catch (e) {
                          reject(e)
                        }
                      }
                      function step(result) {
                        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
                      }
                      step((generator = generator.apply(thisArg, _arguments || [])).next())
                    })
                  }

                /**
                 * Handles the Peer Connection
                 */
                class PeerConnectionController {
                  /**
                   * Create a new RTC Peer Connection client
                   * @param options - Peer connection Options
                   * @param config - The config for our PS experience.
                   */
                  constructor(options, config, preferredCodec) {
                    this.config = config
                    this.createPeerConnection(options, preferredCodec)
                  }
                  createPeerConnection(options, preferredCodec) {
                    // Set the ICE transport to relay if TURN enabled
                    if (this.config.isFlagEnabled(_Config_Config__WEBPACK_IMPORTED_MODULE_1__.Flags.ForceTURN)) {
                      options.iceTransportPolicy = 'relay'
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.GetStackTrace(),
                        'Forcing TURN usage by setting ICE Transport Policy in peer connection config.'
                      )
                    }
                    // build a new peer connection with the options
                    this.peerConnection = new RTCPeerConnection(options)
                    this.peerConnection.onsignalingstatechange = (ev) => this.handleSignalStateChange(ev)
                    this.peerConnection.oniceconnectionstatechange = (ev) => this.handleIceConnectionStateChange(ev)
                    this.peerConnection.onicegatheringstatechange = (ev) => this.handleIceGatheringStateChange(ev)
                    this.peerConnection.ontrack = (ev) => this.handleOnTrack(ev)
                    this.peerConnection.onicecandidate = (ev) => this.handleIceCandidate(ev)
                    this.peerConnection.ondatachannel = (ev) => this.handleDataChannel(ev)
                    this.aggregatedStats = new _AggregatedStats__WEBPACK_IMPORTED_MODULE_3__.AggregatedStats()
                    this.preferredCodec = preferredCodec
                    this.updateCodecSelection = true
                  }
                  /**
                   * Create an offer for the Web RTC handshake and send the offer to the signaling server via websocket
                   * @param offerOptions - RTC Offer Options
                   */
                  createOffer(offerOptions, config) {
                    return __awaiter(this, void 0, void 0, function* () {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.GetStackTrace(),
                        'Create Offer',
                        6
                      )
                      const isLocalhostConnection =
                        location.hostname === 'localhost' || location.hostname === '127.0.0.1'
                      const isHttpsConnection = location.protocol === 'https:'
                      let useMic = config.isFlagEnabled(_Config_Config__WEBPACK_IMPORTED_MODULE_1__.Flags.UseMic)
                      if (useMic && !(isLocalhostConnection || isHttpsConnection)) {
                        useMic = false
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Error(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.GetStackTrace(),
                          'Microphone access in the browser will not work if you are not on HTTPS or localhost. Disabling mic access.'
                        )
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Error(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.GetStackTrace(),
                          "For testing you can enable HTTP microphone access Chrome by visiting chrome://flags/ and enabling 'unsafely-treat-insecure-origin-as-secure'"
                        )
                      }
                      this.setupTransceiversAsync(useMic).finally(() => {
                        var _a
                        ;(_a = this.peerConnection) === null || _a === void 0
                          ? void 0
                          : _a
                              .createOffer(offerOptions)
                              .then((offer) => {
                                var _a
                                this.showTextOverlayConnecting()
                                offer.sdp = this.mungeSDP(offer.sdp, useMic)
                                ;(_a = this.peerConnection) === null || _a === void 0
                                  ? void 0
                                  : _a.setLocalDescription(offer)
                                this.onSendWebRTCOffer(offer)
                              })
                              .catch(() => {
                                this.showTextOverlaySetupFailure()
                              })
                      })
                    })
                  }
                  /**
                   *
                   */
                  receiveOffer(offer, config) {
                    var _a
                    return __awaiter(this, void 0, void 0, function* () {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.GetStackTrace(),
                        'Receive Offer',
                        6
                      )
                      ;(_a = this.peerConnection) === null || _a === void 0
                        ? void 0
                        : _a.setRemoteDescription(offer).then(() => {
                            const isLocalhostConnection =
                              location.hostname === 'localhost' || location.hostname === '127.0.0.1'
                            const isHttpsConnection = location.protocol === 'https:'
                            let useMic = config.isFlagEnabled(_Config_Config__WEBPACK_IMPORTED_MODULE_1__.Flags.UseMic)
                            if (useMic && !(isLocalhostConnection || isHttpsConnection)) {
                              useMic = false
                              _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Error(
                                _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.GetStackTrace(),
                                'Microphone access in the browser will not work if you are not on HTTPS or localhost. Disabling mic access.'
                              )
                              _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Error(
                                _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.GetStackTrace(),
                                "For testing you can enable HTTP microphone access Chrome by visiting chrome://flags/ and enabling 'unsafely-treat-insecure-origin-as-secure'"
                              )
                            }
                            this.setupTransceiversAsync(useMic).finally(() => {
                              var _a
                              ;(_a = this.peerConnection) === null || _a === void 0
                                ? void 0
                                : _a
                                    .createAnswer()
                                    .then((Answer) => {
                                      var _a
                                      Answer.sdp = this.mungeSDP(Answer.sdp, useMic)
                                      return (_a = this.peerConnection) === null || _a === void 0
                                        ? void 0
                                        : _a.setLocalDescription(Answer)
                                    })
                                    .then(() => {
                                      var _a
                                      this.onSendWebRTCAnswer(
                                        (_a = this.peerConnection) === null || _a === void 0
                                          ? void 0
                                          : _a.currentLocalDescription
                                      )
                                    })
                                    .catch(() => {
                                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Error(
                                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.GetStackTrace(),
                                        'createAnswer() failed'
                                      )
                                    })
                            })
                          })
                      // Ugly syntax, but this achieves the intersection of the browser supported list and the UE supported list
                      this.config.setOptionSettingOptions(
                        _Config_Config__WEBPACK_IMPORTED_MODULE_1__.OptionParameters.PreferredCodec,
                        this.parseAvailableCodecs(offer).filter((value) =>
                          this.config
                            .getSettingOption(
                              _Config_Config__WEBPACK_IMPORTED_MODULE_1__.OptionParameters.PreferredCodec
                            )
                            .options.includes(value)
                        )
                      )
                    })
                  }
                  /**
                   * Set the Remote Descriptor from the signaling server to the RTC Peer Connection
                   * @param answer - RTC Session Descriptor from the Signaling Server
                   */
                  receiveAnswer(answer) {
                    var _a
                    ;(_a = this.peerConnection) === null || _a === void 0 ? void 0 : _a.setRemoteDescription(answer)
                    // Ugly syntax, but this achieves the intersection of the browser supported list and the UE supported list
                    this.config.setOptionSettingOptions(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_1__.OptionParameters.PreferredCodec,
                      this.parseAvailableCodecs(answer).filter((value) =>
                        this.config
                          .getSettingOption(_Config_Config__WEBPACK_IMPORTED_MODULE_1__.OptionParameters.PreferredCodec)
                          .options.includes(value)
                      )
                    )
                  }
                  /**
                   * Generate Aggregated Stats and then fire a onVideo Stats event
                   */
                  generateStats() {
                    var _a
                    ;(_a = this.peerConnection) === null || _a === void 0
                      ? void 0
                      : _a.getStats(null).then((StatsData) => {
                          this.aggregatedStats.processStats(StatsData)
                          this.onVideoStats(this.aggregatedStats)
                          // Update the preferred codec selection based on what was actually negotiated
                          if (this.updateCodecSelection) {
                            this.config.setOptionSettingValue(
                              _Config_Config__WEBPACK_IMPORTED_MODULE_1__.OptionParameters.PreferredCodec,
                              this.aggregatedStats.codecs.get(this.aggregatedStats.inboundVideoStats.codecId)
                            )
                          }
                        })
                  }
                  /**
                   * Close The Peer Connection
                   */
                  close() {
                    if (this.peerConnection) {
                      this.peerConnection.close()
                      this.peerConnection = null
                    }
                  }
                  /**
                   * Modify the Session Descriptor
                   * @param sdp - Session Descriptor as a string
                   * @param useMic - Is the microphone in use
                   * @returns A modified Session Descriptor
                   */
                  mungeSDP(sdp, useMic) {
                    const mungedSDP = sdp
                    mungedSDP.replace(
                      /(a=fmtp:\d+ .*level-asymmetry-allowed=.*)\r\n/gm,
                      '$1;x-google-start-bitrate=10000;x-google-max-bitrate=100000\r\n'
                    )
                    let audioSDP = ''
                    // set max bitrate to highest bitrate Opus supports
                    audioSDP += 'maxaveragebitrate=510000;'
                    if (useMic) {
                      // set the max capture rate to 48khz (so we can send high quality audio from mic)
                      audioSDP += 'sprop-maxcapturerate=48000;'
                    }
                    // Force mono or stereo based on whether ?forceMono was passed or not
                    audioSDP += this.config.isFlagEnabled(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_1__.Flags.ForceMonoAudio
                    )
                      ? 'stereo=0;'
                      : 'stereo=1;'
                    // enable in-band forward error correction for opus audio
                    audioSDP += 'useinbandfec=1'
                    // We use the line 'useinbandfec=1' (which Opus uses) to set our Opus specific audio parameters.
                    mungedSDP.replace('useinbandfec=1', audioSDP)
                    return mungedSDP
                  }
                  /**
                   * When a Ice Candidate is received add to the RTC Peer Connection
                   * @param iceCandidate - RTC Ice Candidate from the Signaling Server
                   */
                  handleOnIce(iceCandidate) {
                    var _a
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.GetStackTrace(),
                      'peerconnection handleOnIce',
                      6
                    )
                    // // if forcing TURN, reject any candidates not relay
                    if (this.config.isFlagEnabled(_Config_Config__WEBPACK_IMPORTED_MODULE_1__.Flags.ForceTURN)) {
                      // check if no relay address is found, if so, we are assuming it means no TURN server
                      if (iceCandidate.candidate.indexOf('relay') < 0) {
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Info(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.GetStackTrace(),
                          `Dropping candidate because it was not TURN relay. | Type= ${iceCandidate.type} | Protocol= ${iceCandidate.protocol} | Address=${iceCandidate.address} | Port=${iceCandidate.port} |`,
                          6
                        )
                        return
                      }
                    }
                    ;(_a = this.peerConnection) === null || _a === void 0 ? void 0 : _a.addIceCandidate(iceCandidate)
                  }
                  /**
                   * When the RTC Peer Connection Signaling server state Changes
                   * @param state - Signaling Server State Change Event
                   */
                  handleSignalStateChange(state) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.GetStackTrace(),
                      'signaling state change: ' + state,
                      6
                    )
                  }
                  /**
                   * Handle when the Ice Connection State Changes
                   * @param state - Ice Connection State
                   */
                  handleIceConnectionStateChange(state) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.GetStackTrace(),
                      'ice connection state change: ' + state,
                      6
                    )
                    this.onIceConnectionStateChange(state)
                  }
                  /**
                   * Handle when the Ice Gathering State Changes
                   * @param state - Ice Gathering State Change
                   */
                  handleIceGatheringStateChange(state) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_2__.Logger.GetStackTrace(),
                      'ice gathering state change: ' + JSON.stringify(state),
                      6
                    )
                  }
                  /**
                   * Activates the onTrack method
                   * @param event - The webRtc track event
                   */
                  handleOnTrack(event) {
                    this.onTrack(event)
                  }
                  /**
                   * Activates the onPeerIceCandidate
                   * @param event - The peer ice candidate
                   */
                  handleIceCandidate(event) {
                    this.onPeerIceCandidate(event)
                  }
                  /**
                   * Activates the onDataChannel
                   * @param event - The peer's data channel
                   */
                  handleDataChannel(event) {
                    this.onDataChannel(event)
                  }
                  /**
                   * An override method for onTrack for use outside of the PeerConnectionController
                   * @param trackEvent - The webRtc track event
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  onTrack(trackEvent) {
                    // Default Functionality: Do Nothing
                  }
                  /**
                   * An override method for onIceConnectionStateChange for use outside of the PeerConnectionController
                   * @param event - The webRtc iceconnectionstatechange event
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  onIceConnectionStateChange(event) {
                    // Default Functionality: Do Nothing
                  }
                  /**
                   * An override method for onPeerIceCandidate for use outside of the PeerConnectionController
                   * @param peerConnectionIceEvent - The peer ice candidate
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  onPeerIceCandidate(peerConnectionIceEvent) {
                    // Default Functionality: Do Nothing
                  }
                  /**
                   * An override method for onDataChannel for use outside of the PeerConnectionController
                   * @param datachannelEvent - The peer's data channel
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  onDataChannel(datachannelEvent) {
                    // Default Functionality: Do Nothing
                  }
                  /**
                   * Setup tracks on the RTC Peer Connection
                   * @param useMic - is mic in use
                   */
                  setupTransceiversAsync(useMic) {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j
                    return __awaiter(this, void 0, void 0, function* () {
                      const hasTransceivers =
                        ((_a = this.peerConnection) === null || _a === void 0 ? void 0 : _a.getTransceivers().length) >
                        0
                      // Setup a transceiver for getting UE video
                      ;(_b = this.peerConnection) === null || _b === void 0
                        ? void 0
                        : _b.addTransceiver('video', { direction: 'recvonly' })
                      // We can only set preferrec codec on Chrome
                      if (RTCRtpReceiver.getCapabilities && this.preferredCodec != '') {
                        for (const transceiver of (_d =
                          (_c = this.peerConnection) === null || _c === void 0 ? void 0 : _c.getTransceivers()) !==
                          null && _d !== void 0
                          ? _d
                          : []) {
                          if (
                            transceiver &&
                            transceiver.receiver &&
                            transceiver.receiver.track &&
                            transceiver.receiver.track.kind === 'video'
                          ) {
                            const preferredRTPCodec = this.preferredCodec.split(' ')
                            const codecs = [
                              {
                                mimeType: 'video/' + preferredRTPCodec[0] /* Name */,
                                clockRate: 90000,
                                sdpFmtpLine: preferredRTPCodec[1] /* sdpFmtpLine */ ? preferredRTPCodec[1] : ''
                              }
                            ]
                            this.config
                              .getSettingOption(
                                _Config_Config__WEBPACK_IMPORTED_MODULE_1__.OptionParameters.PreferredCodec
                              )
                              .options.filter((option) => {
                                // Remove the preferred codec from the list of possible codecs as we've set it already
                                return option != this.preferredCodec
                              })
                              .forEach((option) => {
                                // Ammend the rest of the browsers supported codecs
                                const altCodec = option.split(' ')
                                codecs.push({
                                  mimeType: 'video/' + altCodec[0] /* Name */,
                                  clockRate: 90000,
                                  sdpFmtpLine: altCodec[1] /* sdpFmtpLine */ ? altCodec[1] : ''
                                })
                              })
                            for (const codec of codecs) {
                              if (codec.sdpFmtpLine === '') {
                                // We can't dynamically add members to the codec, so instead remove the field if it's empty
                                delete codec.sdpFmtpLine
                              }
                            }
                            transceiver.setCodecPreferences(codecs)
                          }
                        }
                      }
                      // Setup a transceiver for sending mic audio to UE and receiving audio from UE
                      if (!useMic) {
                        ;(_e = this.peerConnection) === null || _e === void 0
                          ? void 0
                          : _e.addTransceiver('audio', {
                              direction: 'recvonly'
                            })
                      } else {
                        // set the audio options based on mic usage
                        const audioOptions = useMic
                          ? {
                              autoGainControl: false,
                              channelCount: 1,
                              echoCancellation: false,
                              latency: 0,
                              noiseSuppression: false,
                              sampleRate: 48000,
                              sampleSize: 16,
                              volume: 1.0
                            }
                          : false
                        // set the media send options
                        const mediaSendOptions = {
                          video: false,
                          audio: audioOptions
                        }
                        // Note using mic on android chrome requires SSL or chrome://flags/ "unsafely-treat-insecure-origin-as-secure"
                        const stream = yield navigator.mediaDevices.getUserMedia(mediaSendOptions)
                        if (stream) {
                          if (hasTransceivers) {
                            for (const transceiver of (_g =
                              (_f = this.peerConnection) === null || _f === void 0 ? void 0 : _f.getTransceivers()) !==
                              null && _g !== void 0
                              ? _g
                              : []) {
                              if (
                                transceiver &&
                                transceiver.receiver &&
                                transceiver.receiver.track &&
                                transceiver.receiver.track.kind === 'audio'
                              ) {
                                for (const track of stream.getTracks()) {
                                  if (track.kind && track.kind == 'audio') {
                                    transceiver.sender.replaceTrack(track)
                                    transceiver.direction = 'sendrecv'
                                  }
                                }
                              }
                            }
                          } else {
                            for (const track of stream.getTracks()) {
                              if (track.kind && track.kind == 'audio') {
                                ;(_h = this.peerConnection) === null || _h === void 0
                                  ? void 0
                                  : _h.addTransceiver(track, {
                                      direction: 'sendrecv'
                                    })
                              }
                            }
                          }
                        } else {
                          ;(_j = this.peerConnection) === null || _j === void 0
                            ? void 0
                            : _j.addTransceiver('audio', {
                                direction: 'recvonly'
                              })
                        }
                      }
                    })
                  }
                  /**
                   * And override event for when the video stats are fired
                   * @param event - Aggregated Stats
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  onVideoStats(event) {
                    // Default Functionality: Do Nothing
                  }
                  /**
                   * Event to send the RTC offer to the Signaling server
                   * @param offer - RTC Offer
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  onSendWebRTCOffer(offer) {
                    // Default Functionality: Do Nothing
                  }
                  /**
                   * Event to send the RTC Answer to the Signaling server
                   * @param answer - RTC Answer
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  onSendWebRTCAnswer(answer) {
                    // Default Functionality: Do Nothing
                  }
                  /**
                   * An override for showing the Peer connection connecting Overlay
                   */
                  showTextOverlayConnecting() {
                    // Default Functionality: Do Nothing
                  }
                  /**
                   * An override for showing the Peer connection Failed overlay
                   */
                  showTextOverlaySetupFailure() {
                    // Default Functionality: Do Nothing
                  }
                  parseAvailableCodecs(rtcSessionDescription) {
                    // No point in updating the available codecs if on FF
                    if (!RTCRtpReceiver.getCapabilities) return ['Only available on Chrome']
                    const ueSupportedCodecs = []
                    const sections = (0, sdp__WEBPACK_IMPORTED_MODULE_0__.splitSections)(rtcSessionDescription.sdp)
                    // discard the session information as we only want media related info
                    sections.shift()
                    sections.forEach((mediaSection) => {
                      const { codecs } = (0, sdp__WEBPACK_IMPORTED_MODULE_0__.parseRtpParameters)(mediaSection)
                      // Filter only for VPX / H26X / AV1
                      const matcher = /(VP\d|H26\d|AV1).*/
                      codecs.forEach((c) => {
                        const str =
                          c.name +
                          ' ' +
                          Object.keys(c.parameters || {})
                            .map((p) => p + '=' + c.parameters[p])
                            .join(';')
                        const match = matcher.exec(str)
                        if (match !== null) {
                          if (c.name == 'VP9') {
                            // UE answers don't specify profile but we know we want profile 0
                            c.parameters = {
                              'profile-id': '0'
                            }
                          }
                          const codecStr =
                            c.name +
                            ' ' +
                            Object.keys(c.parameters || {})
                              .map((p) => p + '=' + c.parameters[p])
                              .join(';')
                          ueSupportedCodecs.push(codecStr)
                        }
                      })
                    })
                    return ueSupportedCodecs
                  }
                }

                /***/
              },

            /***/ './src/PeerConnectionController/SessionStats.ts':
              /*!******************************************************!*\
  !*** ./src/PeerConnectionController/SessionStats.ts ***!
  \******************************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_195050__) => {
                __nested_webpack_require_195050__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_195050__.d(__webpack_exports__, {
                  /* harmony export */ SessionStats: () => /* binding */ SessionStats
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * Session statistics
                 */
                class SessionStats {}

                /***/
              },

            /***/ './src/PeerConnectionController/StreamStats.ts':
              /*!*****************************************************!*\
  !*** ./src/PeerConnectionController/StreamStats.ts ***!
  \*****************************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_195694__) => {
                __nested_webpack_require_195694__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_195694__.d(__webpack_exports__, {
                  /* harmony export */ StreamStats: () => /* binding */ StreamStats
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * Class to hold the stream stats data coming in from webRtc
                 */
                class StreamStats {}

                /***/
              },

            /***/ './src/PixelStreaming/PixelStreaming.ts':
              /*!**********************************************!*\
  !*** ./src/PixelStreaming/PixelStreaming.ts ***!
  \**********************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_196346__) => {
                __nested_webpack_require_196346__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_196346__.d(__webpack_exports__, {
                  /* harmony export */ PixelStreaming: () => /* binding */ PixelStreaming
                  /* harmony export */
                })
                /* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_4__ =
                  __nested_webpack_require_196346__(/*! ../Config/Config */ './src/Config/Config.ts')
                /* harmony import */ var _WebRtcPlayer_WebRtcPlayerController__WEBPACK_IMPORTED_MODULE_1__ =
                  __nested_webpack_require_196346__(
                    /*! ../WebRtcPlayer/WebRtcPlayerController */ './src/WebRtcPlayer/WebRtcPlayerController.ts'
                  )
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__ =
                  __nested_webpack_require_196346__(/*! ../Logger/Logger */ './src/Logger/Logger.ts')
                /* harmony import */ var _UI_OnScreenKeyboard__WEBPACK_IMPORTED_MODULE_2__ =
                  __nested_webpack_require_196346__(/*! ../UI/OnScreenKeyboard */ './src/UI/OnScreenKeyboard.ts')
                /* harmony import */ var _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_196346__(/*! ../Util/EventEmitter */ './src/Util/EventEmitter.ts')
                /* harmony import */ var _WebXR_WebXRController__WEBPACK_IMPORTED_MODULE_3__ =
                  __nested_webpack_require_196346__(/*! ../WebXR/WebXRController */ './src/WebXR/WebXRController.ts')
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * The key class for the browser side of a Pixel Streaming application, it includes:
                 * WebRTC handling, XR support, input handling, and emitters for lifetime and state change events.
                 * Users are encouraged to use this class as is, through composition, or extend it. In any case,
                 * this will likely be the core of your Pixel Streaming experience in terms of functionality.
                 */
                class PixelStreaming {
                  /**
                   * @param config - A newly instantiated config object
                   * @param overrides - Parameters to override default behaviour
                   * returns the base Pixel streaming object
                   */
                  constructor(config, overrides) {
                    this._showActionOrErrorOnDisconnect = true
                    this.allowConsoleCommands = false
                    this.config = config
                    if (overrides === null || overrides === void 0 ? void 0 : overrides.videoElementParent) {
                      this._videoElementParent = overrides.videoElementParent
                    }
                    this._eventEmitter = new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.EventEmitter()
                    this.configureSettings()
                    // setup WebRTC
                    this.setWebRtcPlayerController(
                      new _WebRtcPlayer_WebRtcPlayerController__WEBPACK_IMPORTED_MODULE_1__.WebRtcPlayerController(
                        this.config,
                        this
                      )
                    )
                    // Onscreen keyboard
                    this.onScreenKeyboardHelper =
                      new _UI_OnScreenKeyboard__WEBPACK_IMPORTED_MODULE_2__.OnScreenKeyboard(this.videoElementParent)
                    this.onScreenKeyboardHelper.unquantizeAndDenormalizeUnsigned = (x, y) =>
                      this._webRtcController.requestUnquantizedAndDenormalizeUnsigned(x, y)
                    this._activateOnScreenKeyboard = (command) =>
                      this.onScreenKeyboardHelper.showOnScreenKeyboard(command)
                    this._webXrController = new _WebXR_WebXRController__WEBPACK_IMPORTED_MODULE_3__.WebXRController(
                      this._webRtcController
                    )
                  }
                  /**
                   * Gets the element that contains the video stream element.
                   */
                  get videoElementParent() {
                    if (!this._videoElementParent) {
                      this._videoElementParent = document.createElement('div')
                      this._videoElementParent.id = 'videoElementParent'
                    }
                    return this._videoElementParent
                  }
                  /**
                   * Configure the settings with on change listeners and any additional per experience settings.
                   */
                  configureSettings() {
                    this.config._addOnSettingChangedListener(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_4__.Flags.IsQualityController,
                      (wantsQualityController) => {
                        // If the setting has been set to true (either programatically or the user has flicked the toggle)
                        // and we aren't currently quality controller, send the request
                        if (wantsQualityController === true && !this._webRtcController.isQualityController) {
                          this._webRtcController.sendRequestQualityControlOwnership()
                        }
                      }
                    )
                    this.config._addOnSettingChangedListener(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_4__.Flags.AFKDetection,
                      (isAFKEnabled) => {
                        this._webRtcController.setAfkEnabled(isAFKEnabled)
                      }
                    )
                    this.config._addOnSettingChangedListener(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_4__.Flags.MatchViewportResolution,
                      () => {
                        this._webRtcController.videoPlayer.updateVideoStreamSize()
                      }
                    )
                    this.config._addOnSettingChangedListener(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_4__.Flags.HoveringMouseMode,
                      (isHoveringMouse) => {
                        this.config.setFlagLabel(
                          _Config_Config__WEBPACK_IMPORTED_MODULE_4__.Flags.HoveringMouseMode,
                          `Control Scheme: ${isHoveringMouse ? 'Hovering' : 'Locked'} Mouse`
                        )
                        this._webRtcController.setMouseInputEnabled(
                          this.config.isFlagEnabled(_Config_Config__WEBPACK_IMPORTED_MODULE_4__.Flags.MouseInput)
                        )
                      }
                    )
                    // user input
                    this.config._addOnSettingChangedListener(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_4__.Flags.KeyboardInput,
                      (isEnabled) => {
                        this._webRtcController.setKeyboardInputEnabled(isEnabled)
                      }
                    )
                    this.config._addOnSettingChangedListener(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_4__.Flags.MouseInput,
                      (isEnabled) => {
                        this._webRtcController.setMouseInputEnabled(isEnabled)
                      }
                    )
                    this.config._addOnSettingChangedListener(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_4__.Flags.TouchInput,
                      (isEnabled) => {
                        this._webRtcController.setTouchInputEnabled(isEnabled)
                      }
                    )
                    this.config._addOnSettingChangedListener(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_4__.Flags.GamepadInput,
                      (isEnabled) => {
                        this._webRtcController.setGamePadInputEnabled(isEnabled)
                      }
                    )
                    // encoder settings
                    this.config._addOnNumericSettingChangedListener(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.MinQP,
                      (newValue) => {
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.GetStackTrace(),
                          '--------  Sending MinQP  --------',
                          7
                        )
                        this._webRtcController.sendEncoderMinQP(newValue)
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.GetStackTrace(),
                          '-------------------------------------------',
                          7
                        )
                      }
                    )
                    this.config._addOnNumericSettingChangedListener(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.MaxQP,
                      (newValue) => {
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.GetStackTrace(),
                          '--------  Sending encoder settings  --------',
                          7
                        )
                        this._webRtcController.sendEncoderMaxQP(newValue)
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.GetStackTrace(),
                          '-------------------------------------------',
                          7
                        )
                      }
                    )
                    // WebRTC settings
                    this.config._addOnNumericSettingChangedListener(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.WebRTCMinBitrate,
                      (newValue) => {
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.GetStackTrace(),
                          '--------  Sending web rtc settings  --------',
                          7
                        )
                        this._webRtcController.sendWebRTCMinBitrate(newValue * 1000 /* kbps to bps */)
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.GetStackTrace(),
                          '-------------------------------------------',
                          7
                        )
                      }
                    )
                    this.config._addOnNumericSettingChangedListener(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.WebRTCMaxBitrate,
                      (newValue) => {
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.GetStackTrace(),
                          '--------  Sending web rtc settings  --------',
                          7
                        )
                        this._webRtcController.sendWebRTCMaxBitrate(newValue * 1000 /* kbps to bps */)
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.GetStackTrace(),
                          '-------------------------------------------',
                          7
                        )
                      }
                    )
                    this.config._addOnNumericSettingChangedListener(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.WebRTCFPS,
                      (newValue) => {
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.GetStackTrace(),
                          '--------  Sending web rtc settings  --------',
                          7
                        )
                        this._webRtcController.sendWebRTCFps(newValue)
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.GetStackTrace(),
                          '-------------------------------------------',
                          7
                        )
                      }
                    )
                    this.config._addOnOptionSettingChangedListener(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_4__.OptionParameters.PreferredCodec,
                      (newValue) => {
                        if (this._webRtcController) {
                          this._webRtcController.setPreferredCodec(newValue)
                        }
                      }
                    )
                    this.config._registerOnChangeEvents(this._eventEmitter)
                  }
                  /**
                   * Activate the on screen keyboard when receiving the command from the streamer
                   * @param command - the keyboard command
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  _activateOnScreenKeyboard(command) {
                    throw new Error('Method not implemented.')
                  }
                  /**
                   * Set the input control ownership
                   * @param inputControlOwnership - does the user have input control ownership
                   */
                  _onInputControlOwnership(inputControlOwnership) {
                    this._inputController = inputControlOwnership
                  }
                  /**
                   * Instantiate the WebRTCPlayerController interface to provide WebRTCPlayerController functionality within this class and set up anything that requires it
                   * @param webRtcPlayerController - a WebRtcPlayerController controller instance
                   */
                  setWebRtcPlayerController(webRtcPlayerController) {
                    this._webRtcController = webRtcPlayerController
                    this._webRtcController.setPreferredCodec(
                      this.config.getSettingOption(
                        _Config_Config__WEBPACK_IMPORTED_MODULE_4__.OptionParameters.PreferredCodec
                      ).selected
                    )
                    this._webRtcController.resizePlayerStyle()
                    // connect if auto connect flag is enabled
                    this.checkForAutoConnect()
                  }
                  /**
                   * Connect to signaling server.
                   */
                  connect() {
                    this._eventEmitter.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.StreamPreConnectEvent()
                    )
                    this._webRtcController.connectToSignallingServer()
                  }
                  /**
                   * Reconnects to the signaling server. If connection is up, disconnects first
                   * before establishing a new connection
                   */
                  reconnect() {
                    this._eventEmitter.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.StreamReconnectEvent()
                    )
                    this._webRtcController.restartStreamAutomatically()
                  }
                  /**
                   * Disconnect from the signaling server and close open peer connections.
                   */
                  disconnect() {
                    this._eventEmitter.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.StreamPreDisconnectEvent()
                    )
                    this._webRtcController.close()
                  }
                  /**
                   * Play the stream. Can be called only after a peer connection has been established.
                   */
                  play() {
                    this._onStreamLoading()
                    this._webRtcController.playStream()
                  }
                  /**
                   * Auto connect if AutoConnect flag is enabled
                   */
                  checkForAutoConnect() {
                    // set up if the auto play will be used or regular click to start
                    if (this.config.isFlagEnabled(_Config_Config__WEBPACK_IMPORTED_MODULE_4__.Flags.AutoConnect)) {
                      // if autoplaying show an info overlay while while waiting for the connection to begin
                      this._onWebRtcAutoConnect()
                      this._webRtcController.connectToSignallingServer()
                    }
                  }
                  /**
                   * Emit an event on auto connecting
                   */
                  _onWebRtcAutoConnect() {
                    this._eventEmitter.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.WebRtcAutoConnectEvent()
                    )
                    this._showActionOrErrorOnDisconnect = true
                  }
                  /**
                   * Set up functionality to happen when receiving a webRTC answer
                   */
                  _onWebRtcSdp() {
                    this._eventEmitter.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.WebRtcSdpEvent()
                    )
                  }
                  /**
                   * Emits a StreamLoading event
                   */
                  _onStreamLoading() {
                    this._eventEmitter.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.StreamLoadingEvent()
                    )
                  }
                  /**
                   * Event fired when the video is disconnected - emits given eventString or an override
                   * message from webRtcController if one has been set
                   * @param eventString - the event text that will be emitted
                   */
                  _onDisconnect(eventString) {
                    // if we have overridden the default disconnection message, assign the new value here
                    if (
                      this._webRtcController.getDisconnectMessageOverride() != '' &&
                      this._webRtcController.getDisconnectMessageOverride() !== undefined &&
                      this._webRtcController.getDisconnectMessageOverride() != null
                    ) {
                      eventString = this._webRtcController.getDisconnectMessageOverride()
                      this._webRtcController.setDisconnectMessageOverride('')
                    }
                    this._eventEmitter.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.WebRtcDisconnectedEvent({
                        eventString,
                        showActionOrErrorOnDisconnect: this._showActionOrErrorOnDisconnect
                      })
                    )
                    if (this._showActionOrErrorOnDisconnect == false) {
                      this._showActionOrErrorOnDisconnect = true
                    }
                  }
                  /**
                   * Handles when Web Rtc is connecting
                   */
                  _onWebRtcConnecting() {
                    this._eventEmitter.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.WebRtcConnectingEvent()
                    )
                  }
                  /**
                   * Handles when Web Rtc has connected
                   */
                  _onWebRtcConnected() {
                    this._eventEmitter.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.WebRtcConnectedEvent()
                    )
                  }
                  /**
                   * Handles when Web Rtc fails to connect
                   */
                  _onWebRtcFailed() {
                    this._eventEmitter.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.WebRtcFailedEvent()
                    )
                  }
                  /**
                   * Handle when the Video has been Initialized
                   */
                  _onVideoInitialized() {
                    this._eventEmitter.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.VideoInitializedEvent()
                    )
                    this._videoStartTime = Date.now()
                  }
                  /**
                   * Set up functionality to happen when receiving latency test results
                   * @param latency - latency test results object
                   */
                  _onLatencyTestResult(latencyTimings) {
                    this._eventEmitter.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.LatencyTestResultEvent({ latencyTimings })
                    )
                  }
                  /**
                   * Set up functionality to happen when receiving video statistics
                   * @param videoStats - video statistics as a aggregate stats object
                   */
                  _onVideoStats(videoStats) {
                    // Duration
                    if (!this._videoStartTime || this._videoStartTime === undefined) {
                      this._videoStartTime = Date.now()
                    }
                    videoStats.handleSessionStatistics(
                      this._videoStartTime,
                      this._inputController,
                      this._webRtcController.videoAvgQp
                    )
                    this._eventEmitter.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.StatsReceivedEvent({
                        aggregatedStats: videoStats
                      })
                    )
                  }
                  /**
                   * Set up functionality to happen when calculating the average video encoder qp
                   * @param QP - the quality number of the stream
                   */
                  _onVideoEncoderAvgQP(QP) {
                    this._eventEmitter.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.VideoEncoderAvgQPEvent({ avgQP: QP })
                    )
                  }
                  /**
                   * Set up functionality to happen when receiving and handling initial settings for the UE app
                   * @param settings - initial UE app settings
                   */
                  _onInitialSettings(settings) {
                    var _a
                    this._eventEmitter.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_0__.InitialSettingsEvent({ settings })
                    )
                    if (settings.PixelStreamingSettings) {
                      this.allowConsoleCommands =
                        (_a = settings.PixelStreamingSettings.AllowPixelStreamingCommands) !== null && _a !== void 0
                          ? _a
                          : false
                      if (this.allowConsoleCommands === false) {
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.Info(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_5__.Logger.GetStackTrace(),
                          '-AllowPixelStreamingCommands=false, sending arbitrary console commands from browser to UE is disabled.'
                        )
                      }
                    }
                    const useUrlParams = this.config.useUrlParams
                    const urlParams = new URLSearchParams(window.location.search)
                    if (settings.EncoderSettings) {
                      this.config.setNumericSetting(
                        _Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.MinQP,
                        // If a setting is set in the URL, make sure we respect that value as opposed to what the application sends us
                        useUrlParams &&
                          urlParams.has(_Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.MinQP)
                          ? Number.parseInt(
                              urlParams.get(_Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.MinQP)
                            )
                          : settings.EncoderSettings.MinQP
                      )
                      this.config.setNumericSetting(
                        _Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.MaxQP,
                        useUrlParams &&
                          urlParams.has(_Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.MaxQP)
                          ? Number.parseInt(
                              urlParams.get(_Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.MaxQP)
                            )
                          : settings.EncoderSettings.MaxQP
                      )
                    }
                    if (settings.WebRTCSettings) {
                      this.config.setNumericSetting(
                        _Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.WebRTCMinBitrate,
                        useUrlParams &&
                          urlParams.has(_Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.WebRTCMinBitrate)
                          ? Number.parseInt(
                              urlParams.get(
                                _Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.WebRTCMinBitrate
                              )
                            ) / 1000 /* bps to kbps */
                          : settings.WebRTCSettings.MinBitrate / 1000 /* bps to kbps */
                      )
                      this.config.setNumericSetting(
                        _Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.WebRTCMaxBitrate,
                        useUrlParams &&
                          urlParams.has(_Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.WebRTCMaxBitrate)
                          ? Number.parseInt(
                              urlParams.get(
                                _Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.WebRTCMaxBitrate
                              )
                            ) / 1000 /* bps to kbps */
                          : settings.WebRTCSettings.MaxBitrate / 1000 /* bps to kbps */
                      )
                      this.config.setNumericSetting(
                        _Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.WebRTCFPS,
                        useUrlParams &&
                          urlParams.has(_Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.WebRTCFPS)
                          ? Number.parseInt(
                              urlParams.get(_Config_Config__WEBPACK_IMPORTED_MODULE_4__.NumericParameters.WebRTCFPS)
                            )
                          : settings.WebRTCSettings.FPS
                      )
                    }
                  }
                  /**
                   * Set up functionality to happen when setting quality control ownership of a stream
                   * @param hasQualityOwnership - does this user have quality ownership of the stream true / false
                   */
                  _onQualityControlOwnership(hasQualityOwnership) {
                    this.config.setFlagEnabled(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_4__.Flags.IsQualityController,
                      hasQualityOwnership
                    )
                  }
                  /**
                   * Request a connection latency test.
                   * NOTE: There are plans to refactor all request* functions. Expect changes if you use this!
                   * @returns
                   */
                  requestLatencyTest() {
                    if (!this._webRtcController.videoPlayer.isVideoReady()) {
                      return false
                    }
                    this._webRtcController.sendLatencyTest()
                    return true
                  }
                  /**
                   * Request for the UE application to show FPS counter.
                   * NOTE: There are plans to refactor all request* functions. Expect changes if you use this!
                   * @returns
                   */
                  requestShowFps() {
                    if (!this._webRtcController.videoPlayer.isVideoReady()) {
                      return false
                    }
                    this._webRtcController.sendShowFps()
                    return true
                  }
                  /**
                   * Request for a new IFrame from the UE application.
                   * NOTE: There are plans to refactor all request* functions. Expect changes if you use this!
                   * @returns
                   */
                  requestIframe() {
                    if (!this._webRtcController.videoPlayer.isVideoReady()) {
                      return false
                    }
                    this._webRtcController.sendIframeRequest()
                    return true
                  }
                  /**
                   * Send data to UE application. The data will be run through JSON.stringify() so e.g. strings
                   * and any serializable plain JSON objects with no recurrence can be sent.
                   * @returns true if succeeded, false if rejected
                   */
                  emitUIInteraction(descriptor) {
                    if (!this._webRtcController.videoPlayer.isVideoReady()) {
                      return false
                    }
                    this._webRtcController.emitUIInteraction(descriptor)
                    return true
                  }
                  /**
                   * Send a command to UE application. Blocks ConsoleCommand descriptors unless UE
                   * has signaled that it allows console commands.
                   * @returns true if succeeded, false if rejected
                   */
                  emitCommand(descriptor) {
                    if (!this._webRtcController.videoPlayer.isVideoReady()) {
                      return false
                    }
                    if (!this.allowConsoleCommands && 'ConsoleCommand' in descriptor) {
                      return false
                    }
                    this._webRtcController.emitCommand(descriptor)
                    return true
                  }
                  /**
                   * Send a console command to UE application. Only allowed if UE has signaled that it allows
                   * console commands.
                   * @returns true if succeeded, false if rejected
                   */
                  emitConsoleCommand(command) {
                    if (!this.allowConsoleCommands || !this._webRtcController.videoPlayer.isVideoReady()) {
                      return false
                    }
                    this._webRtcController.emitConsoleCommand(command)
                    return true
                  }
                  /**
                   * Add a UE -> browser response event listener
                   * @param name - The name of the response handler
                   * @param listener - The method to be activated when a message is received
                   */
                  addResponseEventListener(name, listener) {
                    this._webRtcController.responseController.addResponseEventListener(name, listener)
                  }
                  /**
                   * Remove a UE -> browser response event listener
                   * @param name - The name of the response handler
                   */
                  removeResponseEventListener(name) {
                    this._webRtcController.responseController.removeResponseEventListener(name)
                  }
                  /**
                   * Dispatch a new event.
                   * @param e event
                   * @returns
                   */
                  dispatchEvent(e) {
                    return this._eventEmitter.dispatchEvent(e)
                  }
                  /**
                   * Register an event handler.
                   * @param type event name
                   * @param listener event handler function
                   */
                  addEventListener(type, listener) {
                    this._eventEmitter.addEventListener(type, listener)
                  }
                  /**
                   * Remove an event handler.
                   * @param type event name
                   * @param listener event handler function
                   */
                  removeEventListener(type, listener) {
                    this._eventEmitter.removeEventListener(type, listener)
                  }
                  /**
                   * Enable/disable XR mode.
                   */
                  toggleXR() {
                    this.webXrController.xrClicked()
                  }
                  /**
                   * Pass in a function to generate a signalling server URL.
                   * This function is useful if you need to programmatically construct your signalling server URL.
                   * @param signallingUrlBuilderFunc A function that generates a signalling server url.
                   */
                  setSignallingUrlBuilder(signallingUrlBuilderFunc) {
                    this._webRtcController.signallingUrlBuilder = signallingUrlBuilderFunc
                  }
                  /**
                   * Public getter for the websocket controller. Access to this property allows you to send
                   * custom websocket messages.
                   */
                  get webSocketController() {
                    return this._webRtcController.webSocketController
                  }
                  /**
                   * Public getter for the webXrController controller. Used for all XR features.
                   */
                  get webXrController() {
                    return this._webXrController
                  }
                }
                window.PixelStreaming = PixelStreaming

                /***/
              },

            /***/ './src/UI/OnScreenKeyboard.ts':
              /*!************************************!*\
  !*** ./src/UI/OnScreenKeyboard.ts ***!
  \************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_221647__) => {
                __nested_webpack_require_221647__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_221647__.d(__webpack_exports__, {
                  /* harmony export */ OnScreenKeyboard: () => /* binding */ OnScreenKeyboard
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * Class for handling on screen keyboard usage
                 */
                class OnScreenKeyboard {
                  /**
                   *
                   * @param videoElementParent The div element the video player is injected into
                   */
                  constructor(videoElementParent) {
                    this.editTextButton = null
                    this.hiddenInput = null
                    if ('ontouchstart' in document.documentElement) {
                      this.createOnScreenKeyboardHelpers(videoElementParent)
                    }
                  }
                  /**
                   * An override for unquantizeAndDenormalizeUnsigned
                   * @param x the x axis point
                   * @param y the y axis point
                   * @returns unquantizeAndDenormalizeUnsigned object
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  unquantizeAndDenormalizeUnsigned(x, y) {
                    return null
                  }
                  /**
                   * Creates on screen keyboard helpers
                   * @param videoElementParent The div element the video player i injected into
                   */
                  createOnScreenKeyboardHelpers(videoElementParent) {
                    if (!this.hiddenInput) {
                      this.hiddenInput = document.createElement('input')
                      this.hiddenInput.id = 'hiddenInput'
                      this.hiddenInput.maxLength = 0
                      videoElementParent.appendChild(this.hiddenInput)
                    }
                    if (!this.editTextButton) {
                      this.editTextButton = document.createElement('button')
                      this.editTextButton.id = 'editTextButton'
                      this.editTextButton.innerHTML = 'edit text'
                      videoElementParent.appendChild(this.editTextButton)
                      // Hide the 'edit text' button.
                      this.editTextButton.classList.add('hiddenState')
                      this.editTextButton.addEventListener('touchend', (event) => {
                        // Show the on-screen keyboard.
                        this.hiddenInput.focus()
                        event.preventDefault()
                      })
                    }
                  }
                  /**
                   * Shows the on screen keyboard
                   * @param command the command received via the data channel containing keyboard positions
                   */
                  showOnScreenKeyboard(command) {
                    if (command.showOnScreenKeyboard) {
                      // Show the 'edit text' button.
                      this.editTextButton.classList.remove('hiddenState')
                      // Place the 'edit text' button near the UE input widget.
                      const pos = this.unquantizeAndDenormalizeUnsigned(command.x, command.y)
                      this.editTextButton.style.top = pos.y.toString() + 'px'
                      this.editTextButton.style.left = (pos.x - 40).toString() + 'px'
                    } else {
                      // Hide the 'edit text' button.
                      this.editTextButton.classList.add('hiddenState')
                      // Hide the on-screen keyboard.
                      this.hiddenInput.blur()
                    }
                  }
                }

                /***/
              },

            /***/ './src/UeInstanceMessage/ResponseController.ts':
              /*!*****************************************************!*\
  !*** ./src/UeInstanceMessage/ResponseController.ts ***!
  \*****************************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_225026__) => {
                __nested_webpack_require_225026__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_225026__.d(__webpack_exports__, {
                  /* harmony export */ ResponseController: () => /* binding */ ResponseController
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_225026__(/*! ../Logger/Logger */ './src/Logger/Logger.ts')
                // Copyright Epic Games, Inc. All Rights Reserved.

                class ResponseController {
                  constructor() {
                    this.responseEventListeners = new Map()
                  }
                  /**
                   * Add a response event listener to the response map
                   * @param name - The name of the response
                   * @param listener - The method to be activated when the response is selected
                   */
                  addResponseEventListener(name, listener) {
                    this.responseEventListeners.set(name, listener)
                  }
                  /**
                   * Remove a response event listener to the response map
                   * @param name - The name of the response
                   */
                  removeResponseEventListener(name) {
                    this.responseEventListeners.delete(name)
                  }
                  /**
                   * Handle a response when receiving one form the streamer
                   * @param message - Data received from the data channel with the command in question
                   */
                  onResponseFileContents(message) {
                    this.responseEventListeners.forEach((listener) => {
                      listener({
                        ...message,
                        type: 'onResponseFileContents'
                      })
                    })
                  }
                  onResponse(message) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      'DataChannelReceiveMessageType.Response',
                      6
                    )
                    const responses = new TextDecoder('utf-16').decode(message.slice(1))
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      responses,
                      6
                    )
                    this.responseEventListeners.forEach((listener) => {
                      listener(responses)
                    })
                  }
                }
                /***/
              },

            /***/ './src/UeInstanceMessage/SendDescriptorController.ts':
              /*!***********************************************************!*\
  !*** ./src/UeInstanceMessage/SendDescriptorController.ts ***!
  \***********************************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_227162__) => {
                __nested_webpack_require_227162__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_227162__.d(__webpack_exports__, {
                  /* harmony export */ SendDescriptorController: () => /* binding */ SendDescriptorController
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_227162__(/*! ../Logger/Logger */ './src/Logger/Logger.ts')
                // Copyright Epic Games, Inc. All Rights Reserved.

                class SendDescriptorController {
                  constructor(dataChannelSender, toStreamerMessagesMapProvider) {
                    this.dataChannelSender = dataChannelSender
                    this.toStreamerMessagesMapProvider = toStreamerMessagesMapProvider
                  }
                  /**
                   * Send a Latency Test to the UE Instance
                   * @param descriptor - the descriptor for a latency test
                   */
                  sendLatencyTest(descriptor) {
                    this.sendDescriptor('LatencyTest', descriptor)
                  }
                  /**
                   * Send a Latency Test to the UE Instance
                   * @param descriptor - the descriptor for a command
                   */
                  emitCommand(descriptor) {
                    this.sendDescriptor('Command', descriptor)
                  }
                  /**
                   * Send a Latency Test to the UE Instance
                   * @param descriptor - the descriptor for a UI Interaction
                   */
                  emitUIInteraction(descriptor) {
                    this.sendDescriptor('UIInteraction', descriptor)
                  }
                  /**
                   * Send a Descriptor to the UE Instances
                   * @param messageType - UE Message Type
                   * @param descriptor - Descriptor Message as JSON
                   */
                  sendDescriptor(messageType, descriptor) {
                    // Convert the descriptor object into a JSON string.
                    const descriptorAsString = JSON.stringify(descriptor)
                    const toStreamerMessages = this.toStreamerMessagesMapProvider.toStreamerMessages
                    const messageFormat = toStreamerMessages.getFromKey(messageType)
                    if (messageFormat === undefined) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Error(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        `Attempted to emit descriptor with message type: ${messageType}, but the frontend hasn't been configured to send such a message. Check you've added the message type in your cpp`
                      )
                    }
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      'Sending: ' + descriptor,
                      6
                    )
                    // Add the UTF-16 JSON string to the array byte buffer, going two bytes at
                    // a time.
                    const data = new DataView(new ArrayBuffer(1 + 2 + 2 * descriptorAsString.length))
                    let byteIdx = 0
                    data.setUint8(byteIdx, messageFormat.id)
                    byteIdx++
                    data.setUint16(byteIdx, descriptorAsString.length, true)
                    byteIdx += 2
                    for (let i = 0; i < descriptorAsString.length; i++) {
                      data.setUint16(byteIdx, descriptorAsString.charCodeAt(i), true)
                      byteIdx += 2
                    }
                    if (!this.dataChannelSender.canSend()) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Info(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        `Data channel cannot send yet, skipping sending descriptor message: ${messageType} - ${descriptorAsString}`
                      )
                      return
                    }
                    this.dataChannelSender.sendData(data.buffer)
                  }
                }

                /***/
              },

            /***/ './src/UeInstanceMessage/SendMessageController.ts':
              /*!********************************************************!*\
  !*** ./src/UeInstanceMessage/SendMessageController.ts ***!
  \********************************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_230833__) => {
                __nested_webpack_require_230833__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_230833__.d(__webpack_exports__, {
                  /* harmony export */ SendMessageController: () => /* binding */ SendMessageController
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_230833__(/*! ../Logger/Logger */ './src/Logger/Logger.ts')
                // Copyright Epic Games, Inc. All Rights Reserved.

                class SendMessageController {
                  /**
                   * @param dataChannelSender - Data channel instance
                   * @param toStreamerMessagesMapProvider - Stream Messages instance
                   */
                  constructor(dataChannelSender, toStreamerMessagesMapProvider) {
                    this.dataChannelSender = dataChannelSender
                    this.toStreamerMessagesMapProvider = toStreamerMessagesMapProvider
                  }
                  /**
                   * Send a message to the streamer through the data channel
                   * @param messageType - the type of message we are sending
                   * @param messageData - the message data we are sending over the data channel
                   * @returns - nil
                   */
                  sendMessageToStreamer(messageType, messageData) {
                    if (messageData === undefined) {
                      messageData = []
                    }
                    const toStreamerMessages = this.toStreamerMessagesMapProvider.toStreamerMessages
                    const messageFormat = toStreamerMessages.getFromKey(messageType)
                    if (messageFormat === undefined) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Error(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        `Attempted to send a message to the streamer with message type: ${messageType}, but the frontend hasn't been configured to send such a message. Check you've added the message type in your cpp`
                      )
                      return
                    }
                    const data = new DataView(new ArrayBuffer(messageFormat.byteLength + 1))
                    data.setUint8(0, messageFormat.id)
                    let byteOffset = 1
                    messageData.forEach((element, idx) => {
                      const type = messageFormat.structure[idx]
                      switch (type) {
                        case 'uint8':
                          data.setUint8(byteOffset, element)
                          byteOffset += 1
                          break
                        case 'uint16':
                          data.setUint16(byteOffset, element, true)
                          byteOffset += 2
                          break
                        case 'int16':
                          data.setInt16(byteOffset, element, true)
                          byteOffset += 2
                          break
                        case 'float':
                          data.setFloat32(byteOffset, element, true)
                          byteOffset += 4
                          break
                        case 'double':
                          data.setFloat64(byteOffset, element, true)
                          byteOffset += 8
                          break
                      }
                    })
                    if (!this.dataChannelSender.canSend()) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Info(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        `Data channel cannot send yet, skipping sending message: ${messageType} - ${new Uint8Array(
                          data.buffer
                        )}`
                      )
                      return
                    } else {
                      this.dataChannelSender.sendData(data.buffer)
                    }
                  }
                }

                /***/
              },

            /***/ './src/UeInstanceMessage/StreamMessageController.ts':
              /*!**********************************************************!*\
  !*** ./src/UeInstanceMessage/StreamMessageController.ts ***!
  \**********************************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_234494__) => {
                __nested_webpack_require_234494__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_234494__.d(__webpack_exports__, {
                  /* harmony export */ MessageDirection: () => /* binding */ MessageDirection,
                  /* harmony export */ StreamMessageController: () => /* binding */ StreamMessageController,
                  /* harmony export */ ToStreamerMessage: () => /* binding */ ToStreamerMessage
                  /* harmony export */
                })
                /* harmony import */ var _TwoWayMap__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_234494__(
                  /*! ./TwoWayMap */ './src/UeInstanceMessage/TwoWayMap.ts'
                )
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__ =
                  __nested_webpack_require_234494__(/*! ../Logger/Logger */ './src/Logger/Logger.ts')
                // Copyright Epic Games, Inc. All Rights Reserved.

                class ToStreamerMessage {}
                class StreamMessageController {
                  constructor() {
                    this.toStreamerHandlers = new Map()
                    this.fromStreamerHandlers = new Map()
                    this.toStreamerMessages = new _TwoWayMap__WEBPACK_IMPORTED_MODULE_0__.TwoWayMap()
                    this.fromStreamerMessages = new _TwoWayMap__WEBPACK_IMPORTED_MODULE_0__.TwoWayMap()
                  }
                  /**
                   * Populate the Default message protocol
                   */
                  populateDefaultProtocol() {
                    /*
                     * Control Messages. Range = 0..49.
                     */
                    this.toStreamerMessages.add('IFrameRequest', {
                      id: 0,
                      byteLength: 0,
                      structure: []
                    })
                    this.toStreamerMessages.add('RequestQualityControl', {
                      id: 1,
                      byteLength: 0,
                      structure: []
                    })
                    this.toStreamerMessages.add('FpsRequest', {
                      id: 2,
                      byteLength: 0,
                      structure: []
                    })
                    this.toStreamerMessages.add('AverageBitrateRequest', {
                      id: 3,
                      byteLength: 0,
                      structure: []
                    })
                    this.toStreamerMessages.add('StartStreaming', {
                      id: 4,
                      byteLength: 0,
                      structure: []
                    })
                    this.toStreamerMessages.add('StopStreaming', {
                      id: 5,
                      byteLength: 0,
                      structure: []
                    })
                    this.toStreamerMessages.add('LatencyTest', {
                      id: 6,
                      byteLength: 0,
                      structure: []
                    })
                    this.toStreamerMessages.add('RequestInitialSettings', {
                      id: 7,
                      byteLength: 0,
                      structure: []
                    })
                    this.toStreamerMessages.add('TestEcho', {
                      id: 8,
                      byteLength: 0,
                      structure: []
                    })
                    /*
                     * Input Messages. Range = 50..89.
                     */
                    // Generic Input Messages. Range = 50..59.
                    this.toStreamerMessages.add('UIInteraction', {
                      id: 50,
                      byteLength: 0,
                      structure: []
                    })
                    this.toStreamerMessages.add('Command', {
                      id: 51,
                      byteLength: 0,
                      structure: []
                    })
                    // Keyboard Input Message. Range = 60..69.
                    this.toStreamerMessages.add('KeyDown', {
                      id: 60,
                      byteLength: 2,
                      //            keyCode  isRepeat
                      structure: ['uint8', 'uint8']
                    })
                    this.toStreamerMessages.add('KeyUp', {
                      id: 61,
                      byteLength: 1,
                      //            keyCode
                      structure: ['uint8']
                    })
                    this.toStreamerMessages.add('KeyPress', {
                      id: 62,
                      byteLength: 2,
                      //            charcode
                      structure: ['uint16']
                    })
                    // Mouse Input Messages. Range = 70..79.
                    this.toStreamerMessages.add('MouseEnter', {
                      id: 70,
                      byteLength: 0,
                      structure: []
                    })
                    this.toStreamerMessages.add('MouseLeave', {
                      id: 71,
                      byteLength: 0,
                      structure: []
                    })
                    this.toStreamerMessages.add('MouseDown', {
                      id: 72,
                      byteLength: 5,
                      //              button     x         y
                      structure: ['uint8', 'uint16', 'uint16']
                    })
                    this.toStreamerMessages.add('MouseUp', {
                      id: 73,
                      byteLength: 5,
                      //              button     x         y
                      structure: ['uint8', 'uint16', 'uint16']
                    })
                    this.toStreamerMessages.add('MouseMove', {
                      id: 74,
                      byteLength: 8,
                      //              x           y      deltaX    deltaY
                      structure: ['uint16', 'uint16', 'int16', 'int16']
                    })
                    this.toStreamerMessages.add('MouseWheel', {
                      id: 75,
                      byteLength: 6,
                      //              delta       x        y
                      structure: ['int16', 'uint16', 'uint16']
                    })
                    this.toStreamerMessages.add('MouseDouble', {
                      id: 76,
                      byteLength: 5,
                      //              button     x         y
                      structure: ['uint8', 'uint16', 'uint16']
                    })
                    // Touch Input Messages. Range = 80..89.
                    this.toStreamerMessages.add('TouchStart', {
                      id: 80,
                      byteLength: 8,
                      //          numtouches(1)   x       y        idx     force     valid
                      structure: ['uint8', 'uint16', 'uint16', 'uint8', 'uint8', 'uint8']
                    })
                    this.toStreamerMessages.add('TouchEnd', {
                      id: 81,
                      byteLength: 8,
                      //          numtouches(1)   x       y        idx     force     valid
                      structure: ['uint8', 'uint16', 'uint16', 'uint8', 'uint8', 'uint8']
                    })
                    this.toStreamerMessages.add('TouchMove', {
                      id: 82,
                      byteLength: 8,
                      //          numtouches(1)   x       y       idx      force     valid
                      structure: ['uint8', 'uint16', 'uint16', 'uint8', 'uint8', 'uint8']
                    })
                    // Gamepad Input Messages. Range = 90..99
                    this.toStreamerMessages.add('GamepadConnected', {
                      id: 93,
                      byteLength: 0,
                      structure: []
                    })
                    this.toStreamerMessages.add('GamepadButtonPressed', {
                      id: 90,
                      byteLength: 3,
                      //            ctrlerId   button  isRepeat
                      structure: ['uint8', 'uint8', 'uint8']
                    })
                    this.toStreamerMessages.add('GamepadButtonReleased', {
                      id: 91,
                      byteLength: 3,
                      //            ctrlerId   button  isRepeat(0)
                      structure: ['uint8', 'uint8', 'uint8']
                    })
                    this.toStreamerMessages.add('GamepadAnalog', {
                      id: 92,
                      byteLength: 10,
                      //            ctrlerId   button  analogValue
                      structure: ['uint8', 'uint8', 'double']
                    })
                    this.toStreamerMessages.add('GamepadDisconnected', {
                      id: 94,
                      byteLength: 1,
                      //          ctrlerId
                      structure: ['uint8']
                    })
                    this.fromStreamerMessages.add('QualityControlOwnership', 0)
                    this.fromStreamerMessages.add('Response', 1)
                    this.fromStreamerMessages.add('Command', 2)
                    this.fromStreamerMessages.add('FreezeFrame', 3)
                    this.fromStreamerMessages.add('UnfreezeFrame', 4)
                    this.fromStreamerMessages.add('VideoEncoderAvgQP', 5)
                    this.fromStreamerMessages.add('LatencyTest', 6)
                    this.fromStreamerMessages.add('InitialSettings', 7)
                    this.fromStreamerMessages.add('FileExtension', 8)
                    this.fromStreamerMessages.add('FileMimeType', 9)
                    this.fromStreamerMessages.add('FileContents', 10)
                    this.fromStreamerMessages.add('TestEcho', 11)
                    this.fromStreamerMessages.add('InputControlOwnership', 12)
                    this.fromStreamerMessages.add('GamepadResponse', 13)
                    this.fromStreamerMessages.add('Protocol', 255)
                  }
                  /**
                   * Register a message handler
                   * @param messageDirection - the direction of the message; toStreamer or fromStreamer
                   * @param messageType - the type of the message
                   * @param messageHandler - the function or method to be executed when this handler is called
                   */
                  registerMessageHandler(messageDirection, messageType, messageHandler) {
                    switch (messageDirection) {
                      case MessageDirection.ToStreamer:
                        this.toStreamerHandlers.set(messageType, messageHandler)
                        break
                      case MessageDirection.FromStreamer:
                        this.fromStreamerHandlers.set(messageType, messageHandler)
                        break
                      default:
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                          `Unknown message direction ${messageDirection}`
                        )
                    }
                  }
                }
                /**
                 * The enum for message directions
                 */
                var MessageDirection
                ;(function (MessageDirection) {
                  MessageDirection[(MessageDirection['ToStreamer'] = 0)] = 'ToStreamer'
                  MessageDirection[(MessageDirection['FromStreamer'] = 1)] = 'FromStreamer'
                })(MessageDirection || (MessageDirection = {}))

                /***/
              },

            /***/ './src/UeInstanceMessage/ToStreamerMessagesController.ts':
              /*!***************************************************************!*\
  !*** ./src/UeInstanceMessage/ToStreamerMessagesController.ts ***!
  \***************************************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_244053__) => {
                __nested_webpack_require_244053__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_244053__.d(__webpack_exports__, {
                  /* harmony export */ ToStreamerMessagesController: () => /* binding */ ToStreamerMessagesController
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                class ToStreamerMessagesController {
                  /**
                   * @param sendMessageController - Stream message controller instance
                   */
                  constructor(sendMessageController) {
                    this.sendMessageController = sendMessageController
                  }
                  /**
                   * Send Request to Take Quality Control to the UE Instance
                   */
                  SendRequestQualityControl() {
                    this.sendMessageController.sendMessageToStreamer('RequestQualityControl')
                  }
                  /**
                   * Send Max FPS Request to the UE Instance
                   */
                  SendMaxFpsRequest() {
                    this.sendMessageController.sendMessageToStreamer('FpsRequest')
                  }
                  /**
                   * Send Average Bitrate Request to the UE Instance
                   */
                  SendAverageBitrateRequest() {
                    this.sendMessageController.sendMessageToStreamer('AverageBitrateRequest')
                  }
                  /**
                   * Send a Start Streaming Message to the UE Instance
                   */
                  SendStartStreaming() {
                    this.sendMessageController.sendMessageToStreamer('StartStreaming')
                  }
                  /**
                   * Send a Stop Streaming Message to the UE Instance
                   */
                  SendStopStreaming() {
                    this.sendMessageController.sendMessageToStreamer('StopStreaming')
                  }
                  /**
                   * Send a Request Initial Settings to the UE Instance
                   */
                  SendRequestInitialSettings() {
                    this.sendMessageController.sendMessageToStreamer('RequestInitialSettings')
                  }
                }

                /***/
              },

            /***/ './src/UeInstanceMessage/TwoWayMap.ts':
              /*!********************************************!*\
  !*** ./src/UeInstanceMessage/TwoWayMap.ts ***!
  \********************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_246037__) => {
                __nested_webpack_require_246037__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_246037__.d(__webpack_exports__, {
                  /* harmony export */ TwoWayMap: () => /* binding */ TwoWayMap
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                class TwoWayMap {
                  /**
                   * @param map - an optional map of parameters
                   */
                  constructor() {
                    this.map = new Map()
                    this.reverseMap = new Map()
                  }
                  /**
                   * Get the value from the map by key
                   * @param key - the key we are searching by
                   * @returns - the value associated with the key
                   */
                  getFromKey(key) {
                    return this.map.get(key)
                  }
                  /**
                   * Get the reverse key from the map by searching by value
                   * @param value - the key we are searching by
                   * @returns - they key associated with the value
                   */
                  getFromValue(value) {
                    return this.reverseMap.get(value)
                  }
                  /**
                   * Add a key and value to both the map and reverse map
                   * @param key - the indexing key
                   * @param value - the value associated with the key
                   */
                  add(key, value) {
                    this.map.set(key, value)
                    this.reverseMap.set(value, key)
                  }
                  /**
                   * Remove a key and value from both the map and reverse map
                   * @param key - the indexing key
                   * @param value - the value associated with the key
                   */
                  remove(key, value) {
                    this.map.delete(key)
                    this.reverseMap.delete(value)
                  }
                }

                /***/
              },

            /***/ './src/Util/CoordinateConverter.ts':
              /*!*****************************************!*\
  !*** ./src/Util/CoordinateConverter.ts ***!
  \*****************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_247810__) => {
                __nested_webpack_require_247810__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_247810__.d(__webpack_exports__, {
                  /* harmony export */ CoordinateConverter: () => /* binding */ CoordinateConverter,
                  /* harmony export */ NormalizedQuantizedSignedCoord: () =>
                    /* binding */ NormalizedQuantizedSignedCoord,
                  /* harmony export */ NormalizedQuantizedUnsignedCoord: () =>
                    /* binding */ NormalizedQuantizedUnsignedCoord,
                  /* harmony export */ UnquantizedDenormalizedUnsignedCoord: () =>
                    /* binding */ UnquantizedDenormalizedUnsignedCoord
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_247810__(/*! ../Logger/Logger */ './src/Logger/Logger.ts')
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Converts coordinates from element relative coordinates to values normalized within the value range of a short (and back again)
                 */
                class CoordinateConverter {
                  /**
                   * @param videoElementProvider - the div element that the video player will be injected into
                   */
                  constructor(videoElementProvider) {
                    this.videoElementProvider = videoElementProvider
                    this.normalizeAndQuantizeUnsignedFunc = () => {
                      throw new Error('Normalize and quantize unsigned, method not implemented.')
                    }
                    this.normalizeAndQuantizeSignedFunc = () => {
                      throw new Error('Normalize and unquantize signed, method not implemented.')
                    }
                    this.denormalizeAndUnquantizeUnsignedFunc = () => {
                      throw new Error('Denormalize and unquantize unsigned, method not implemented.')
                    }
                  }
                  /**
                   * The surface method for setterNormalizeAndQuantizeUnsigned
                   * @param x - x axis point
                   * @param y - y axis point
                   */
                  normalizeAndQuantizeUnsigned(x, y) {
                    return this.normalizeAndQuantizeUnsignedFunc(x, y)
                  }
                  /**
                   * The surface method for setterUnquantizeAndDenormalizeUnsigned
                   * @param x - x axis point
                   * @param y - y axis point
                   */
                  unquantizeAndDenormalizeUnsigned(x, y) {
                    return this.denormalizeAndUnquantizeUnsignedFunc(x, y)
                  }
                  /**
                   * The surface method for setterNormalizeAndQuantizeSigned
                   * @param x - x axis point
                   * @param y - y axis point
                   */
                  normalizeAndQuantizeSigned(x, y) {
                    return this.normalizeAndQuantizeSignedFunc(x, y)
                  }
                  /**
                   * set up the Normalize And Quantize methods based on the aspect ratio and the video player ratio
                   */
                  setupNormalizeAndQuantize() {
                    this.videoElementParent = this.videoElementProvider.getVideoParentElement()
                    this.videoElement = this.videoElementProvider.getVideoElement()
                    if (this.videoElementParent && this.videoElement) {
                      const playerAspectRatio =
                        this.videoElementParent.clientHeight / this.videoElementParent.clientWidth
                      const videoAspectRatio = this.videoElement.videoHeight / this.videoElement.videoWidth
                      if (playerAspectRatio > videoAspectRatio) {
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                          'Setup Normalize and Quantize for playerAspectRatio > videoAspectRatio',
                          6
                        )
                        this.ratio = playerAspectRatio / videoAspectRatio
                        this.normalizeAndQuantizeUnsignedFunc = (x, y) =>
                          this.normalizeAndQuantizeUnsignedPlayerBigger(x, y)
                        this.normalizeAndQuantizeSignedFunc = (x, y) =>
                          this.normalizeAndQuantizeSignedPlayerBigger(x, y)
                        this.denormalizeAndUnquantizeUnsignedFunc = (x, y) =>
                          this.denormalizeAndUnquantizeUnsignedPlayerBigger(x, y)
                      } else {
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                          'Setup Normalize and Quantize for playerAspectRatio <= videoAspectRatio',
                          6
                        )
                        this.ratio = videoAspectRatio / playerAspectRatio
                        this.normalizeAndQuantizeUnsignedFunc = (x, y) =>
                          this.normalizeAndQuantizeUnsignedPlayerSmaller(x, y)
                        this.normalizeAndQuantizeSignedFunc = (x, y) =>
                          this.normalizeAndQuantizeSignedPlayerSmaller(x, y)
                        this.denormalizeAndUnquantizeUnsignedFunc = (x, y) =>
                          this.denormalizeAndUnquantizeUnsignedPlayerSmaller(x, y)
                      }
                    }
                  }
                  /**
                   * normalizeAndQuantizeUnsigned for playerAspectRatio > videoAspectRatio
                   * @param x - x axis point
                   * @param y - y axis point
                   */
                  normalizeAndQuantizeUnsignedPlayerBigger(x, y) {
                    const normalizedX = x / this.videoElementParent.clientWidth
                    const normalizedY = this.ratio * (y / this.videoElementParent.clientHeight - 0.5) + 0.5
                    if (normalizedX < 0.0 || normalizedX > 1.0 || normalizedY < 0.0 || normalizedY > 1.0) {
                      return new NormalizedQuantizedUnsignedCoord(false, 65535, 65535)
                    } else {
                      return new NormalizedQuantizedUnsignedCoord(true, normalizedX * 65536, normalizedY * 65536)
                    }
                  }
                  /**
                   * unquantizeAndDenormalizeUnsigned for playerAspectRatio > videoAspectRatio
                   * @param x - x axis point
                   * @param y - y axis point
                   */
                  denormalizeAndUnquantizeUnsignedPlayerBigger(x, y) {
                    const normalizedX = x / 65536
                    const normalizedY = (y / 65536 - 0.5) / this.ratio + 0.5
                    return new UnquantizedDenormalizedUnsignedCoord(
                      normalizedX * this.videoElementParent.clientWidth,
                      normalizedY * this.videoElementParent.clientHeight
                    )
                  }
                  /**
                   * normalizeAndQuantizeSigned for playerAspectRatio > videoAspectRatio
                   * @param x - x axis point
                   * @param y - y axis point
                   */
                  normalizeAndQuantizeSignedPlayerBigger(x, y) {
                    const normalizedX = x / (0.5 * this.videoElementParent.clientWidth)
                    const normalizedY = (this.ratio * y) / (0.5 * this.videoElementParent.clientHeight)
                    return new NormalizedQuantizedSignedCoord(normalizedX * 32767, normalizedY * 32767)
                  }
                  /**
                   * normalizeAndQuantizeUnsigned for playerAspectRatio <= videoAspectRatio
                   * @param x - x axis point
                   * @param y - y axis point
                   */
                  normalizeAndQuantizeUnsignedPlayerSmaller(x, y) {
                    const normalizedX = this.ratio * (x / this.videoElementParent.clientWidth - 0.5) + 0.5
                    const normalizedY = y / this.videoElementParent.clientHeight
                    if (normalizedX < 0.0 || normalizedX > 1.0 || normalizedY < 0.0 || normalizedY > 1.0) {
                      return new NormalizedQuantizedUnsignedCoord(false, 65535, 65535)
                    } else {
                      return new NormalizedQuantizedUnsignedCoord(true, normalizedX * 65536, normalizedY * 65536)
                    }
                  }
                  /**
                   * unquantizeAndDenormalizeUnsigned for playerAspectRatio <= videoAspectRatio
                   * @param x - x axis point
                   * @param y - y axis point
                   */
                  denormalizeAndUnquantizeUnsignedPlayerSmaller(x, y) {
                    const normalizedX = (x / 65536 - 0.5) / this.ratio + 0.5
                    const normalizedY = y / 65536
                    return new UnquantizedDenormalizedUnsignedCoord(
                      normalizedX * this.videoElementParent.clientWidth,
                      normalizedY * this.videoElementParent.clientHeight
                    )
                  }
                  /**
                   * normalizeAndQuantizeSigned for playerAspectRatio <= videoAspectRatio
                   * @param x - x axis point
                   * @param y - y axis point
                   */
                  normalizeAndQuantizeSignedPlayerSmaller(x, y) {
                    const normalizedX = (this.ratio * x) / (0.5 * this.videoElementParent.clientWidth)
                    const normalizedY = y / (0.5 * this.videoElementParent.clientHeight)
                    return new NormalizedQuantizedSignedCoord(normalizedX * 32767, normalizedY * 32767)
                  }
                }
                /**
                 * A class for NormalizeAndQuantizeUnsigned objects
                 */
                class NormalizedQuantizedUnsignedCoord {
                  constructor(inRange, x, y) {
                    this.inRange = inRange
                    this.x = x
                    this.y = y
                  }
                }
                /**
                 * A class for UnquantizedAndDenormalizeUnsigned objects
                 */
                class UnquantizedDenormalizedUnsignedCoord {
                  constructor(x, y) {
                    this.x = x
                    this.y = y
                  }
                }
                /**
                 * A class for NormalizedQuantizedSignedCoord objects
                 */
                class NormalizedQuantizedSignedCoord {
                  constructor(x, y) {
                    this.x = x
                    this.y = y
                  }
                }

                /***/
              },

            /***/ './src/Util/EventEmitter.ts':
              /*!**********************************!*\
  !*** ./src/Util/EventEmitter.ts ***!
  \**********************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_256594__) => {
                __nested_webpack_require_256594__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_256594__.d(__webpack_exports__, {
                  /* harmony export */ AfkTimedOutEvent: () => /* binding */ AfkTimedOutEvent,
                  /* harmony export */ AfkWarningActivateEvent: () => /* binding */ AfkWarningActivateEvent,
                  /* harmony export */ AfkWarningDeactivateEvent: () => /* binding */ AfkWarningDeactivateEvent,
                  /* harmony export */ AfkWarningUpdateEvent: () => /* binding */ AfkWarningUpdateEvent,
                  /* harmony export */ DataChannelCloseEvent: () => /* binding */ DataChannelCloseEvent,
                  /* harmony export */ DataChannelErrorEvent: () => /* binding */ DataChannelErrorEvent,
                  /* harmony export */ DataChannelOpenEvent: () => /* binding */ DataChannelOpenEvent,
                  /* harmony export */ EventEmitter: () => /* binding */ EventEmitter,
                  /* harmony export */ HideFreezeFrameEvent: () => /* binding */ HideFreezeFrameEvent,
                  /* harmony export */ InitialSettingsEvent: () => /* binding */ InitialSettingsEvent,
                  /* harmony export */ LatencyTestResultEvent: () => /* binding */ LatencyTestResultEvent,
                  /* harmony export */ LoadFreezeFrameEvent: () => /* binding */ LoadFreezeFrameEvent,
                  /* harmony export */ PlayStreamErrorEvent: () => /* binding */ PlayStreamErrorEvent,
                  /* harmony export */ PlayStreamEvent: () => /* binding */ PlayStreamEvent,
                  /* harmony export */ PlayStreamRejectedEvent: () => /* binding */ PlayStreamRejectedEvent,
                  /* harmony export */ SettingsChangedEvent: () => /* binding */ SettingsChangedEvent,
                  /* harmony export */ StatsReceivedEvent: () => /* binding */ StatsReceivedEvent,
                  /* harmony export */ StreamLoadingEvent: () => /* binding */ StreamLoadingEvent,
                  /* harmony export */ StreamPreConnectEvent: () => /* binding */ StreamPreConnectEvent,
                  /* harmony export */ StreamPreDisconnectEvent: () => /* binding */ StreamPreDisconnectEvent,
                  /* harmony export */ StreamReconnectEvent: () => /* binding */ StreamReconnectEvent,
                  /* harmony export */ StreamerListMessageEvent: () => /* binding */ StreamerListMessageEvent,
                  /* harmony export */ VideoEncoderAvgQPEvent: () => /* binding */ VideoEncoderAvgQPEvent,
                  /* harmony export */ VideoInitializedEvent: () => /* binding */ VideoInitializedEvent,
                  /* harmony export */ WebRtcAutoConnectEvent: () => /* binding */ WebRtcAutoConnectEvent,
                  /* harmony export */ WebRtcConnectedEvent: () => /* binding */ WebRtcConnectedEvent,
                  /* harmony export */ WebRtcConnectingEvent: () => /* binding */ WebRtcConnectingEvent,
                  /* harmony export */ WebRtcDisconnectedEvent: () => /* binding */ WebRtcDisconnectedEvent,
                  /* harmony export */ WebRtcFailedEvent: () => /* binding */ WebRtcFailedEvent,
                  /* harmony export */ WebRtcSdpEvent: () => /* binding */ WebRtcSdpEvent,
                  /* harmony export */ XrFrameEvent: () => /* binding */ XrFrameEvent,
                  /* harmony export */ XrSessionEndedEvent: () => /* binding */ XrSessionEndedEvent,
                  /* harmony export */ XrSessionStartedEvent: () => /* binding */ XrSessionStartedEvent
                  /* harmony export */
                })
                /**
                 * An event that is emitted when AFK disconnect is about to happen.
                 * Can be cancelled by calling the callback function provided as part of the event.
                 */
                class AfkWarningActivateEvent extends Event {
                  constructor(data) {
                    super('afkWarningActivate')
                    this.data = data
                  }
                }
                /**
                 * An event that is emitted when the AFK disconnect countdown is updated.
                 */
                class AfkWarningUpdateEvent extends Event {
                  constructor(data) {
                    super('afkWarningUpdate')
                    this.data = data
                  }
                }
                /**
                 * An event that is emitted when AFK warning is deactivated.
                 */
                class AfkWarningDeactivateEvent extends Event {
                  constructor() {
                    super('afkWarningDeactivate')
                  }
                }
                /**
                 * An event that is emitted when AFK countdown reaches 0 and the user is disconnected.
                 */
                class AfkTimedOutEvent extends Event {
                  constructor() {
                    super('afkTimedOut')
                  }
                }
                /**
                 * An event that is emitted when we receive new video quality value.
                 */
                class VideoEncoderAvgQPEvent extends Event {
                  constructor(data) {
                    super('videoEncoderAvgQP')
                    this.data = data
                  }
                }
                /**
                 * An event that is emitted after a WebRtc connection has been negotiated.
                 */
                class WebRtcSdpEvent extends Event {
                  constructor() {
                    super('webRtcSdp')
                  }
                }
                /**
                 * An event that is emitted when auto connecting.
                 */
                class WebRtcAutoConnectEvent extends Event {
                  constructor() {
                    super('webRtcAutoConnect')
                  }
                }
                /**
                 * An event that is emitted when sending a WebRtc offer.
                 */
                class WebRtcConnectingEvent extends Event {
                  constructor() {
                    super('webRtcConnecting')
                  }
                }
                /**
                 * An event that is emitted when WebRtc connection has been established.
                 */
                class WebRtcConnectedEvent extends Event {
                  constructor() {
                    super('webRtcConnected')
                  }
                }
                /**
                 * An event that is emitted if WebRtc connection has failed.
                 */
                class WebRtcFailedEvent extends Event {
                  constructor() {
                    super('webRtcFailed')
                  }
                }
                /**
                 * An event that is emitted if WebRtc connection is disconnected.
                 */
                class WebRtcDisconnectedEvent extends Event {
                  constructor(data) {
                    super('webRtcDisconnected')
                    this.data = data
                  }
                }
                /**
                 * An event that is emitted when RTCDataChannel is opened.
                 */
                class DataChannelOpenEvent extends Event {
                  constructor(data) {
                    super('dataChannelOpen')
                    this.data = data
                  }
                }
                /**
                 * An event that is emitted when RTCDataChannel is closed.
                 */
                class DataChannelCloseEvent extends Event {
                  constructor(data) {
                    super('dataChannelClose')
                    this.data = data
                  }
                }
                /**
                 * An event that is emitted on RTCDataChannel errors.
                 */
                class DataChannelErrorEvent extends Event {
                  constructor(data) {
                    super('dataChannelError')
                    this.data = data
                  }
                }
                /**
                 * An event that is emitted when the video stream has been initialized.
                 */
                class VideoInitializedEvent extends Event {
                  constructor() {
                    super('videoInitialized')
                  }
                }
                /**
                 * An event that is emitted when video stream loading starts.
                 */
                class StreamLoadingEvent extends Event {
                  constructor() {
                    super('streamLoading')
                  }
                }
                /**
                 * An event that is emitted when video stream loading has finished.
                 */
                class StreamPreConnectEvent extends Event {
                  constructor() {
                    super('streamConnect')
                  }
                }
                /**
                 * An event that is emitted when video stream has stopped.
                 */
                class StreamPreDisconnectEvent extends Event {
                  constructor() {
                    super('streamDisconnect')
                  }
                }
                /**
                 * An event that is emitted when video stream is reconnecting.
                 */
                class StreamReconnectEvent extends Event {
                  constructor() {
                    super('streamReconnect')
                  }
                }
                /**
                 * An event that is emitted if there are errors loading the video stream.
                 */
                class PlayStreamErrorEvent extends Event {
                  constructor(data) {
                    super('playStreamError')
                    this.data = data
                  }
                }
                /**
                 * An event that is emitted before trying to start video playback.
                 */
                class PlayStreamEvent extends Event {
                  constructor() {
                    super('playStream')
                  }
                }
                /**
                 * An event that is emitted if the browser rejects video playback. Can happen for example if
                 * video auto-play without user interaction is refused by the browser.
                 */
                class PlayStreamRejectedEvent extends Event {
                  constructor(data) {
                    super('playStreamRejected')
                    this.data = data
                  }
                }
                /**
                 * An event that is emitted when receiving a full FreezeFrame image from UE.
                 */
                class LoadFreezeFrameEvent extends Event {
                  constructor(data) {
                    super('loadFreezeFrame')
                    this.data = data
                  }
                }
                /**
                 * An event that is emitted when receiving UnfreezeFrame message from UE and video playback is about to be resumed.
                 */
                class HideFreezeFrameEvent extends Event {
                  constructor() {
                    super('hideFreezeFrame')
                  }
                }
                /**
                 * An event that is emitted when receiving WebRTC statistics.
                 */
                class StatsReceivedEvent extends Event {
                  constructor(data) {
                    super('statsReceived')
                    this.data = data
                  }
                }
                /**
                 * An event that is emitted when streamer list changes.
                 */
                class StreamerListMessageEvent extends Event {
                  constructor(data) {
                    super('streamerListMessage')
                    this.data = data
                  }
                }
                /**
                 * An event that is emitted when receiving latency test results.
                 */
                class LatencyTestResultEvent extends Event {
                  constructor(data) {
                    super('latencyTestResult')
                    this.data = data
                  }
                }
                /**
                 * An event that is emitted when receiving initial settings from UE.
                 */
                class InitialSettingsEvent extends Event {
                  constructor(data) {
                    super('initialSettings')
                    this.data = data
                  }
                }
                /**
                 * An event that is emitted when PixelStreaming settings change.
                 */
                class SettingsChangedEvent extends Event {
                  constructor(data) {
                    super('settingsChanged')
                    this.data = data
                  }
                }
                /**
                 * Event emitted when an XR Session starts
                 */
                class XrSessionStartedEvent extends Event {
                  constructor() {
                    super('xrSessionStarted')
                  }
                }
                /**
                 * Event emitted when an XR Session ends
                 */
                class XrSessionEndedEvent extends Event {
                  constructor() {
                    super('xrSessionEnded')
                  }
                }
                /**
                 * Event emitted when an XR Frame is complete
                 */
                class XrFrameEvent extends Event {
                  constructor(data) {
                    super('xrFrame')
                    this.data = data
                  }
                }
                class EventEmitter extends EventTarget {
                  /**
                   * Dispatch a new event.
                   * @param e event
                   * @returns
                   */
                  dispatchEvent(e) {
                    return super.dispatchEvent(e)
                  }
                  /**
                   * Register an event handler.
                   * @param type event name
                   * @param listener event handler function
                   */
                  addEventListener(type, listener) {
                    super.addEventListener(type, listener)
                  }
                  /**
                   * Remove an event handler.
                   * @param type event name
                   * @param listener event handler function
                   */
                  removeEventListener(type, listener) {
                    super.removeEventListener(type, listener)
                  }
                }

                /***/
              },

            /***/ './src/Util/EventListenerTracker.ts':
              /*!******************************************!*\
  !*** ./src/Util/EventListenerTracker.ts ***!
  \******************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_267304__) => {
                __nested_webpack_require_267304__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_267304__.d(__webpack_exports__, {
                  /* harmony export */ EventListenerTracker: () => /* binding */ EventListenerTracker
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                class EventListenerTracker {
                  constructor() {
                    this.unregisterCallbacks = []
                  }
                  /**
                   * Add a new callback that is executed when unregisterAll is called.
                   * @param callback
                   */
                  addUnregisterCallback(callback) {
                    this.unregisterCallbacks.push(callback)
                  }
                  /**
                   * Execute all callbacks and clear the list.
                   */
                  unregisterAll() {
                    for (const callback of this.unregisterCallbacks) {
                      callback()
                    }
                    this.unregisterCallbacks = []
                  }
                }

                /***/
              },

            /***/ './src/Util/FileUtil.ts':
              /*!******************************!*\
  !*** ./src/Util/FileUtil.ts ***!
  \******************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_268361__) => {
                __nested_webpack_require_268361__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_268361__.d(__webpack_exports__, {
                  /* harmony export */ FileTemplate: () => /* binding */ FileTemplate,
                  /* harmony export */ FileUtil: () => /* binding */ FileUtil
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_268361__(/*! ../Logger/Logger */ './src/Logger/Logger.ts')
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Utility function for populate file information from byte buffers.
                 */
                class FileUtil {
                  /**
                   * Processes a files extension when received over data channel
                   * @param view - the file extension data
                   */
                  static setExtensionFromBytes(view, file) {
                    // Reset file if we got a file message and we are not "receiving" it yet
                    if (!file.receiving) {
                      file.mimetype = ''
                      file.extension = ''
                      file.receiving = true
                      file.valid = false
                      file.size = 0
                      file.data = []
                      file.timestampStart = new Date().getTime()
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        'Received first chunk of file',
                        6
                      )
                    }
                    const extensionAsString = new TextDecoder('utf-16').decode(view.slice(1))
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      extensionAsString,
                      6
                    )
                    file.extension = extensionAsString
                  }
                  /**
                   * Processes a files mime type when received over data channel
                   * @param view - the file mime type data
                   */
                  static setMimeTypeFromBytes(view, file) {
                    // Reset file if we got a file message and we are not "receiving" it yet
                    if (!file.receiving) {
                      file.mimetype = ''
                      file.extension = ''
                      file.receiving = true
                      file.valid = false
                      file.size = 0
                      file.data = []
                      file.timestampStart = new Date().getTime()
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        'Received first chunk of file',
                        6
                      )
                    }
                    const mimeAsString = new TextDecoder('utf-16').decode(view.slice(1))
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      mimeAsString,
                      6
                    )
                    file.mimetype = mimeAsString
                  }
                  /**
                   * Processes a files contents when received over data channel
                   * @param view - the file contents data
                   */
                  static setContentsFromBytes(view, file, responseController) {
                    // If we haven't received the initial setup instructions, return
                    if (!file.receiving) return
                    // Extract the total size of the file (across all chunks)
                    file.size = Math.ceil(
                      new DataView(view.slice(1, 5).buffer).getInt32(0, true) /
                        16379 /* The maximum number of payload bits per message*/
                    )
                    // Get the file part of the payload
                    const fileBytes = view.slice(1 + 4)
                    // Append to existing data that holds the file
                    file.data.push(fileBytes)
                    // Uncomment for debug
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      `Received file chunk: ${file.data.length}/${file.size}`,
                      6
                    )
                    if (file.data.length === file.size) {
                      file.receiving = false
                      file.valid = true
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        'Received complete file',
                        6
                      )
                      const transferDuration = new Date().getTime() - file.timestampStart
                      const transferBitrate = Math.round((file.size * 16 * 1024) / transferDuration)
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        `Average transfer bitrate: ${transferBitrate}kb/s over ${transferDuration / 1000} seconds`,
                        6
                      )
                      // File reconstruction
                      /**
                       * Example code to reconstruct the file
                       *
                       * This code reconstructs the received data into the original file based on the mime type and extension provided and then downloads the reconstructed file
                       */
                      const received = new Blob(file.data, {
                        type: file.mimetype
                      })
                      // const blobToDataURL = (blob, cb) => {
                      //   let reader = new FileReader()
                      //   reader.onload = function (evt) {
                      //     let base64 = evt.target.result
                      //     cb(base64)
                      //   }
                      //   reader.readAsDataURL(blob)
                      // }
                      // let base64Img = blobToDataURL(received, (base64Url) => {
                      //   console.log('base64Url', base64Url)
                      // })
                      // var imgFile = new window.File([received], Math.random(), {
                      //   type: received.type
                      // })
                      responseController.onResponseFileContents({
                        received
                      })
                      const a = document.createElement('a')
                      a.setAttribute('href', URL.createObjectURL(received))
                      a.setAttribute('download', `transfer.${file.extension}`)
                      document.body.append(a)
                      // if you are so inclined to make it auto-download, do something like: a.click();
                      a.remove()
                    } else if (file.data.length > file.size) {
                      file.receiving = false
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Error(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        `Received bigger file than advertised: ${file.data.length}/${file.size}`
                      )
                    }
                  }
                }
                /**
                 * A class that represents a template for a downloaded file
                 */
                class FileTemplate {
                  constructor() {
                    this.mimetype = ''
                    this.extension = ''
                    this.receiving = false
                    this.size = 0
                    this.data = []
                    this.valid = false
                  }
                }

                /***/
              },

            /***/ './src/Util/WebGLUtils.ts':
              /*!********************************!*\
  !*** ./src/Util/WebGLUtils.ts ***!
  \********************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_274177__) => {
                __nested_webpack_require_274177__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_274177__.d(__webpack_exports__, {
                  /* harmony export */ WebGLUtils: () => /* binding */ WebGLUtils
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                class WebGLUtils {
                  static vertexShader() {
                    return `
		attribute vec2 a_position;
		attribute vec2 a_texCoord;

		// input
		uniform vec2 u_resolution;
		uniform vec4 u_offset;

		//
		varying vec2 v_texCoord;

		void main() {
		   // convert the rectangle from pixels to 0.0 to 1.0
		   vec2 zeroToOne = a_position / u_resolution;

		   // convert from 0->1 to 0->2
		   vec2 zeroToTwo = zeroToOne * 2.0;

		   // convert from 0->2 to -1->+1 (clipspace)
		   vec2 clipSpace = zeroToTwo - 1.0;

		   gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
		   // pass the texCoord to the fragment shader
		   // The GPU will interpolate this value between points.
		   v_texCoord = (a_texCoord * u_offset.xy) + u_offset.zw;
		}
		`
                  }
                  static fragmentShader() {
                    return `
		precision mediump float;

		// our texture
		uniform sampler2D u_image;

		// the texCoords passed in from the vertex shader.
		varying vec2 v_texCoord;

		void main() {
		   gl_FragColor = texture2D(u_image, v_texCoord);
		}
		`
                  }
                }

                /***/
              },

            /***/ './src/Util/WebXRUtils.ts':
              /*!********************************!*\
  !*** ./src/Util/WebXRUtils.ts ***!
  \********************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_275755__) => {
                __nested_webpack_require_275755__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_275755__.d(__webpack_exports__, {
                  /* harmony export */ WebXRUtils: () => /* binding */ WebXRUtils
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                class WebXRUtils {
                  /**
                   * Deep copies a gamepad's values by first converting it to a JSON object and then back to a gamepad
                   *
                   * @param gamepad the original gamepad
                   * @returns a new gamepad object, populated with the original gamepads values
                   */
                  static deepCopyGamepad(gamepad) {
                    return JSON.parse(
                      JSON.stringify({
                        buttons: gamepad.buttons.map((b) =>
                          JSON.parse(
                            JSON.stringify({
                              pressed: b.pressed,
                              touched: b.touched
                            })
                          )
                        ),
                        axes: gamepad.axes
                      })
                    )
                  }
                }

                /***/
              },

            /***/ './src/VideoPlayer/StreamController.ts':
              /*!*********************************************!*\
  !*** ./src/VideoPlayer/StreamController.ts ***!
  \*********************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_276892__) => {
                __nested_webpack_require_276892__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_276892__.d(__webpack_exports__, {
                  /* harmony export */ StreamController: () => /* binding */ StreamController
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_276892__(/*! ../Logger/Logger */ './src/Logger/Logger.ts')
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Video Player Controller handles the creation of the video HTML element and all handlers
                 */
                class StreamController {
                  /**
                   * @param videoElementProvider Video Player instance
                   */
                  constructor(videoElementProvider) {
                    this.videoElementProvider = videoElementProvider
                    this.audioElement = document.createElement('Audio')
                  }
                  /**
                   * Handles when the Peer connection has a track event
                   * @param rtcTrackEvent - RTC Track Event
                   */
                  handleOnTrack(rtcTrackEvent) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      'handleOnTrack ' + JSON.stringify(rtcTrackEvent.streams),
                      6
                    )
                    const videoElement = this.videoElementProvider.getVideoElement()
                    if (rtcTrackEvent.track) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        'Got track - ' +
                          rtcTrackEvent.track.kind +
                          ' id=' +
                          rtcTrackEvent.track.id +
                          ' readyState=' +
                          rtcTrackEvent.track.readyState,
                        6
                      )
                    }
                    if (rtcTrackEvent.track.kind == 'audio') {
                      this.CreateAudioTrack(rtcTrackEvent.streams[0])
                      return
                    } else if (
                      rtcTrackEvent.track.kind == 'video' &&
                      videoElement.srcObject !== rtcTrackEvent.streams[0]
                    ) {
                      videoElement.srcObject = rtcTrackEvent.streams[0]
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        'Set video source from video track ontrack.'
                      )
                      return
                    }
                  }
                  /**
                   * Creates the audio device when receiving an RTCTrackEvent with the kind of "audio"
                   * @param audioMediaStream - Audio Media stream track
                   */
                  CreateAudioTrack(audioMediaStream) {
                    const videoElement = this.videoElementProvider.getVideoElement()
                    // do nothing the video has the same media stream as the audio track we have here (they are linked)
                    if (videoElement.srcObject == audioMediaStream) {
                      return
                    }
                    // video element has some other media stream that is not associated with this audio track
                    else if (videoElement.srcObject && videoElement.srcObject !== audioMediaStream) {
                      // create a new audio element
                      this.audioElement.srcObject = audioMediaStream
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        'Created new audio element to play separate audio stream.'
                      )
                    }
                  }
                }

                /***/
              },

            /***/ './src/VideoPlayer/VideoPlayer.ts':
              /*!****************************************!*\
  !*** ./src/VideoPlayer/VideoPlayer.ts ***!
  \****************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_280345__) => {
                __nested_webpack_require_280345__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_280345__.d(__webpack_exports__, {
                  /* harmony export */ VideoPlayer: () => /* binding */ VideoPlayer
                  /* harmony export */
                })
                /* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_280345__(/*! ../Config/Config */ './src/Config/Config.ts')
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__ =
                  __nested_webpack_require_280345__(/*! ../Logger/Logger */ './src/Logger/Logger.ts')
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * The video player html element
                 */
                class VideoPlayer {
                  /**
                   * @param videoElementParent the html div the the video player will be injected into
                   * @param config the applications configuration. We're interested in the startVideoMuted flag
                   */
                  constructor(videoElementParent, config) {
                    this.lastTimeResized = new Date().getTime()
                    this.videoElement = document.createElement('video')
                    this.config = config
                    this.videoElement.id = 'streamingVideo'
                    this.videoElement.disablePictureInPicture = true
                    this.videoElement.playsInline = true
                    this.videoElement.style.width = '100%'
                    this.videoElement.style.height = '100%'
                    this.videoElement.style.position = 'absolute'
                    this.videoElement.style.pointerEvents = 'all'
                    videoElementParent.appendChild(this.videoElement)
                    this.onResizePlayerCallback = () => {
                      console.log('Resolution changed, restyling player, did you forget to override this function?')
                    }
                    this.onMatchViewportResolutionCallback = () => {
                      console.log(
                        'Resolution changed and match viewport resolution is turned on, did you forget to override this function?'
                      )
                    }
                    // set play for video
                    this.videoElement.onclick = () => {
                      if (this.videoElement.paused) {
                        this.videoElement.play()
                      }
                    }
                    this.videoElement.onloadedmetadata = () => {
                      this.onVideoInitialized()
                    }
                    // set resize events to the windows if it is resized or its orientation is changed
                    window.addEventListener('resize', () => this.resizePlayerStyle(), true)
                    window.addEventListener('orientationchange', () => this.onOrientationChange())
                  }
                  /**
                   * Sets up the video element with any application config and plays the video element.
                   * @returns A promise for if playing the video was successful or not.
                   */
                  play() {
                    this.videoElement.muted = this.config.isFlagEnabled(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_0__.Flags.StartVideoMuted
                    )
                    this.videoElement.autoplay = this.config.isFlagEnabled(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_0__.Flags.AutoPlayVideo
                    )
                    return this.videoElement.play()
                  }
                  /**
                   * @returns True if the video element is paused.
                   */
                  isPaused() {
                    return this.videoElement.paused
                  }
                  /**
                   * @returns - whether the video element is playing.
                   */
                  isVideoReady() {
                    return this.videoElement.readyState !== undefined && this.videoElement.readyState > 0
                  }
                  /**
                   * @returns True if the video element has a valid video source (srcObject).
                   */
                  hasVideoSource() {
                    return this.videoElement.srcObject !== undefined && this.videoElement.srcObject !== null
                  }
                  /**
                   * Get the current context of the html video element
                   * @returns - the current context of the video element
                   */
                  getVideoElement() {
                    return this.videoElement
                  }
                  /**
                   * Get the current context of the html video elements parent
                   * @returns - the current context of the video elements parent
                   */
                  getVideoParentElement() {
                    return this.videoElement.parentElement
                  }
                  /**
                   * Set the Video Elements src object tracks to enable
                   * @param enabled - Enable Tracks on the Src Object
                   */
                  setVideoEnabled(enabled) {
                    // this is a temporary hack until type scripts video element is updated to reflect the need for tracks on a html video element
                    const videoElement = this.videoElement
                    videoElement.srcObject.getTracks().forEach((track) => (track.enabled = enabled))
                  }
                  /**
                   * An override for when the video has been initialized with a srcObject
                   */
                  onVideoInitialized() {
                    // Default Functionality: Do Nothing
                  }
                  /**
                   * On the orientation change of a window clear the timeout
                   */
                  onOrientationChange() {
                    clearTimeout(this.orientationChangeTimeout)
                    this.orientationChangeTimeout = window.setTimeout(() => {
                      this.resizePlayerStyle()
                    }, 500)
                  }
                  /**
                   * Resizes the player style based on the window height and width
                   * @returns - nil if requirements are satisfied
                   */
                  resizePlayerStyle() {
                    const videoElementParent = this.getVideoParentElement()
                    if (!videoElementParent) {
                      return
                    }
                    this.updateVideoStreamSize()
                    if (videoElementParent.classList.contains('fixed-size')) {
                      this.onResizePlayerCallback()
                      return
                    }
                    // controls for resizing the player
                    this.resizePlayerStyleToFillParentElement()
                    this.onResizePlayerCallback()
                  }
                  /**
                   * Resizes the player element to fill the parent element
                   */
                  resizePlayerStyleToFillParentElement() {
                    const videoElementParent = this.getVideoParentElement()
                    //Video is not initialized yet so set videoElementParent to size of parent element
                    const styleWidth = '100%'
                    const styleHeight = '100%'
                    const styleTop = 0
                    const styleLeft = 0
                    videoElementParent.setAttribute(
                      'style',
                      'top: ' +
                        styleTop +
                        'px; left: ' +
                        styleLeft +
                        'px; width: ' +
                        styleWidth +
                        '; height: ' +
                        styleHeight +
                        '; cursor: default;'
                    )
                  }
                  updateVideoStreamSize() {
                    if (
                      !this.config.isFlagEnabled(
                        _Config_Config__WEBPACK_IMPORTED_MODULE_0__.Flags.MatchViewportResolution
                      )
                    ) {
                      return
                    }
                    const now = new Date().getTime()
                    if (now - this.lastTimeResized > 300) {
                      const videoElementParent = this.getVideoParentElement()
                      if (!videoElementParent) {
                        return
                      }
                      this.onMatchViewportResolutionCallback(
                        videoElementParent.clientWidth,
                        videoElementParent.clientHeight
                      )
                      this.lastTimeResized = new Date().getTime()
                    } else {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                        'Resizing too often - skipping',
                        6
                      )
                      clearTimeout(this.resizeTimeoutHandle)
                      this.resizeTimeoutHandle = window.setTimeout(() => this.updateVideoStreamSize(), 100)
                    }
                  }
                }

                /***/
              },

            /***/ './src/WebRtcPlayer/WebRtcPlayerController.ts':
              /*!****************************************************!*\
  !*** ./src/WebRtcPlayer/WebRtcPlayerController.ts ***!
  \****************************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_287850__) => {
                __nested_webpack_require_287850__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_287850__.d(__webpack_exports__, {
                  /* harmony export */ WebRtcPlayerController: () => /* binding */ WebRtcPlayerController
                  /* harmony export */
                })
                /* harmony import */ var _WebSockets_WebSocketController__WEBPACK_IMPORTED_MODULE_10__ =
                  __nested_webpack_require_287850__(
                    /*! ../WebSockets/WebSocketController */ './src/WebSockets/WebSocketController.ts'
                  )
                /* harmony import */ var _VideoPlayer_StreamController__WEBPACK_IMPORTED_MODULE_5__ =
                  __nested_webpack_require_287850__(
                    /*! ../VideoPlayer/StreamController */ './src/VideoPlayer/StreamController.ts'
                  )
                /* harmony import */ var _FreezeFrame_FreezeFrameController__WEBPACK_IMPORTED_MODULE_3__ =
                  __nested_webpack_require_287850__(
                    /*! ../FreezeFrame/FreezeFrameController */ './src/FreezeFrame/FreezeFrameController.ts'
                  )
                /* harmony import */ var _AFK_AFKController__WEBPACK_IMPORTED_MODULE_2__ =
                  __nested_webpack_require_287850__(/*! ../AFK/AFKController */ './src/AFK/AFKController.ts')
                /* harmony import */ var _DataChannel_DataChannelController__WEBPACK_IMPORTED_MODULE_7__ =
                  __nested_webpack_require_287850__(
                    /*! ../DataChannel/DataChannelController */ './src/DataChannel/DataChannelController.ts'
                  )
                /* harmony import */ var _PeerConnectionController_PeerConnectionController__WEBPACK_IMPORTED_MODULE_18__ =
                  __nested_webpack_require_287850__(
                    /*! ../PeerConnectionController/PeerConnectionController */ './src/PeerConnectionController/PeerConnectionController.ts'
                  )
                /* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_11__ =
                  __nested_webpack_require_287850__(/*! ../Config/Config */ './src/Config/Config.ts')
                /* harmony import */ var _DataChannel_InitialSettings__WEBPACK_IMPORTED_MODULE_20__ =
                  __nested_webpack_require_287850__(
                    /*! ../DataChannel/InitialSettings */ './src/DataChannel/InitialSettings.ts'
                  )
                /* harmony import */ var _DataChannel_LatencyTestResults__WEBPACK_IMPORTED_MODULE_19__ =
                  __nested_webpack_require_287850__(
                    /*! ../DataChannel/LatencyTestResults */ './src/DataChannel/LatencyTestResults.ts'
                  )
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__ =
                  __nested_webpack_require_287850__(/*! ../Logger/Logger */ './src/Logger/Logger.ts')
                /* harmony import */ var _Util_FileUtil__WEBPACK_IMPORTED_MODULE_1__ =
                  __nested_webpack_require_287850__(/*! ../Util/FileUtil */ './src/Util/FileUtil.ts')
                /* harmony import */ var _Inputs_InputClassesFactory__WEBPACK_IMPORTED_MODULE_15__ =
                  __nested_webpack_require_287850__(
                    /*! ../Inputs/InputClassesFactory */ './src/Inputs/InputClassesFactory.ts'
                  )
                /* harmony import */ var _VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_4__ =
                  __nested_webpack_require_287850__(
                    /*! ../VideoPlayer/VideoPlayer */ './src/VideoPlayer/VideoPlayer.ts'
                  )
                /* harmony import */ var _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__ =
                  __nested_webpack_require_287850__(
                    /*! ../UeInstanceMessage/StreamMessageController */ './src/UeInstanceMessage/StreamMessageController.ts'
                  )
                /* harmony import */ var _UeInstanceMessage_ResponseController__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_287850__(
                    /*! ../UeInstanceMessage/ResponseController */ './src/UeInstanceMessage/ResponseController.ts'
                  )
                /* harmony import */ var _UeInstanceMessage_SendDescriptorController__WEBPACK_IMPORTED_MODULE_12__ =
                  __nested_webpack_require_287850__(
                    /*! ../UeInstanceMessage/SendDescriptorController */ './src/UeInstanceMessage/SendDescriptorController.ts'
                  )
                /* harmony import */ var _UeInstanceMessage_SendMessageController__WEBPACK_IMPORTED_MODULE_13__ =
                  __nested_webpack_require_287850__(
                    /*! ../UeInstanceMessage/SendMessageController */ './src/UeInstanceMessage/SendMessageController.ts'
                  )
                /* harmony import */ var _UeInstanceMessage_ToStreamerMessagesController__WEBPACK_IMPORTED_MODULE_14__ =
                  __nested_webpack_require_287850__(
                    /*! ../UeInstanceMessage/ToStreamerMessagesController */ './src/UeInstanceMessage/ToStreamerMessagesController.ts'
                  )
                /* harmony import */ var _DataChannel_DataChannelSender__WEBPACK_IMPORTED_MODULE_8__ =
                  __nested_webpack_require_287850__(
                    /*! ../DataChannel/DataChannelSender */ './src/DataChannel/DataChannelSender.ts'
                  )
                /* harmony import */ var _Util_CoordinateConverter__WEBPACK_IMPORTED_MODULE_6__ =
                  __nested_webpack_require_287850__(
                    /*! ../Util/CoordinateConverter */ './src/Util/CoordinateConverter.ts'
                  )
                /* harmony import */ var _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_17__ =
                  __nested_webpack_require_287850__(/*! ../Util/EventEmitter */ './src/Util/EventEmitter.ts')
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Entry point for the WebRTC Player
                 */
                class WebRtcPlayerController {
                  /**
                   *
                   * @param config - the frontend config object
                   * @param pixelStreaming - the PixelStreaming object
                   */
                  constructor(config, pixelStreaming) {
                    this.shouldShowPlayOverlay = true
                    this.config = config
                    this.pixelStreaming = pixelStreaming
                    this.responseController =
                      new _UeInstanceMessage_ResponseController__WEBPACK_IMPORTED_MODULE_0__.ResponseController()
                    this.file = new _Util_FileUtil__WEBPACK_IMPORTED_MODULE_1__.FileTemplate()
                    this.sdpConstraints = {
                      offerToReceiveAudio: true,
                      offerToReceiveVideo: true
                    }
                    // set up the afk logic class and connect up its method for closing the signaling server
                    this.afkController = new _AFK_AFKController__WEBPACK_IMPORTED_MODULE_2__.AFKController(
                      this.config,
                      this.pixelStreaming,
                      this.onAfkTriggered.bind(this)
                    )
                    this.afkController.onAFKTimedOutCallback = () => {
                      this.setDisconnectMessageOverride('You have been disconnected due to inactivity')
                      this.closeSignalingServer()
                    }
                    this.freezeFrameController =
                      new _FreezeFrame_FreezeFrameController__WEBPACK_IMPORTED_MODULE_3__.FreezeFrameController(
                        this.pixelStreaming.videoElementParent
                      )
                    this.videoPlayer = new _VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_4__.VideoPlayer(
                      this.pixelStreaming.videoElementParent,
                      this.config
                    )
                    this.videoPlayer.onVideoInitialized = () => this.handleVideoInitialized()
                    // When in match viewport resolution mode, when the browser viewport is resized we send a resize command back to UE.
                    this.videoPlayer.onMatchViewportResolutionCallback = (width, height) => {
                      const descriptor = {
                        'Resolution.Width': width,
                        'Resolution.Height': height
                      }
                      this.sendDescriptorController.emitCommand(descriptor)
                    }
                    // Every time video player is resized in browser we need to reinitialize the mouse coordinate conversion and freeze frame sizing logic.
                    this.videoPlayer.onResizePlayerCallback = () => {
                      this.setUpMouseAndFreezeFrame()
                    }
                    this.streamController =
                      new _VideoPlayer_StreamController__WEBPACK_IMPORTED_MODULE_5__.StreamController(this.videoPlayer)
                    this.coordinateConverter =
                      new _Util_CoordinateConverter__WEBPACK_IMPORTED_MODULE_6__.CoordinateConverter(this.videoPlayer)
                    this.sendrecvDataChannelController =
                      new _DataChannel_DataChannelController__WEBPACK_IMPORTED_MODULE_7__.DataChannelController()
                    this.recvDataChannelController =
                      new _DataChannel_DataChannelController__WEBPACK_IMPORTED_MODULE_7__.DataChannelController()
                    this.registerDataChannelEventEmitters(this.sendrecvDataChannelController)
                    this.registerDataChannelEventEmitters(this.recvDataChannelController)
                    this.dataChannelSender =
                      new _DataChannel_DataChannelSender__WEBPACK_IMPORTED_MODULE_8__.DataChannelSender(
                        this.sendrecvDataChannelController
                      )
                    this.dataChannelSender.resetAfkWarningTimerOnDataSend = () =>
                      this.afkController.resetAfkWarningTimer()
                    this.streamMessageController =
                      new _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.StreamMessageController()
                    // set up websocket methods
                    this.webSocketController =
                      new _WebSockets_WebSocketController__WEBPACK_IMPORTED_MODULE_10__.WebSocketController()
                    this.webSocketController.onConfig = (messageConfig) => this.handleOnConfigMessage(messageConfig)
                    this.webSocketController.onStreamerList = (messageList) =>
                      this.handleStreamerListMessage(messageList)
                    this.webSocketController.onWebSocketOncloseOverlayMessage = (event) => {
                      this.pixelStreaming._onDisconnect(
                        `Websocket disconnect (${event.code}) ${event.reason != '' ? '- ' + event.reason : ''}`
                      )
                      this.setVideoEncoderAvgQP(0)
                    }
                    this.webSocketController.onOpen.addEventListener('open', () => {
                      const BrowserSendsOffer = this.config.isFlagEnabled(
                        _Config_Config__WEBPACK_IMPORTED_MODULE_11__.Flags.BrowserSendOffer
                      )
                      if (!BrowserSendsOffer) {
                        this.webSocketController.requestStreamerList()
                      }
                    })
                    this.webSocketController.onClose.addEventListener('close', () => {
                      this.afkController.stopAfkWarningTimer()
                      // stop sending stats on interval if we have closed our connection
                      if (this.statsTimerHandle && this.statsTimerHandle !== undefined) {
                        window.clearInterval(this.statsTimerHandle)
                      }
                      // unregister all input device event handlers on disconnect
                      this.setTouchInputEnabled(false)
                      this.setMouseInputEnabled(false)
                      this.setKeyboardInputEnabled(false)
                      this.setGamePadInputEnabled(false)
                      if (
                        this.shouldReconnect &&
                        this.config.getNumericSettingValue(
                          _Config_Config__WEBPACK_IMPORTED_MODULE_11__.NumericParameters.MaxReconnectAttempts
                        ) > 0
                      ) {
                        this.isReconnecting = true
                        this.reconnectAttempt++
                        this.restartStreamAutomatically()
                      }
                    })
                    // set up the final webRtc player controller methods from within our application so a connection can be activated
                    this.sendDescriptorController =
                      new _UeInstanceMessage_SendDescriptorController__WEBPACK_IMPORTED_MODULE_12__.SendDescriptorController(
                        this.dataChannelSender,
                        this.streamMessageController
                      )
                    this.sendMessageController =
                      new _UeInstanceMessage_SendMessageController__WEBPACK_IMPORTED_MODULE_13__.SendMessageController(
                        this.dataChannelSender,
                        this.streamMessageController
                      )
                    this.toStreamerMessagesController =
                      new _UeInstanceMessage_ToStreamerMessagesController__WEBPACK_IMPORTED_MODULE_14__.ToStreamerMessagesController(
                        this.sendMessageController
                      )
                    this.registerMessageHandlers()
                    this.streamMessageController.populateDefaultProtocol()
                    this.inputClassesFactory =
                      new _Inputs_InputClassesFactory__WEBPACK_IMPORTED_MODULE_15__.InputClassesFactory(
                        this.streamMessageController,
                        this.videoPlayer,
                        this.coordinateConverter
                      )
                    this.isUsingSFU = false
                    this.isQualityController = false
                    this.preferredCodec = ''
                    this.shouldReconnect = true
                    this.isReconnecting = false
                    this.reconnectAttempt = 0
                    this.config._addOnOptionSettingChangedListener(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_11__.OptionParameters.StreamerId,
                      (streamerid) => {
                        if (streamerid === '') {
                          return
                        }
                        // close the current peer connection and create a new one
                        this.peerConnectionController.peerConnection.close()
                        this.peerConnectionController.createPeerConnection(this.peerConfig, this.preferredCodec)
                        this.subscribedStream = streamerid
                        this.webSocketController.sendSubscribe(streamerid)
                      }
                    )
                    this.setVideoEncoderAvgQP(-1)
                    this.signallingUrlBuilder = () => {
                      let signallingServerUrl = this.config.getTextSettingValue(
                        _Config_Config__WEBPACK_IMPORTED_MODULE_11__.TextParameters.SignallingServerUrl
                      )
                      // If we are connecting to the SFU add a special url parameter to the url
                      if (
                        this.config.isFlagEnabled(_Config_Config__WEBPACK_IMPORTED_MODULE_11__.Flags.BrowserSendOffer)
                      ) {
                        signallingServerUrl +=
                          '?' + _Config_Config__WEBPACK_IMPORTED_MODULE_11__.Flags.BrowserSendOffer + '=true'
                      }
                      // This code is no longer needed, but is a good example for how subsequent config flags can be appended
                      // if (this.config.isFlagEnabled(Flags.BrowserSendOffer)) {
                      //     signallingServerUrl += (signallingServerUrl.includes('?') ? '&' : '?') + Flags.BrowserSendOffer + '=true';
                      // }
                      return signallingServerUrl
                    }
                  }
                  /**
                   * Make a request to UnquantizedAndDenormalizeUnsigned coordinates
                   * @param x x axis coordinate
                   * @param y y axis coordinate
                   */
                  requestUnquantizedAndDenormalizeUnsigned(x, y) {
                    return this.coordinateConverter.unquantizeAndDenormalizeUnsigned(x, y)
                  }
                  /**
                   * Handles when a message is received
                   * @param event - Message Event
                   */
                  handleOnMessage(event) {
                    const message = new Uint8Array(event.data)
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      'Message incoming:' + message,
                      6
                    )
                    //try {
                    const messageType = this.streamMessageController.fromStreamerMessages.getFromValue(message[0])
                    this.streamMessageController.fromStreamerHandlers.get(messageType)(event.data)
                    //} catch (e) {
                    //Logger.Error(Logger.GetStackTrace(), `Custom data channel message with message type that is unknown to the Pixel Streaming protocol. Does your PixelStreamingProtocol need updating? The message type was: ${message[0]}`);
                    //}
                  }
                  /**
                   * Register message all handlers
                   */
                  registerMessageHandlers() {
                    // From Streamer
                    // Message events from the streamer have a data type of ArrayBuffer as we force this type in the DatachannelController
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .FromStreamer,
                      'QualityControlOwnership',
                      (data) => this.onQualityControlOwnership(data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .FromStreamer,
                      'Response',
                      (data) => this.responseController.onResponse(data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .FromStreamer,
                      'Command',
                      (data) => {
                        this.onCommand(data)
                      }
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .FromStreamer,
                      'FreezeFrame',
                      (data) => this.onFreezeFrameMessage(data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .FromStreamer,
                      'UnfreezeFrame',
                      () => this.invalidateFreezeFrameAndEnableVideo()
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .FromStreamer,
                      'VideoEncoderAvgQP',
                      (data) => this.handleVideoEncoderAvgQP(data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .FromStreamer,
                      'LatencyTest',
                      (data) => this.handleLatencyTestResult(data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .FromStreamer,
                      'InitialSettings',
                      (data) => this.handleInitialSettings(data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .FromStreamer,
                      'FileExtension',
                      (data) => this.onFileExtension(data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .FromStreamer,
                      'FileMimeType',
                      (data) => this.onFileMimeType(data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .FromStreamer,
                      'FileContents',
                      (data) => this.onFileContents(data, this.responseController)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .FromStreamer,
                      'TestEcho',
                      () => {
                        /* Do nothing */
                      }
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .FromStreamer,
                      'InputControlOwnership',
                      (data) => this.onInputControlOwnership(data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .FromStreamer,
                      'GamepadResponse',
                      (data) => this.onGamepadResponse(data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .FromStreamer,
                      'Protocol',
                      (data) => this.onProtocolMessage(data)
                    )
                    // To Streamer
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'IFrameRequest',
                      () => this.sendMessageController.sendMessageToStreamer('IFrameRequest')
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'RequestQualityControl',
                      () => this.sendMessageController.sendMessageToStreamer('RequestQualityControl')
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'FpsRequest',
                      () => this.sendMessageController.sendMessageToStreamer('FpsRequest')
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'AverageBitrateRequest',
                      () => this.sendMessageController.sendMessageToStreamer('AverageBitrateRequest')
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'StartStreaming',
                      () => this.sendMessageController.sendMessageToStreamer('StartStreaming')
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'StopStreaming',
                      () => this.sendMessageController.sendMessageToStreamer('StopStreaming')
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'LatencyTest',
                      () => this.sendMessageController.sendMessageToStreamer('LatencyTest')
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'RequestInitialSettings',
                      () => this.sendMessageController.sendMessageToStreamer('RequestInitialSettings')
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'TestEcho',
                      () => {
                        /* Do nothing */
                      }
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'UIInteraction',
                      (data) => this.sendDescriptorController.emitUIInteraction(data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'Command',
                      (data) => this.sendDescriptorController.emitCommand(data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'KeyDown',
                      (data) => this.sendMessageController.sendMessageToStreamer('KeyDown', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'KeyUp',
                      (data) => this.sendMessageController.sendMessageToStreamer('KeyUp', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'KeyPress',
                      (data) => this.sendMessageController.sendMessageToStreamer('KeyPress', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'MouseEnter',
                      (data) => this.sendMessageController.sendMessageToStreamer('MouseEnter', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'MouseLeave',
                      (data) => this.sendMessageController.sendMessageToStreamer('MouseLeave', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'MouseDown',
                      (data) => this.sendMessageController.sendMessageToStreamer('MouseDown', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'MouseUp',
                      (data) => this.sendMessageController.sendMessageToStreamer('MouseUp', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'MouseMove',
                      (data) => this.sendMessageController.sendMessageToStreamer('MouseMove', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'MouseWheel',
                      (data) => this.sendMessageController.sendMessageToStreamer('MouseWheel', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'MouseDouble',
                      (data) => this.sendMessageController.sendMessageToStreamer('MouseDouble', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'TouchStart',
                      (data) => this.sendMessageController.sendMessageToStreamer('TouchStart', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'TouchEnd',
                      (data) => this.sendMessageController.sendMessageToStreamer('TouchEnd', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'TouchMove',
                      (data) => this.sendMessageController.sendMessageToStreamer('TouchMove', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'GamepadConnected',
                      () => this.sendMessageController.sendMessageToStreamer('GamepadConnected')
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'GamepadButtonPressed',
                      (data) => this.sendMessageController.sendMessageToStreamer('GamepadButtonPressed', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'GamepadButtonReleased',
                      (data) => this.sendMessageController.sendMessageToStreamer('GamepadButtonReleased', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'GamepadAnalog',
                      (data) => this.sendMessageController.sendMessageToStreamer('GamepadAnalog', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'GamepadDisconnected',
                      (data) => this.sendMessageController.sendMessageToStreamer('GamepadDisconnected', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'XRHMDTransform',
                      (data) => this.sendMessageController.sendMessageToStreamer('XRHMDTransform', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'XRControllerTransform',
                      (data) => this.sendMessageController.sendMessageToStreamer('XRControllerTransform', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'XRSystem',
                      (data) => this.sendMessageController.sendMessageToStreamer('XRSystem', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'XRButtonTouched',
                      (data) => this.sendMessageController.sendMessageToStreamer('XRButtonTouched', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'XRButtonPressed',
                      (data) => this.sendMessageController.sendMessageToStreamer('XRButtonPressed', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'XRButtonReleased',
                      (data) => this.sendMessageController.sendMessageToStreamer('XRButtonReleased', data)
                    )
                    this.streamMessageController.registerMessageHandler(
                      _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                        .ToStreamer,
                      'XRAnalog',
                      (data) => this.sendMessageController.sendMessageToStreamer('XRAnalog', data)
                    )
                  }
                  /**
                   * Activate the logic associated with a command from UE
                   * @param message
                   */
                  onCommand(message) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      'DataChannelReceiveMessageType.Command',
                      6
                    )
                    const commandAsString = new TextDecoder('utf-16').decode(message.slice(1))
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      'Data Channel Command: ' + commandAsString,
                      6
                    )
                    const command = JSON.parse(commandAsString)
                    if (command.command === 'onScreenKeyboard') {
                      this.pixelStreaming._activateOnScreenKeyboard(command)
                    }
                  }
                  /**
                   * Handles a protocol message received from the streamer
                   * @param message the message data from the streamer
                   */
                  onProtocolMessage(message) {
                    try {
                      const protocolString = new TextDecoder('utf-16').decode(message.slice(1))
                      const protocolJSON = JSON.parse(protocolString)
                      if (!Object.prototype.hasOwnProperty.call(protocolJSON, 'Direction')) {
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Error(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                          'Malformed protocol received. Ensure the protocol message contains a direction'
                        )
                      }
                      const direction = protocolJSON.Direction
                      delete protocolJSON.Direction
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                        `Received new ${
                          direction ==
                          _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                            .FromStreamer
                            ? 'FromStreamer'
                            : 'ToStreamer'
                        } protocol. Updating existing protocol...`
                      )
                      Object.keys(protocolJSON).forEach((messageType) => {
                        const message = protocolJSON[messageType]
                        switch (direction) {
                          case _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                            .ToStreamer:
                            // Check that the message contains all the relevant params
                            if (
                              !Object.prototype.hasOwnProperty.call(message, 'id') ||
                              !Object.prototype.hasOwnProperty.call(message, 'byteLength')
                            ) {
                              _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Error(
                                _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                                `ToStreamer->${messageType} protocol definition was malformed as it didn't contain at least an id and a byteLength\n
                                           Definition was: ${JSON.stringify(message, null, 2)}`
                              )
                              // return in a forEach is equivalent to a continue in a normal for loop
                              return
                            }
                            if (message.byteLength > 0 && !Object.prototype.hasOwnProperty.call(message, 'structure')) {
                              // If we specify a bytelength, will must have a corresponding structure
                              _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Error(
                                _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                                `ToStreamer->${messageType} protocol definition was malformed as it specified a byteLength but no accompanying structure`
                              )
                              // return in a forEach is equivalent to a continue in a normal for loop
                              return
                            }
                            if (this.streamMessageController.toStreamerHandlers.get(messageType)) {
                              // If we've registered a handler for this message type we can add it to our supported messages. ie registerMessageHandler(...)
                              this.streamMessageController.toStreamerMessages.add(messageType, message)
                            } else {
                              _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Error(
                                _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                                `There was no registered handler for "${messageType}" - try adding one using registerMessageHandler(MessageDirection.ToStreamer, "${messageType}", myHandler)`
                              )
                            }
                            break
                          case _UeInstanceMessage_StreamMessageController__WEBPACK_IMPORTED_MODULE_9__.MessageDirection
                            .FromStreamer:
                            // Check that the message contains all the relevant params
                            if (!Object.prototype.hasOwnProperty.call(message, 'id')) {
                              _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Error(
                                _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                                `FromStreamer->${messageType} protocol definition was malformed as it didn't contain at least an id\n
                            Definition was: ${JSON.stringify(message, null, 2)}`
                              )
                              // return in a forEach is equivalent to a continue in a normal for loop
                              return
                            }
                            if (this.streamMessageController.fromStreamerHandlers.get(messageType)) {
                              // If we've registered a handler for this message type. ie registerMessageHandler(...)
                              this.streamMessageController.fromStreamerMessages.add(messageType, message.id)
                            } else {
                              _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Error(
                                _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                                `There was no registered handler for "${message}" - try adding one using registerMessageHandler(MessageDirection.FromStreamer, "${messageType}", myHandler)`
                              )
                            }
                            break
                          default:
                            _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Error(
                              _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                              `Unknown direction: ${direction}`
                            )
                        }
                      })
                      // Once the protocol has been received, we can send our control messages
                      this.toStreamerMessagesController.SendRequestInitialSettings()
                      this.toStreamerMessagesController.SendRequestQualityControl()
                    } catch (e) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                        e
                      )
                    }
                  }
                  /**
                   * Handles an input control message when it is received from the streamer
                   * @param message The input control message
                   */
                  onInputControlOwnership(message) {
                    const view = new Uint8Array(message)
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      'DataChannelReceiveMessageType.InputControlOwnership',
                      6
                    )
                    const inputControlOwnership = new Boolean(view[1]).valueOf()
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      `Received input controller message - will your input control the stream: ${inputControlOwnership}`
                    )
                    this.pixelStreaming._onInputControlOwnership(inputControlOwnership)
                  }
                  /**
                   *
                   * @param message
                   */
                  onGamepadResponse(message) {
                    const responseString = new TextDecoder('utf-16').decode(message.slice(1))
                    const responseJSON = JSON.parse(responseString)
                    this.gamePadController.onGamepadResponseReceived(responseJSON.controllerId)
                  }
                  onAfkTriggered() {
                    this.afkController.onAfkClick()
                    // if the stream is paused play it, if we can
                    if (this.videoPlayer.isPaused() && this.videoPlayer.hasVideoSource()) {
                      this.playStream()
                    }
                  }
                  /**
                   * Set whether we should timeout when afk.
                   * @param afkEnabled If true we timeout when idle for some given amount of time.
                   */
                  setAfkEnabled(afkEnabled) {
                    if (afkEnabled) {
                      this.onAfkTriggered()
                    } else {
                      this.afkController.stopAfkWarningTimer()
                    }
                  }
                  /**
                   * Restart the stream automatically without refreshing the page
                   */
                  restartStreamAutomatically() {
                    // if there is no webSocketController return immediately or this will not work
                    if (!this.webSocketController) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                        'The Web Socket Controller does not exist so this will not work right now.'
                      )
                      return
                    }
                    // if a websocket object has not been created connect normally without closing
                    if (
                      !this.webSocketController.webSocket ||
                      this.webSocketController.webSocket.readyState === WebSocket.CLOSED
                    ) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                        'A websocket connection has not been made yet so we will start the stream'
                      )
                      this.pixelStreaming._onWebRtcAutoConnect()
                      this.connectToSignallingServer()
                    } else {
                      // set the replay status so we get a text overlay over an action overlay
                      this.pixelStreaming._showActionOrErrorOnDisconnect = false
                      // set the disconnect message
                      this.setDisconnectMessageOverride('Restarting stream...')
                      // close the connection
                      this.closeSignalingServer()
                      // wait for the connection to close and restart the connection
                      const autoConnectTimeout = setTimeout(() => {
                        this.pixelStreaming._onWebRtcAutoConnect()
                        this.connectToSignallingServer()
                        clearTimeout(autoConnectTimeout)
                      }, 3000)
                    }
                  }
                  /**
                   * Loads a freeze frame if it is required otherwise shows the play overlay
                   */
                  loadFreezeFrameOrShowPlayOverlay() {
                    this.pixelStreaming.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_17__.LoadFreezeFrameEvent({
                        shouldShowPlayOverlay: this.shouldShowPlayOverlay,
                        isValid: this.freezeFrameController.valid,
                        jpegData: this.freezeFrameController.jpeg
                      })
                    )
                    if (this.shouldShowPlayOverlay === true) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                        'showing play overlay'
                      )
                      this.resizePlayerStyle()
                    } else {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                        'showing freeze frame'
                      )
                      this.freezeFrameController.showFreezeFrame()
                    }
                    setTimeout(() => {
                      this.videoPlayer.setVideoEnabled(false)
                    }, this.freezeFrameController.freezeFrameDelay)
                  }
                  /**
                   * Process the freeze frame and load it
                   * @param message The freeze frame data in bytes
                   */
                  onFreezeFrameMessage(message) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      'DataChannelReceiveMessageType.FreezeFrame',
                      6
                    )
                    const view = new Uint8Array(message)
                    this.freezeFrameController.processFreezeFrameMessage(view, () =>
                      this.loadFreezeFrameOrShowPlayOverlay()
                    )
                  }
                  /**
                   * Enable the video after hiding a freeze frame
                   */
                  invalidateFreezeFrameAndEnableVideo() {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      'DataChannelReceiveMessageType.FreezeFrame',
                      6
                    )
                    setTimeout(() => {
                      this.pixelStreaming.dispatchEvent(
                        new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_17__.HideFreezeFrameEvent()
                      )
                      this.freezeFrameController.hideFreezeFrame()
                    }, this.freezeFrameController.freezeFrameDelay)
                    if (this.videoPlayer.getVideoElement()) {
                      this.videoPlayer.setVideoEnabled(true)
                    }
                  }
                  /**
                   * Prep datachannel data for processing file extension
                   * @param data the file extension data
                   */
                  onFileExtension(data) {
                    const view = new Uint8Array(data)
                    _Util_FileUtil__WEBPACK_IMPORTED_MODULE_1__.FileUtil.setExtensionFromBytes(view, this.file)
                  }
                  /**
                   * Prep datachannel data for processing the file mime type
                   * @param data the file mime type data
                   */
                  onFileMimeType(data) {
                    const view = new Uint8Array(data)
                    _Util_FileUtil__WEBPACK_IMPORTED_MODULE_1__.FileUtil.setMimeTypeFromBytes(view, this.file)
                  }
                  /**
                   * Prep datachannel data for processing the file contents
                   * @param data the file contents data
                   */
                  onFileContents(data, responseController) {
                    const view = new Uint8Array(data)
                    _Util_FileUtil__WEBPACK_IMPORTED_MODULE_1__.FileUtil.setContentsFromBytes(
                      view,
                      this.file,
                      responseController
                    )
                  }
                  /**
                   * Plays the stream audio and video source and sets up other pieces while the stream starts
                   */
                  playStream() {
                    if (!this.videoPlayer.getVideoElement()) {
                      const message =
                        'Could not play video stream because the video player was not initialized correctly.'
                      this.pixelStreaming.dispatchEvent(
                        new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_17__.PlayStreamErrorEvent({ message })
                      )
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Error(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                        message
                      )
                      // set the disconnect message
                      this.setDisconnectMessageOverride('Stream not initialized correctly')
                      // close the connection
                      this.closeSignalingServer()
                      return
                    }
                    if (!this.videoPlayer.hasVideoSource()) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Warning(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                        'Cannot play stream, the video element has no srcObject to play.'
                      )
                      return
                    }
                    this.setTouchInputEnabled(
                      this.config.isFlagEnabled(_Config_Config__WEBPACK_IMPORTED_MODULE_11__.Flags.TouchInput)
                    )
                    this.pixelStreaming.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_17__.PlayStreamEvent()
                    )
                    if (this.streamController.audioElement.srcObject) {
                      this.streamController.audioElement.muted = this.config.isFlagEnabled(
                        _Config_Config__WEBPACK_IMPORTED_MODULE_11__.Flags.StartVideoMuted
                      )
                      this.streamController.audioElement
                        .play()
                        .then(() => {
                          this.playVideo()
                        })
                        .catch((onRejectedReason) => {
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                            _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                            onRejectedReason
                          )
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                            _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                            'Browser does not support autoplaying video without interaction - to resolve this we are going to show the play button overlay.'
                          )
                          this.pixelStreaming.dispatchEvent(
                            new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_17__.PlayStreamRejectedEvent({
                              reason: onRejectedReason
                            })
                          )
                        })
                    } else {
                      this.playVideo()
                    }
                    this.shouldShowPlayOverlay = false
                    this.freezeFrameController.showFreezeFrame()
                  }
                  /**
                   * Plays the video stream
                   */
                  playVideo() {
                    // handle play() with promise as it is an asynchronous call
                    this.videoPlayer.play().catch((onRejectedReason) => {
                      if (this.streamController.audioElement.srcObject) {
                        this.streamController.audioElement.pause()
                      }
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                        onRejectedReason
                      )
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                        'Browser does not support autoplaying video without interaction - to resolve this we are going to show the play button overlay.'
                      )
                      this.pixelStreaming.dispatchEvent(
                        new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_17__.PlayStreamRejectedEvent({
                          reason: onRejectedReason
                        })
                      )
                    })
                  }
                  /**
                   * Enable the video to play automatically if enableAutoplay is true
                   */
                  autoPlayVideoOrSetUpPlayOverlay() {
                    if (this.config.isFlagEnabled(_Config_Config__WEBPACK_IMPORTED_MODULE_11__.Flags.AutoPlayVideo)) {
                      // attempt to play the video
                      this.playStream()
                    }
                    this.resizePlayerStyle()
                  }
                  /**
                   * Connect to the Signaling server
                   */
                  connectToSignallingServer() {
                    const signallingUrl = this.signallingUrlBuilder()
                    this.webSocketController.connect(signallingUrl)
                  }
                  /**
                   * This will start the handshake to the signalling server
                   * @param peerConfig  - RTC Configuration Options from the Signaling server
                   * @remark RTC Peer Connection on Ice Candidate event have it handled by handle Send Ice Candidate
                   */
                  startSession(peerConfig) {
                    this.peerConfig = peerConfig
                    // check for forcing turn
                    if (this.config.isFlagEnabled(_Config_Config__WEBPACK_IMPORTED_MODULE_11__.Flags.ForceTURN)) {
                      // check for a turn server
                      const hasTurnServer = this.checkTurnServerAvailability(peerConfig)
                      // close and error if turn is forced and there is no turn server
                      if (!hasTurnServer) {
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Info(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                          'No turn server was found in the Peer Connection Options. TURN cannot be forced, closing connection. Please use STUN instead'
                        )
                        this.setDisconnectMessageOverride(
                          'TURN cannot be forced, closing connection. Please use STUN instead.'
                        )
                        this.closeSignalingServer()
                        return
                      }
                    }
                    // set up the peer connection controller
                    this.peerConnectionController =
                      new _PeerConnectionController_PeerConnectionController__WEBPACK_IMPORTED_MODULE_18__.PeerConnectionController(
                        this.peerConfig,
                        this.config,
                        this.preferredCodec
                      )
                    // set up peer connection controller video stats
                    this.peerConnectionController.onVideoStats = (event) => this.handleVideoStats(event)
                    /* When the Peer Connection wants to send an offer have it handled */
                    this.peerConnectionController.onSendWebRTCOffer = (offer) => this.handleSendWebRTCOffer(offer)
                    /* When the Peer Connection wants to send an answer have it handled */
                    this.peerConnectionController.onSendWebRTCAnswer = (offer) => this.handleSendWebRTCAnswer(offer)
                    /* When the Peer Connection ice candidate is added have it handled */
                    this.peerConnectionController.onPeerIceCandidate = (peerConnectionIceEvent) =>
                      this.handleSendIceCandidate(peerConnectionIceEvent)
                    /* When the Peer Connection has a data channel created for it by the browser, handle it */
                    this.peerConnectionController.onDataChannel = (datachannelEvent) =>
                      this.handleDataChannel(datachannelEvent)
                    // set up webRtc text overlays
                    this.peerConnectionController.showTextOverlayConnecting = () =>
                      this.pixelStreaming._onWebRtcConnecting()
                    this.peerConnectionController.showTextOverlaySetupFailure = () =>
                      this.pixelStreaming._onWebRtcFailed()
                    let webRtcConnectedSent = false
                    this.peerConnectionController.onIceConnectionStateChange = () => {
                      // Browsers emit "connected" when getting first connection and "completed" when finishing
                      // candidate checking. However, sometimes browsers can skip "connected" and only emit "completed".
                      // Therefore need to check both cases and emit onWebRtcConnected only once on the first hit.
                      if (
                        !webRtcConnectedSent &&
                        ['connected', 'completed'].includes(
                          this.peerConnectionController.peerConnection.iceConnectionState
                        )
                      ) {
                        this.pixelStreaming._onWebRtcConnected()
                        webRtcConnectedSent = true
                      }
                    }
                    /* RTC Peer Connection on Track event -> handle on track */
                    this.peerConnectionController.onTrack = (trackEvent) =>
                      this.streamController.handleOnTrack(trackEvent)
                    /* Start the Hand shake process by creating an Offer */
                    const BrowserSendsOffer = this.config.isFlagEnabled(
                      _Config_Config__WEBPACK_IMPORTED_MODULE_11__.Flags.BrowserSendOffer
                    )
                    if (BrowserSendsOffer) {
                      // If browser is sending the offer, create an offer and send it to the streamer
                      this.sendrecvDataChannelController.createDataChannel(
                        this.peerConnectionController.peerConnection,
                        'cirrus',
                        this.datachannelOptions
                      )
                      this.sendrecvDataChannelController.handleOnMessage = (ev) => this.handleOnMessage(ev)
                      this.peerConnectionController.createOffer(this.sdpConstraints, this.config)
                    }
                  }
                  /**
                   * Checks the peer connection options for a turn server and returns true or false
                   */
                  checkTurnServerAvailability(options) {
                    // if iceServers is empty return false this should not be the general use case but is here incase
                    if (!options.iceServers) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Info(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                        'A turn sever was not found'
                      )
                      return false
                    }
                    // loop through the ice servers to check for a turn url
                    for (const iceServer of options.iceServers) {
                      for (const url of iceServer.urls) {
                        if (url.includes('turn')) {
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                            _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                            `A turn sever was found at ${url}`
                          )
                          return true
                        }
                      }
                    }
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Info(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      'A turn sever was not found'
                    )
                    return false
                  }
                  /**
                   * Handles when a Config Message is received contains the Peer Connection Options required (STUN and TURN Server Info)
                   * @param messageConfig - Config Message received from the signaling server
                   */
                  handleOnConfigMessage(messageConfig) {
                    this.resizePlayerStyle()
                    // Tell the WebRtcController to start a session with the peer options sent from the signaling server
                    this.startSession(messageConfig.peerConnectionOptions)
                    // When the signaling server sends a WebRTC Answer over the websocket connection have the WebRtcController handle the message
                    this.webSocketController.onWebRtcAnswer = (messageAnswer) => this.handleWebRtcAnswer(messageAnswer)
                    this.webSocketController.onWebRtcOffer = (messageOffer) => this.handleWebRtcOffer(messageOffer)
                    this.webSocketController.onWebRtcPeerDataChannels = (messageDataChannels) =>
                      this.handleWebRtcSFUPeerDatachannels(messageDataChannels)
                    // When the signaling server sends a IceCandidate over the websocket connection have the WebRtcController handle the message
                    this.webSocketController.onIceCandidate = (iceCandidate) => this.handleIceCandidate(iceCandidate)
                  }
                  /**
                   * Handles when the signalling server gives us the list of streamer ids.
                   */
                  handleStreamerListMessage(messageStreamerList) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      `Got streamer list ${messageStreamerList.ids}`,
                      6
                    )
                    if (this.isReconnecting) {
                      if (messageStreamerList.ids.includes(this.subscribedStream)) {
                        // If we're reconnecting and the previously subscribed stream has come back, resubscribe to it
                        this.isReconnecting = false
                        this.reconnectAttempt = 0
                        this.webSocketController.sendSubscribe(this.subscribedStream)
                      } else if (
                        this.reconnectAttempt <
                        this.config.getNumericSettingValue(
                          _Config_Config__WEBPACK_IMPORTED_MODULE_11__.NumericParameters.MaxReconnectAttempts
                        )
                      ) {
                        // Our previous stream hasn't come back, wait 2 seconds and request an updated stream list
                        this.reconnectAttempt++
                        setTimeout(() => {
                          this.webSocketController.requestStreamerList()
                        }, 2000)
                      } else {
                        // We've exhausted our reconnect attempts, return to main screen
                        this.reconnectAttempt = 0
                        this.isReconnecting = false
                        this.shouldReconnect = false
                        this.webSocketController.close()
                        this.config.setOptionSettingValue(
                          _Config_Config__WEBPACK_IMPORTED_MODULE_11__.OptionParameters.StreamerId,
                          ''
                        )
                        this.config.setOptionSettingOptions(
                          _Config_Config__WEBPACK_IMPORTED_MODULE_11__.OptionParameters.StreamerId,
                          []
                        )
                      }
                    } else {
                      const settingOptions = [...messageStreamerList.ids] // copy the original messageStreamerList.ids
                      settingOptions.unshift('') // add an empty option at the top
                      this.config.setOptionSettingOptions(
                        _Config_Config__WEBPACK_IMPORTED_MODULE_11__.OptionParameters.StreamerId,
                        settingOptions
                      )
                      const urlParams = new URLSearchParams(window.location.search)
                      let autoSelectedStreamerId = null
                      if (messageStreamerList.ids.length == 1) {
                        // If there's only a single streamer, subscribe to it regardless of what is in the URL
                        autoSelectedStreamerId = messageStreamerList.ids[0]
                      } else if (
                        this.config.isFlagEnabled(_Config_Config__WEBPACK_IMPORTED_MODULE_11__.Flags.PreferSFU) &&
                        messageStreamerList.ids.includes('SFU')
                      ) {
                        // If the SFU toggle is on and there's an SFU connected, subscribe to it regardless of what is in the URL
                        autoSelectedStreamerId = 'SFU'
                      } else if (
                        urlParams.has(_Config_Config__WEBPACK_IMPORTED_MODULE_11__.OptionParameters.StreamerId) &&
                        messageStreamerList.ids.includes(
                          urlParams.get(_Config_Config__WEBPACK_IMPORTED_MODULE_11__.OptionParameters.StreamerId)
                        )
                      ) {
                        // If there's a streamer ID in the URL and a streamer with this ID is connected, set it as the selected streamer
                        autoSelectedStreamerId = urlParams.get(
                          _Config_Config__WEBPACK_IMPORTED_MODULE_11__.OptionParameters.StreamerId
                        )
                      }
                      if (autoSelectedStreamerId !== null) {
                        this.config.setOptionSettingValue(
                          _Config_Config__WEBPACK_IMPORTED_MODULE_11__.OptionParameters.StreamerId,
                          autoSelectedStreamerId
                        )
                      }
                      this.pixelStreaming.dispatchEvent(
                        new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_17__.StreamerListMessageEvent({
                          messageStreamerList,
                          autoSelectedStreamerId
                        })
                      )
                    }
                  }
                  /**
                   * Handle the RTC Answer from the signaling server
                   * @param Answer - Answer SDP from the peer.
                   */
                  handleWebRtcAnswer(Answer) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      `Got answer sdp ${Answer.sdp}`,
                      6
                    )
                    const sdpAnswer = {
                      sdp: Answer.sdp,
                      type: 'answer'
                    }
                    this.peerConnectionController.receiveAnswer(sdpAnswer)
                    this.handlePostWebrtcNegotiation()
                  }
                  /**
                   * Handle the RTC offer from a WebRTC peer (received through the signalling server).
                   * @param Offer - Offer SDP from the peer.
                   */
                  handleWebRtcOffer(Offer) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      `Got offer sdp ${Offer.sdp}`,
                      6
                    )
                    this.isUsingSFU = Offer.sfu ? Offer.sfu : false
                    if (this.isUsingSFU) {
                      // Disable negotiating with the sfu as the sfu only supports one codec at a time
                      this.peerConnectionController.preferredCodec = ''
                    }
                    const sdpOffer = {
                      sdp: Offer.sdp,
                      type: 'offer'
                    }
                    this.peerConnectionController.receiveOffer(sdpOffer, this.config)
                    this.handlePostWebrtcNegotiation()
                  }
                  /**
                   * Handle when the SFU provides the peer with its data channels
                   * @param DataChannels - The message from the SFU containing the data channels ids
                   */
                  handleWebRtcSFUPeerDatachannels(DataChannels) {
                    const SendOptions = {
                      ordered: true,
                      negotiated: true,
                      id: DataChannels.sendStreamId
                    }
                    const unidirectional = DataChannels.sendStreamId != DataChannels.recvStreamId
                    this.sendrecvDataChannelController.createDataChannel(
                      this.peerConnectionController.peerConnection,
                      unidirectional ? 'send-datachannel' : 'datachannel',
                      SendOptions
                    )
                    if (unidirectional) {
                      const RecvOptions = {
                        ordered: true,
                        negotiated: true,
                        id: DataChannels.recvStreamId
                      }
                      this.recvDataChannelController.createDataChannel(
                        this.peerConnectionController.peerConnection,
                        'recv-datachannel',
                        RecvOptions
                      )
                      this.recvDataChannelController.handleOnOpen = () =>
                        this.webSocketController.sendSFURecvDataChannelReady()
                      // If we're uni-directional, only the recv data channel should handle incoming messages
                      this.recvDataChannelController.handleOnMessage = (ev) => this.handleOnMessage(ev)
                    } else {
                      // else our primary datachannel is send/recv so it can handle incoming messages
                      this.sendrecvDataChannelController.handleOnMessage = (ev) => this.handleOnMessage(ev)
                    }
                  }
                  handlePostWebrtcNegotiation() {
                    // start the afk warning timer as PS is now running
                    this.afkController.startAfkWarningTimer()
                    // show the overlay that we have negotiated a connection
                    this.pixelStreaming._onWebRtcSdp()
                    if (this.statsTimerHandle && this.statsTimerHandle !== undefined) {
                      window.clearInterval(this.statsTimerHandle)
                    }
                    this.statsTimerHandle = window.setInterval(() => this.getStats(), 1000)
                    /*  */
                    this.setMouseInputEnabled(
                      this.config.isFlagEnabled(_Config_Config__WEBPACK_IMPORTED_MODULE_11__.Flags.MouseInput)
                    )
                    this.setKeyboardInputEnabled(
                      this.config.isFlagEnabled(_Config_Config__WEBPACK_IMPORTED_MODULE_11__.Flags.KeyboardInput)
                    )
                    this.setGamePadInputEnabled(
                      this.config.isFlagEnabled(_Config_Config__WEBPACK_IMPORTED_MODULE_11__.Flags.GamepadInput)
                    )
                  }
                  /**
                   * When an ice Candidate is received from the Signaling server add it to the Peer Connection Client
                   * @param iceCandidate - Ice Candidate from Server
                   */
                  handleIceCandidate(iceCandidate) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      'Web RTC Controller: onWebRtcIce',
                      6
                    )
                    const candidate = new RTCIceCandidate(iceCandidate)
                    this.peerConnectionController.handleOnIce(candidate)
                  }
                  /**
                   * Send the ice Candidate to the signaling server via websocket
                   * @param iceEvent - RTC Peer ConnectionIceEvent) {
                   */
                  handleSendIceCandidate(iceEvent) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      'OnIceCandidate',
                      6
                    )
                    if (iceEvent.candidate && iceEvent.candidate.candidate) {
                      this.webSocketController.sendIceCandidate(iceEvent.candidate)
                    }
                  }
                  /**
                   * Send the ice Candidate to the signaling server via websocket
                   * @param iceEvent - RTC Peer ConnectionIceEvent) {
                   */
                  handleDataChannel(datachannelEvent) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      'Data channel created for us by browser as we are a receiving peer.',
                      6
                    )
                    this.sendrecvDataChannelController.dataChannel = datachannelEvent.channel
                    // Data channel was created for us, so we just need to setup its callbacks and array type
                    this.sendrecvDataChannelController.setupDataChannel()
                    this.sendrecvDataChannelController.handleOnMessage = (ev) => this.handleOnMessage(ev)
                  }
                  /**
                   * Send the RTC Offer Session to the Signaling server via websocket
                   * @param offer - RTC Session Description
                   */
                  handleSendWebRTCOffer(offer) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      'Sending the offer to the Server',
                      6
                    )
                    this.webSocketController.sendWebRtcOffer(offer)
                  }
                  /**
                   * Send the RTC Offer Session to the Signaling server via websocket
                   * @param answer - RTC Session Description
                   */
                  handleSendWebRTCAnswer(answer) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      'Sending the answer to the Server',
                      6
                    )
                    this.webSocketController.sendWebRtcAnswer(answer)
                    if (this.isUsingSFU) {
                      this.webSocketController.sendWebRtcDatachannelRequest()
                    }
                  }
                  /**
                   * Set the freeze frame overlay to the player div
                   */
                  setUpMouseAndFreezeFrame() {
                    // Calculating and normalizing positions depends on the width and height of the player.
                    this.videoElementParentClientRect = this.videoPlayer.getVideoParentElement().getBoundingClientRect()
                    this.coordinateConverter.setupNormalizeAndQuantize()
                    this.freezeFrameController.freezeFrame.resize()
                  }
                  /**
                   * Close the Connection to the signaling server
                   */
                  closeSignalingServer() {
                    var _a
                    // We explicitly called close, therefore we don't want to trigger auto reconnect
                    this.shouldReconnect = false
                    ;(_a = this.webSocketController) === null || _a === void 0 ? void 0 : _a.close()
                  }
                  /**
                   * Close the peer connection
                   */
                  closePeerConnection() {
                    var _a
                    ;(_a = this.peerConnectionController) === null || _a === void 0 ? void 0 : _a.close()
                  }
                  /**
                   * Close all connections
                   */
                  close() {
                    this.closeSignalingServer()
                    this.closePeerConnection()
                  }
                  /**
                   * Fires a Video Stats Event in the RTC Peer Connection
                   */
                  getStats() {
                    this.peerConnectionController.generateStats()
                  }
                  /**
                   * Send a Latency Test Request to the UE Instance
                   */
                  sendLatencyTest() {
                    this.latencyStartTime = Date.now()
                    this.sendDescriptorController.sendLatencyTest({
                      StartTime: this.latencyStartTime
                    })
                  }
                  /**
                   * Send the MinQP encoder setting to the UE Instance.
                   * @param minQP - The lower bound for QP when encoding
                   * valid values are (1-51) where:
                   * 1 = Best quality but highest bitrate.
                   * 51 = Worst quality but lowest bitrate.
                   * By default the minQP is 1 meaning the encoder is free
                   * to aim for the best quality it can on the given network link.
                   */
                  sendEncoderMinQP(minQP) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      `MinQP=${minQP}\n`,
                      6
                    )
                    if (minQP != null) {
                      this.sendDescriptorController.emitCommand({
                        'Encoder.MinQP': minQP
                      })
                    }
                  }
                  /**
                   * Send the MaxQP encoder setting to the UE Instance.
                   * @param maxQP - The upper bound for QP when encoding
                   * valid values are (1-51) where:
                   * 1 = Best quality but highest bitrate.
                   * 51 = Worst quality but lowest bitrate.
                   * By default the maxQP is 51 meaning the encoder is free
                   * to drop quality as low as needed on the given network link.
                   */
                  sendEncoderMaxQP(maxQP) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      `MaxQP=${maxQP}\n`,
                      6
                    )
                    if (maxQP != null) {
                      this.sendDescriptorController.emitCommand({
                        'Encoder.MaxQP': maxQP
                      })
                    }
                  }
                  /**
                   * Send the { WebRTC.MinBitrate: SomeNumber }} command to UE to set
                   * the minimum bitrate that we allow WebRTC to use
                   * (note setting this too high in poor networks can be problematic).
                   * @param minBitrate - The minimum bitrate we would like WebRTC to not fall below.
                   */
                  sendWebRTCMinBitrate(minBitrate) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      `WebRTC Min Bitrate=${minBitrate}`,
                      6
                    )
                    if (minBitrate != null) {
                      this.sendDescriptorController.emitCommand({
                        'WebRTC.MinBitrate': minBitrate
                      })
                    }
                  }
                  /**
                   * Send the { WebRTC.MaxBitrate: SomeNumber }} command to UE to set
                   * the minimum bitrate that we allow WebRTC to use
                   * (note setting this too low could result in blocky video).
                   * @param minBitrate - The minimum bitrate we would like WebRTC to not fall below.
                   */
                  sendWebRTCMaxBitrate(maxBitrate) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      `WebRTC Max Bitrate=${maxBitrate}`,
                      6
                    )
                    if (maxBitrate != null) {
                      this.sendDescriptorController.emitCommand({
                        'WebRTC.MaxBitrate': maxBitrate
                      })
                    }
                  }
                  /**
                   * Send the { WebRTC.Fps: SomeNumber }} UE 5.0+
                   * and { WebRTC.MaxFps } UE 4.27 command to set
                   * the maximum fps we would like WebRTC to stream at.
                   * @param fps - The maximum stream fps.
                   */
                  sendWebRTCFps(fps) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      `WebRTC FPS=${fps}`,
                      6
                    )
                    if (fps != null) {
                      this.sendDescriptorController.emitCommand({
                        'WebRTC.Fps': fps
                      })
                      this.sendDescriptorController.emitCommand({
                        'WebRTC.MaxFps': fps
                      }) /* TODO: Remove when UE 4.27 unsupported. */
                    }
                  }
                  /**
                   * Sends the UI Descriptor `stat fps` to the UE Instance
                   */
                  sendShowFps() {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      '----   Sending show stat to UE   ----',
                      6
                    )
                    this.sendDescriptorController.emitCommand({
                      'stat.fps': ''
                    })
                  }
                  /**
                   * Send an Iframe request to the streamer
                   */
                  sendIframeRequest() {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      '----   Sending Request for an IFrame  ----',
                      6
                    )
                    this.streamMessageController.toStreamerHandlers.get('IFrameRequest')()
                  }
                  /**
                   * Send a UIInteraction message
                   */
                  emitUIInteraction(descriptor) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      '----   Sending custom UIInteraction message   ----',
                      6
                    )
                    this.sendDescriptorController.emitUIInteraction(descriptor)
                  }
                  /**
                   * Send a Command message
                   */
                  emitCommand(descriptor) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      '----   Sending custom Command message   ----',
                      6
                    )
                    this.sendDescriptorController.emitCommand(descriptor)
                  }
                  /**
                   * Send a console command message
                   */
                  emitConsoleCommand(command) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      '----   Sending custom Command:ConsoleCommand message   ----',
                      6
                    )
                    this.sendDescriptorController.emitCommand({
                      ConsoleCommand: command
                    })
                  }
                  /**
                   * Sends a request to the UE Instance to have ownership of Quality
                   */
                  sendRequestQualityControlOwnership() {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      '----   Sending Request to Control Quality  ----',
                      6
                    )
                    this.toStreamerMessagesController.SendRequestQualityControl()
                  }
                  /**
                   * Handles when a Latency Test Result are received from the UE Instance
                   * @param message - Latency Test Timings
                   */
                  handleLatencyTestResult(message) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      'DataChannelReceiveMessageType.latencyTest',
                      6
                    )
                    const latencyAsString = new TextDecoder('utf-16').decode(message.slice(1))
                    const latencyTestResults =
                      new _DataChannel_LatencyTestResults__WEBPACK_IMPORTED_MODULE_19__.LatencyTestResults()
                    Object.assign(latencyTestResults, JSON.parse(latencyAsString))
                    latencyTestResults.processFields()
                    latencyTestResults.testStartTimeMs = this.latencyStartTime
                    latencyTestResults.browserReceiptTimeMs = Date.now()
                    latencyTestResults.latencyExcludingDecode = ~~(
                      latencyTestResults.browserReceiptTimeMs - latencyTestResults.testStartTimeMs
                    )
                    latencyTestResults.testDuration = ~~(
                      latencyTestResults.TransmissionTimeMs - latencyTestResults.ReceiptTimeMs
                    )
                    latencyTestResults.networkLatency = ~~(
                      latencyTestResults.latencyExcludingDecode - latencyTestResults.testDuration
                    )
                    if (latencyTestResults.frameDisplayDeltaTimeMs && latencyTestResults.browserReceiptTimeMs) {
                      latencyTestResults.endToEndLatency = ~~(latencyTestResults.frameDisplayDeltaTimeMs +
                        latencyTestResults.networkLatency,
                      +latencyTestResults.CaptureToSendMs)
                    }
                    this.pixelStreaming._onLatencyTestResult(latencyTestResults)
                  }
                  /**
                   * Handles when the Encoder and Web RTC Settings are received from the UE Instance
                   * @param message - Initial Encoder and Web RTC Settings
                   */
                  handleInitialSettings(message) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      'DataChannelReceiveMessageType.InitialSettings',
                      6
                    )
                    const payloadAsString = new TextDecoder('utf-16').decode(message.slice(1))
                    const parsedInitialSettings = JSON.parse(payloadAsString)
                    const initialSettings =
                      new _DataChannel_InitialSettings__WEBPACK_IMPORTED_MODULE_20__.InitialSettings()
                    if (parsedInitialSettings.Encoder) {
                      initialSettings.EncoderSettings = parsedInitialSettings.Encoder
                    }
                    if (parsedInitialSettings.WebRTC) {
                      initialSettings.WebRTCSettings = parsedInitialSettings.WebRTC
                    }
                    if (parsedInitialSettings.PixelStreaming) {
                      initialSettings.PixelStreamingSettings = parsedInitialSettings.PixelStreaming
                    }
                    if (
                      parsedInitialSettings.ConfigOptions &&
                      parsedInitialSettings.ConfigOptions.DefaultToHover !== undefined
                    ) {
                      this.config.setFlagEnabled(
                        _Config_Config__WEBPACK_IMPORTED_MODULE_11__.Flags.HoveringMouseMode,
                        !!parsedInitialSettings.ConfigOptions.DefaultToHover
                      )
                    }
                    initialSettings.ueCompatible()
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      payloadAsString,
                      6
                    )
                    this.pixelStreaming._onInitialSettings(initialSettings)
                  }
                  /**
                   * Handles when the Quantization Parameter are received from the UE Instance
                   * @param message - Encoders Quantization Parameter
                   */
                  handleVideoEncoderAvgQP(message) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      'DataChannelReceiveMessageType.VideoEncoderAvgQP',
                      6
                    )
                    const AvgQP = Number(new TextDecoder('utf-16').decode(message.slice(1)))
                    this.setVideoEncoderAvgQP(AvgQP)
                  }
                  /**
                   * Handles when the video element has been loaded with a srcObject
                   */
                  handleVideoInitialized() {
                    this.pixelStreaming._onVideoInitialized()
                    // either autoplay the video or set up the play overlay
                    this.autoPlayVideoOrSetUpPlayOverlay()
                    this.resizePlayerStyle()
                    this.videoPlayer.updateVideoStreamSize()
                  }
                  /**
                   * Flag set if the user has Quality Ownership
                   * @param message - Does the current client have Quality Ownership
                   */
                  onQualityControlOwnership(message) {
                    const view = new Uint8Array(message)
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      'DataChannelReceiveMessageType.QualityControlOwnership',
                      6
                    )
                    this.isQualityController = new Boolean(view[1]).valueOf()
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_16__.Logger.GetStackTrace(),
                      `Received quality controller message, will control quality: ${this.isQualityController}`
                    )
                    this.pixelStreaming._onQualityControlOwnership(this.isQualityController)
                  }
                  /**
                   * Handles when the Aggregated stats are Collected
                   * @param stats - Aggregated Stats
                   */
                  handleVideoStats(stats) {
                    this.pixelStreaming._onVideoStats(stats)
                  }
                  /**
                   * To Resize the Video Player element
                   */
                  resizePlayerStyle() {
                    this.videoPlayer.resizePlayerStyle()
                  }
                  /**
                   * Get the overridden disconnect message
                   */
                  getDisconnectMessageOverride() {
                    return this.disconnectMessageOverride
                  }
                  /**
                   * Set the override for the disconnect message
                   */
                  setDisconnectMessageOverride(message) {
                    this.disconnectMessageOverride = message
                  }
                  setPreferredCodec(codec) {
                    this.preferredCodec = codec
                    if (this.peerConnectionController) {
                      this.peerConnectionController.preferredCodec = codec
                      this.peerConnectionController.updateCodecSelection = false
                    }
                  }
                  setVideoEncoderAvgQP(avgQP) {
                    this.videoAvgQp = avgQP
                    this.pixelStreaming._onVideoEncoderAvgQP(this.videoAvgQp)
                  }
                  /**
                   * enables/disables keyboard event listeners
                   */
                  setKeyboardInputEnabled(isEnabled) {
                    var _a
                    ;(_a = this.keyboardController) === null || _a === void 0 ? void 0 : _a.unregisterKeyBoardEvents()
                    if (isEnabled) {
                      this.keyboardController = this.inputClassesFactory.registerKeyBoard(this.config)
                    }
                  }
                  /**
                   * enables/disables mouse event listeners
                   */
                  setMouseInputEnabled(isEnabled) {
                    var _a
                    ;(_a = this.mouseController) === null || _a === void 0 ? void 0 : _a.unregisterMouseEvents()
                    if (isEnabled) {
                      const mouseMode = this.config.isFlagEnabled(
                        _Config_Config__WEBPACK_IMPORTED_MODULE_11__.Flags.HoveringMouseMode
                      )
                        ? _Config_Config__WEBPACK_IMPORTED_MODULE_11__.ControlSchemeType.HoveringMouse
                        : _Config_Config__WEBPACK_IMPORTED_MODULE_11__.ControlSchemeType.HoveringMouse
                      // : _Config_Config__WEBPACK_IMPORTED_MODULE_11__.ControlSchemeType.LockedMouse
                      this.mouseController = this.inputClassesFactory.registerMouse(mouseMode)
                    }
                  }
                  /**
                   * enables/disables touch event listeners
                   */
                  setTouchInputEnabled(isEnabled) {
                    var _a
                    ;(_a = this.touchController) === null || _a === void 0 ? void 0 : _a.unregisterTouchEvents()
                    if (isEnabled) {
                      this.touchController = this.inputClassesFactory.registerTouch(
                        this.config.isFlagEnabled(
                          _Config_Config__WEBPACK_IMPORTED_MODULE_11__.Flags.FakeMouseWithTouches
                        ),
                        this.videoElementParentClientRect
                      )
                    }
                  }
                  /**
                   * enables/disables game pad event listeners
                   */
                  setGamePadInputEnabled(isEnabled) {
                    var _a
                    ;(_a = this.gamePadController) === null || _a === void 0 ? void 0 : _a.unregisterGamePadEvents()
                    if (isEnabled) {
                      this.gamePadController = this.inputClassesFactory.registerGamePad()
                      this.gamePadController.onGamepadConnected = () => {
                        this.streamMessageController.toStreamerHandlers.get('GamepadConnected')()
                      }
                      this.gamePadController.onGamepadDisconnected = (controllerIdx) => {
                        this.streamMessageController.toStreamerHandlers.get('GamepadDisconnected')([controllerIdx])
                      }
                    }
                  }
                  registerDataChannelEventEmitters(dataChannel) {
                    dataChannel.onOpen = (label, event) =>
                      this.pixelStreaming.dispatchEvent(
                        new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_17__.DataChannelOpenEvent({ label, event })
                      )
                    dataChannel.onClose = (label, event) =>
                      this.pixelStreaming.dispatchEvent(
                        new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_17__.DataChannelCloseEvent({ label, event })
                      )
                    dataChannel.onError = (label, event) =>
                      this.pixelStreaming.dispatchEvent(
                        new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_17__.DataChannelErrorEvent({ label, event })
                      )
                  }
                }

                /***/
              },

            /***/ './src/WebSockets/MessageReceive.ts':
              /*!******************************************!*\
  !*** ./src/WebSockets/MessageReceive.ts ***!
  \******************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_365759__) => {
                __nested_webpack_require_365759__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_365759__.d(__webpack_exports__, {
                  /* harmony export */ MessageAnswer: () => /* binding */ MessageAnswer,
                  /* harmony export */ MessageAuthRequired: () => /* binding */ MessageAuthRequired,
                  /* harmony export */ MessageConfig: () => /* binding */ MessageConfig,
                  /* harmony export */ MessageIceCandidate: () => /* binding */ MessageIceCandidate,
                  /* harmony export */ MessageOffer: () => /* binding */ MessageOffer,
                  /* harmony export */ MessageOnScreenKeyboard: () => /* binding */ MessageOnScreenKeyboard,
                  /* harmony export */ MessagePeerDataChannels: () => /* binding */ MessagePeerDataChannels,
                  /* harmony export */ MessagePlayerCount: () => /* binding */ MessagePlayerCount,
                  /* harmony export */ MessageRecv: () => /* binding */ MessageRecv,
                  /* harmony export */ MessageRecvTypes: () => /* binding */ MessageRecvTypes,
                  /* harmony export */ MessageStreamerList: () => /* binding */ MessageStreamerList
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * The Types of Messages that will be received
                 */
                var MessageRecvTypes
                ;(function (MessageRecvTypes) {
                  MessageRecvTypes['CONFIG'] = 'config'
                  MessageRecvTypes['STREAMER_LIST'] = 'streamerList'
                  MessageRecvTypes['PLAYER_COUNT'] = 'playerCount'
                  MessageRecvTypes['OFFER'] = 'offer'
                  MessageRecvTypes['ANSWER'] = 'answer'
                  MessageRecvTypes['ICE_CANDIDATE'] = 'iceCandidate'
                  MessageRecvTypes['PEER_DATA_CHANNELS'] = 'peerDataChannels'
                  MessageRecvTypes['PING'] = 'ping'
                  MessageRecvTypes['WARNING'] = 'warning'
                })(MessageRecvTypes || (MessageRecvTypes = {}))
                /**
                 * Concrete Received Message wrapper
                 */
                class MessageRecv {}
                /**
                 * Authentication Required Message wrapper
                 */
                class MessageAuthRequired extends MessageRecv {}
                /**
                 * Config Message Wrapper
                 */
                class MessageConfig extends MessageRecv {}
                /**
                 * Streamer List Message Wrapper
                 */
                class MessageStreamerList extends MessageRecv {}
                /**
                 * Player Count Message wrapper
                 */
                class MessagePlayerCount extends MessageRecv {}
                /**
                 * Web RTC offer Answer Message wrapper
                 */
                class MessageAnswer extends MessageRecv {}
                /**
                 * WebRTC sdp offer Message wrapper.
                 */
                class MessageOffer extends MessageRecv {}
                /**
                 * Ice Candidate Message wrapper
                 */
                class MessageIceCandidate extends MessageRecv {}
                /**
                 * Peer Data Channels Message wrapper
                 */
                class MessagePeerDataChannels extends MessageRecv {}
                class MessageOnScreenKeyboard {}

                /***/
              },

            /***/ './src/WebSockets/MessageSend.ts':
              /*!***************************************!*\
  !*** ./src/WebSockets/MessageSend.ts ***!
  \***************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_368639__) => {
                __nested_webpack_require_368639__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_368639__.d(__webpack_exports__, {
                  /* harmony export */ MessageIceCandidate: () => /* binding */ MessageIceCandidate,
                  /* harmony export */ MessageListStreamers: () => /* binding */ MessageListStreamers,
                  /* harmony export */ MessagePong: () => /* binding */ MessagePong,
                  /* harmony export */ MessageSFURecvDataChannelReady: () =>
                    /* binding */ MessageSFURecvDataChannelReady,
                  /* harmony export */ MessageSend: () => /* binding */ MessageSend,
                  /* harmony export */ MessageSendTypes: () => /* binding */ MessageSendTypes,
                  /* harmony export */ MessageSubscribe: () => /* binding */ MessageSubscribe,
                  /* harmony export */ MessageUnsubscribe: () => /* binding */ MessageUnsubscribe,
                  /* harmony export */ MessageWebRTCAnswer: () => /* binding */ MessageWebRTCAnswer,
                  /* harmony export */ MessageWebRTCDatachannelRequest: () =>
                    /* binding */ MessageWebRTCDatachannelRequest,
                  /* harmony export */ MessageWebRTCOffer: () => /* binding */ MessageWebRTCOffer
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_368639__(/*! ../Logger/Logger */ './src/Logger/Logger.ts')
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * The Send Types that are pushed from the signaling server
                 */
                var MessageSendTypes
                ;(function (MessageSendTypes) {
                  MessageSendTypes['LIST_STREAMERS'] = 'listStreamers'
                  MessageSendTypes['SUBSCRIBE'] = 'subscribe'
                  MessageSendTypes['UNSUBSCRIBE'] = 'unsubscribe'
                  MessageSendTypes['ICE_CANDIDATE'] = 'iceCandidate'
                  MessageSendTypes['OFFER'] = 'offer'
                  MessageSendTypes['ANSWER'] = 'answer'
                  MessageSendTypes['DATACHANNELREQUEST'] = 'dataChannelRequest'
                  MessageSendTypes['SFURECVDATACHANNELREADY'] = 'peerDataChannelsReady'
                  MessageSendTypes['PONG'] = 'pong'
                })(MessageSendTypes || (MessageSendTypes = {}))
                /**
                 * A Wrapper for the message to send to the signaling server
                 */
                class MessageSend {
                  /**
                   * Turns the wrapper into a JSON String
                   * @returns - JSON String of the Message to send
                   */
                  payload() {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      'Sending => \n' + JSON.stringify(this, undefined, 4),
                      6
                    )
                    return JSON.stringify(this)
                  }
                }
                class MessageListStreamers extends MessageSend {
                  constructor() {
                    super()
                    this.type = MessageSendTypes.LIST_STREAMERS
                  }
                }
                class MessageSubscribe extends MessageSend {
                  constructor(streamerid) {
                    super()
                    this.type = MessageSendTypes.SUBSCRIBE
                    this.streamerId = streamerid
                  }
                }
                class MessageUnsubscribe extends MessageSend {
                  constructor() {
                    super()
                    this.type = MessageSendTypes.UNSUBSCRIBE
                  }
                }
                /**
                 * Instance Request Message Wrapper
                 */
                class MessagePong extends MessageSend {
                  constructor(time) {
                    super()
                    this.type = MessageSendTypes.PONG
                    this.time = time
                  }
                }
                /**
                 *  Web RTC Offer message wrapper
                 */
                class MessageWebRTCOffer extends MessageSend {
                  /**
                   * @param offer - Generated Web RTC Offer
                   */
                  constructor(offer) {
                    super()
                    this.type = MessageSendTypes.OFFER
                    if (offer) {
                      this.type = offer.type
                      this.sdp = offer.sdp
                    }
                  }
                }
                /**
                 *  Web RTC Answer message wrapper
                 */
                class MessageWebRTCAnswer extends MessageSend {
                  /**
                   * @param answer - Generated Web RTC Offer
                   */
                  constructor(answer) {
                    super()
                    this.type = MessageSendTypes.ANSWER
                    if (answer) {
                      this.type = answer.type
                      this.sdp = answer.sdp
                    }
                  }
                }
                /**
                 *  Web RTC Data channel request message wrapper
                 */
                class MessageWebRTCDatachannelRequest extends MessageSend {
                  constructor() {
                    super()
                    this.type = MessageSendTypes.DATACHANNELREQUEST
                  }
                }
                /**
                 *  Web RTC SFU Data channel ready message wrapper
                 */
                class MessageSFURecvDataChannelReady extends MessageSend {
                  constructor() {
                    super()
                    this.type = MessageSendTypes.SFURECVDATACHANNELREADY
                  }
                }
                /**
                 * RTC Ice Candidate Wrapper
                 */
                class MessageIceCandidate {
                  /**
                   * @param candidate - RTC Ice Candidate
                   */
                  constructor(candidate) {
                    this.type = MessageSendTypes.ICE_CANDIDATE
                    this.candidate = candidate
                  }
                  /**
                   * Turns the wrapper into a JSON String
                   * @returns - JSON String of the Message to send
                   */
                  payload() {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      'Sending => \n' + JSON.stringify(this, undefined, 4),
                      6
                    )
                    return JSON.stringify(this)
                  }
                }

                /***/
              },

            /***/ './src/WebSockets/SignallingProtocol.ts':
              /*!**********************************************!*\
  !*** ./src/WebSockets/SignallingProtocol.ts ***!
  \**********************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_373907__) => {
                __nested_webpack_require_373907__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_373907__.d(__webpack_exports__, {
                  /* harmony export */ SignallingProtocol: () => /* binding */ SignallingProtocol
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_373907__(/*! ../Logger/Logger */ './src/Logger/Logger.ts')
                /* harmony import */ var _MessageReceive__WEBPACK_IMPORTED_MODULE_1__ =
                  __nested_webpack_require_373907__(/*! ./MessageReceive */ './src/WebSockets/MessageReceive.ts')
                /* harmony import */ var _MessageSend__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_373907__(
                  /*! ./MessageSend */ './src/WebSockets/MessageSend.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Signalling protocol for handling messages from the signalling server.
                 */
                class SignallingProtocol {
                  constructor() {
                    this.FromUEMessageHandlers = new Map()
                  }
                  addMessageHandler(messageId, messageHandler) {
                    this.FromUEMessageHandlers.set(messageId, messageHandler)
                  }
                  handleMessage(messageId, messageData) {
                    if (this.FromUEMessageHandlers.has(messageId)) {
                      this.FromUEMessageHandlers.get(messageId)(messageData)
                    } else {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Error(
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        `Message type of ${messageId} does not have a message handler registered on the frontend - ignoring message.`
                      )
                    }
                  }
                  /**
                   * Setup any default signalling message handling, these can be overridden or additional handlers added with `addMessageHandler`.
                   * @param websocketController The controller to setup these handlers on.
                   */
                  static setupDefaultHandlers(websocketController) {
                    // PING
                    websocketController.signallingProtocol.addMessageHandler(
                      _MessageReceive__WEBPACK_IMPORTED_MODULE_1__.MessageRecvTypes.PING,
                      (pingPayload) => {
                        // send our pong payload back to the signalling server
                        const pongPayload = new _MessageSend__WEBPACK_IMPORTED_MODULE_2__.MessagePong(
                          new Date().getTime()
                        ).payload()
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                          _MessageReceive__WEBPACK_IMPORTED_MODULE_1__.MessageRecvTypes.PING + ': ' + pingPayload,
                          6
                        )
                        websocketController.webSocket.send(pongPayload)
                      }
                    )
                    // CONFIG
                    websocketController.signallingProtocol.addMessageHandler(
                      _MessageReceive__WEBPACK_IMPORTED_MODULE_1__.MessageRecvTypes.CONFIG,
                      (configPayload) => {
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                          _MessageReceive__WEBPACK_IMPORTED_MODULE_1__.MessageRecvTypes.CONFIG,
                          6
                        )
                        const config = JSON.parse(configPayload)
                        websocketController.onConfig(config)
                      }
                    )
                    // STREAMER_LIST
                    websocketController.signallingProtocol.addMessageHandler(
                      _MessageReceive__WEBPACK_IMPORTED_MODULE_1__.MessageRecvTypes.STREAMER_LIST,
                      (listPayload) => {
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                          _MessageReceive__WEBPACK_IMPORTED_MODULE_1__.MessageRecvTypes.STREAMER_LIST,
                          6
                        )
                        const streamerList = JSON.parse(listPayload)
                        websocketController.onStreamerList(streamerList)
                      }
                    )
                    // PLAYER_COUNT
                    websocketController.signallingProtocol.addMessageHandler(
                      _MessageReceive__WEBPACK_IMPORTED_MODULE_1__.MessageRecvTypes.PLAYER_COUNT,
                      (playerCountPayload) => {
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                          _MessageReceive__WEBPACK_IMPORTED_MODULE_1__.MessageRecvTypes.PLAYER_COUNT,
                          6
                        )
                        const playerCount = JSON.parse(playerCountPayload)
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                          'Player Count: ' + playerCount.count,
                          6
                        )
                      }
                    )
                    // ANSWER
                    websocketController.signallingProtocol.addMessageHandler(
                      _MessageReceive__WEBPACK_IMPORTED_MODULE_1__.MessageRecvTypes.ANSWER,
                      (answerPayload) => {
                        // send our pong payload back to the signalling server
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                          _MessageReceive__WEBPACK_IMPORTED_MODULE_1__.MessageRecvTypes.ANSWER,
                          6
                        )
                        const answer = JSON.parse(answerPayload)
                        websocketController.onWebRtcAnswer(answer)
                      }
                    )
                    // OFFER
                    websocketController.signallingProtocol.addMessageHandler(
                      _MessageReceive__WEBPACK_IMPORTED_MODULE_1__.MessageRecvTypes.OFFER,
                      (offerPayload) => {
                        // send our pong payload back to the signalling server
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                          _MessageReceive__WEBPACK_IMPORTED_MODULE_1__.MessageRecvTypes.OFFER,
                          6
                        )
                        const offer = JSON.parse(offerPayload)
                        websocketController.onWebRtcOffer(offer)
                      }
                    )
                    // ICE CANDIDATE
                    websocketController.signallingProtocol.addMessageHandler(
                      _MessageReceive__WEBPACK_IMPORTED_MODULE_1__.MessageRecvTypes.ICE_CANDIDATE,
                      (iceCandidatePayload) => {
                        // send our pong payload back to the signalling server
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                          _MessageReceive__WEBPACK_IMPORTED_MODULE_1__.MessageRecvTypes.ICE_CANDIDATE,
                          6
                        )
                        const iceCandidate = JSON.parse(iceCandidatePayload)
                        websocketController.onIceCandidate(iceCandidate.candidate)
                      }
                    )
                    // WARNING
                    websocketController.signallingProtocol.addMessageHandler(
                      _MessageReceive__WEBPACK_IMPORTED_MODULE_1__.MessageRecvTypes.WARNING,
                      (warningPayload) => {
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Warning(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                          `Warning received: ${warningPayload}`
                        )
                      }
                    )
                    // PEER DATA CHANNELS
                    websocketController.signallingProtocol.addMessageHandler(
                      _MessageReceive__WEBPACK_IMPORTED_MODULE_1__.MessageRecvTypes.PEER_DATA_CHANNELS,
                      (peerDataChannelsPayload) => {
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                          _MessageReceive__WEBPACK_IMPORTED_MODULE_1__.MessageRecvTypes.PEER_DATA_CHANNELS,
                          6
                        )
                        const peerDataChannels = JSON.parse(peerDataChannelsPayload)
                        websocketController.onWebRtcPeerDataChannels(peerDataChannels)
                      }
                    )
                  }
                }

                /***/
              },

            /***/ './src/WebSockets/WebSocketController.ts':
              /*!***********************************************!*\
  !*** ./src/WebSockets/WebSocketController.ts ***!
  \***********************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_381138__) => {
                __nested_webpack_require_381138__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_381138__.d(__webpack_exports__, {
                  /* harmony export */ WebSocketController: () => /* binding */ WebSocketController
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__ =
                  __nested_webpack_require_381138__(/*! ../Logger/Logger */ './src/Logger/Logger.ts')
                /* harmony import */ var _MessageSend__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_381138__(
                  /*! ./MessageSend */ './src/WebSockets/MessageSend.ts'
                )
                /* harmony import */ var _SignallingProtocol__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_381138__(
                    /*! ./SignallingProtocol */ './src/WebSockets/SignallingProtocol.ts'
                  )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * The controller for the WebSocket and all associated methods
                 */
                class WebSocketController {
                  constructor() {
                    this.WS_OPEN_STATE = 1
                    this.onOpen = new EventTarget()
                    this.onClose = new EventTarget()
                    this.signallingProtocol = new _SignallingProtocol__WEBPACK_IMPORTED_MODULE_0__.SignallingProtocol()
                    _SignallingProtocol__WEBPACK_IMPORTED_MODULE_0__.SignallingProtocol.setupDefaultHandlers(this)
                  }
                  /**
                   * Connect to the signaling server
                   * @param connectionURL - The Address of the signaling server
                   * @returns - If there is a connection
                   */
                  connect(connectionURL) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                      connectionURL,
                      6
                    )
                    try {
                      this.webSocket = new WebSocket(connectionURL)
                      this.webSocket.onopen = (event) => this.handleOnOpen(event)
                      this.webSocket.onerror = () => this.handleOnError()
                      this.webSocket.onclose = (event) => this.handleOnClose(event)
                      this.webSocket.onmessage = (event) => this.handleOnMessage(event)
                      this.webSocket.onmessagebinary = (event) => this.handleOnMessageBinary(event)
                      return true
                    } catch (error) {
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(error, error)
                      return false
                    }
                  }
                  /**
                   * Handles what happens when a message is received in binary form
                   * @param event - Message Received
                   */
                  handleOnMessageBinary(event) {
                    // if the event is empty return
                    if (!event || !event.data) {
                      return
                    }
                    // handle the binary and then handle the message
                    event.data
                      .text()
                      .then((messageString) => {
                        // build a new message
                        const constructedMessage = new MessageEvent('messageFromBinary', {
                          data: messageString
                        })
                        // send the new stringified event back into `onmessage`
                        this.handleOnMessage(constructedMessage)
                      })
                      .catch((error) => {
                        _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(
                          _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                          `Failed to parse binary blob from websocket, reason: ${error}`
                        )
                      })
                  }
                  /**
                   * Handles what happens when a message is received
                   * @param event - Message Received
                   */
                  handleOnMessage(event) {
                    // Check if websocket message is binary, if so, stringify it.
                    if (event.data && event.data instanceof Blob) {
                      this.handleOnMessageBinary(event)
                      return
                    }
                    const message = JSON.parse(event.data)
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                      'received => \n' + JSON.stringify(JSON.parse(event.data), undefined, 4),
                      6
                    )
                    // Send to our signalling protocol to handle the incoming message
                    this.signallingProtocol.handleMessage(message.type, event.data)
                  }
                  /**
                   * Handles when the Websocket is opened
                   * @param event - Not Used
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                  handleOnOpen(event) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                      'Connected to the signalling server via WebSocket',
                      6
                    )
                    this.onOpen.dispatchEvent(new Event('open'))
                  }
                  /**
                   * Handles when there is an error on the websocket
                   * @param event - Error Payload
                   */
                  handleOnError() {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Error(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                      'WebSocket error'
                    )
                  }
                  /**
                   * Handles when the Websocket is closed
                   * @param event - Close Event
                   */
                  handleOnClose(event) {
                    this.onWebSocketOncloseOverlayMessage(event)
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                      'Disconnected to the signalling server via WebSocket: ' +
                        JSON.stringify(event.code) +
                        ' - ' +
                        event.reason
                    )
                    this.onClose.dispatchEvent(new Event('close'))
                  }
                  requestStreamerList() {
                    const payload = new _MessageSend__WEBPACK_IMPORTED_MODULE_2__.MessageListStreamers()
                    this.webSocket.send(payload.payload())
                  }
                  sendSubscribe(streamerid) {
                    const payload = new _MessageSend__WEBPACK_IMPORTED_MODULE_2__.MessageSubscribe(streamerid)
                    this.webSocket.send(payload.payload())
                  }
                  sendUnsubscribe() {
                    const payload = new _MessageSend__WEBPACK_IMPORTED_MODULE_2__.MessageUnsubscribe()
                    this.webSocket.send(payload.payload())
                  }
                  sendWebRtcOffer(offer) {
                    const payload = new _MessageSend__WEBPACK_IMPORTED_MODULE_2__.MessageWebRTCOffer(offer)
                    this.webSocket.send(payload.payload())
                  }
                  sendWebRtcAnswer(answer) {
                    const payload = new _MessageSend__WEBPACK_IMPORTED_MODULE_2__.MessageWebRTCAnswer(answer)
                    this.webSocket.send(payload.payload())
                  }
                  sendWebRtcDatachannelRequest() {
                    const payload = new _MessageSend__WEBPACK_IMPORTED_MODULE_2__.MessageWebRTCDatachannelRequest()
                    this.webSocket.send(payload.payload())
                  }
                  sendSFURecvDataChannelReady() {
                    const payload = new _MessageSend__WEBPACK_IMPORTED_MODULE_2__.MessageSFURecvDataChannelReady()
                    this.webSocket.send(payload.payload())
                  }
                  /**
                   * Sends an RTC Ice Candidate to the Server
                   * @param candidate - RTC Ice Candidate
                   */
                  sendIceCandidate(candidate) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                      'Sending Ice Candidate'
                    )
                    if (this.webSocket && this.webSocket.readyState === this.WS_OPEN_STATE) {
                      //ws.send(JSON.stringify({ type: 'iceCandidate', candidate: candidate }));
                      const IceCandidate = new _MessageSend__WEBPACK_IMPORTED_MODULE_2__.MessageIceCandidate(candidate)
                      this.webSocket.send(IceCandidate.payload())
                    }
                  }
                  /**
                   * Closes the Websocket connection
                   */
                  close() {
                    var _a
                    ;(_a = this.webSocket) === null || _a === void 0 ? void 0 : _a.close()
                  }
                  /** Event used for Displaying websocket closed messages */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
                  onWebSocketOncloseOverlayMessage(event) {}
                  /**
                   * The Message Contains the payload of the peer connection options used for the RTC Peer hand shake
                   * @param messageConfig - Config Message received from he signaling server
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
                  onConfig(messageConfig) {}
                  /**
                   * The Message Contains the payload of the peer connection options used for the RTC Peer hand shake
                   * @param messageConfig - Config Message received from he signaling server
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
                  onStreamerList(messageStreamerList) {}
                  /**
                   * @param iceCandidate - Ice Candidate sent from the Signaling server server's RTC hand shake
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
                  onIceCandidate(iceCandidate) {}
                  /**
                   * Event is fired when the websocket receives the answer for the RTC peer Connection
                   * @param messageAnswer - The RTC Answer payload from the signaling server
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
                  onWebRtcAnswer(messageAnswer) {}
                  /**
                   * Event is fired when the websocket receives the offer for the RTC peer Connection
                   * @param messageOffer - The sdp offer
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
                  onWebRtcOffer(messageOffer) {}
                  /**
                   * Event is fired when the websocket receives the data channels for the RTC peer Connection from the SFU
                   * @param messageDataChannels - The data channels details
                   */
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
                  onWebRtcPeerDataChannels(messageDataChannels) {}
                }

                /***/
              },

            /***/ './src/WebXR/WebXRController.ts':
              /*!**************************************!*\
  !*** ./src/WebXR/WebXRController.ts ***!
  \**************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_390943__) => {
                __nested_webpack_require_390943__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_390943__.d(__webpack_exports__, {
                  /* harmony export */ WebXRController: () => /* binding */ WebXRController
                  /* harmony export */
                })
                /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__ =
                  __nested_webpack_require_390943__(/*! ../Logger/Logger */ './src/Logger/Logger.ts')
                /* harmony import */ var _Util_WebGLUtils__WEBPACK_IMPORTED_MODULE_2__ =
                  __nested_webpack_require_390943__(/*! ../Util/WebGLUtils */ './src/Util/WebGLUtils.ts')
                /* harmony import */ var _Inputs_XRGamepadController__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_390943__(
                    /*! ../Inputs/XRGamepadController */ './src/Inputs/XRGamepadController.ts'
                  )
                /* harmony import */ var _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_4__ =
                  __nested_webpack_require_390943__(/*! ../Util/EventEmitter */ './src/Util/EventEmitter.ts')
                /* harmony import */ var _pixelstreamingfrontend__WEBPACK_IMPORTED_MODULE_3__ =
                  __nested_webpack_require_390943__(/*! ../pixelstreamingfrontend */ './src/Config/Config.ts')
                // Copyright Epic Games, Inc. All Rights Reserved.

                class WebXRController {
                  constructor(webRtcPlayerController) {
                    this.xrSession = null
                    this.webRtcController = webRtcPlayerController
                    this.xrControllers = []
                    this.xrGamepadController =
                      new _Inputs_XRGamepadController__WEBPACK_IMPORTED_MODULE_0__.XRGamepadController(
                        this.webRtcController.streamMessageController
                      )
                    this.onSessionEnded = new EventTarget()
                    this.onSessionStarted = new EventTarget()
                    this.onFrame = new EventTarget()
                  }
                  xrClicked() {
                    if (!this.xrSession) {
                      navigator.xr.requestSession('immersive-vr').then((session) => {
                        this.onXrSessionStarted(session)
                      })
                    } else {
                      this.xrSession.end()
                    }
                  }
                  onXrSessionEnded() {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                      'XR Session ended'
                    )
                    this.xrSession = null
                    this.onSessionEnded.dispatchEvent(new Event('xrSessionEnded'))
                  }
                  onXrSessionStarted(session) {
                    _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.Log(
                      _Logger_Logger__WEBPACK_IMPORTED_MODULE_1__.Logger.GetStackTrace(),
                      'XR Session started'
                    )
                    this.xrSession = session
                    this.xrSession.addEventListener('end', () => {
                      this.onXrSessionEnded()
                    })
                    const canvas = document.createElement('canvas')
                    this.gl = canvas.getContext('webgl2', {
                      xrCompatible: true
                    })
                    this.xrSession.updateRenderState({
                      baseLayer: new XRWebGLLayer(this.xrSession, this.gl)
                    })
                    // setup vertex shader
                    const vertexShader = this.gl.createShader(this.gl.VERTEX_SHADER)
                    this.gl.shaderSource(
                      vertexShader,
                      _Util_WebGLUtils__WEBPACK_IMPORTED_MODULE_2__.WebGLUtils.vertexShader()
                    )
                    this.gl.compileShader(vertexShader)
                    // setup fragment shader
                    const fragmentShader = this.gl.createShader(this.gl.FRAGMENT_SHADER)
                    this.gl.shaderSource(
                      fragmentShader,
                      _Util_WebGLUtils__WEBPACK_IMPORTED_MODULE_2__.WebGLUtils.fragmentShader()
                    )
                    this.gl.compileShader(fragmentShader)
                    // setup GLSL program
                    const shaderProgram = this.gl.createProgram()
                    this.gl.attachShader(shaderProgram, vertexShader)
                    this.gl.attachShader(shaderProgram, fragmentShader)
                    this.gl.linkProgram(shaderProgram)
                    this.gl.useProgram(shaderProgram)
                    // look up where vertex data needs to go
                    this.positionLocation = this.gl.getAttribLocation(shaderProgram, 'a_position')
                    this.texcoordLocation = this.gl.getAttribLocation(shaderProgram, 'a_texCoord')
                    // Create a buffer to put three 2d clip space points in
                    this.positionBuffer = this.gl.createBuffer()
                    // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer)
                    // Turn on the position attribute
                    this.gl.enableVertexAttribArray(this.positionLocation)
                    // Create a texture.
                    const texture = this.gl.createTexture()
                    this.gl.bindTexture(this.gl.TEXTURE_2D, texture)
                    // Set the parameters so we can render any size image.
                    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE)
                    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE)
                    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST)
                    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST)
                    this.texcoordBuffer = this.gl.createBuffer()
                    // lookup uniforms
                    this.resolutionLocation = this.gl.getUniformLocation(shaderProgram, 'u_resolution')
                    this.offsetLocation = this.gl.getUniformLocation(shaderProgram, 'u_offset')
                    session.requestReferenceSpace('local').then((refSpace) => {
                      this.xrRefSpace = refSpace
                      this.xrSession.requestAnimationFrame((time, frame) => this.onXrFrame(time, frame))
                    })
                    this.onSessionStarted.dispatchEvent(new Event('xrSessionStarted'))
                  }
                  onXrFrame(time, frame) {
                    const pose = frame.getViewerPose(this.xrRefSpace)
                    if (pose) {
                      const matrix = pose.transform.matrix
                      const mat = []
                      for (let i = 0; i < 16; i++) {
                        mat[i] = new Float32Array([matrix[i]])[0]
                      }
                      // prettier-ignore
                      this.webRtcController.streamMessageController.toStreamerHandlers.get('XRHMDTransform')([
                mat[0], mat[4], mat[8], mat[12],
                mat[1], mat[5], mat[9], mat[13],
                mat[2], mat[6], mat[10], mat[14],
                mat[3], mat[7], mat[11], mat[15]
            ]);
                      const glLayer = this.xrSession.renderState.baseLayer
                      // If we do have a valid pose, bind the WebGL layer's framebuffer,
                      // which is where any content to be displayed on the XRDevice must be
                      // rendered.
                      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, glLayer.framebuffer)
                      // Upload the image into the texture. WebGL knows how to extract the current frame from the video element
                      this.gl.texImage2D(
                        this.gl.TEXTURE_2D,
                        0,
                        this.gl.RGBA,
                        this.gl.RGBA,
                        this.gl.UNSIGNED_BYTE,
                        this.webRtcController.videoPlayer.getVideoElement()
                      )
                      this.render(this.webRtcController.videoPlayer.getVideoElement())
                    }
                    if (
                      this.webRtcController.config.isFlagEnabled(
                        _pixelstreamingfrontend__WEBPACK_IMPORTED_MODULE_3__.Flags.XRControllerInput
                      )
                    ) {
                      this.xrSession.inputSources.forEach((source, index, array) => {
                        this.xrGamepadController.updateStatus(source, frame, this.xrRefSpace)
                      }, this)
                    }
                    this.xrSession.requestAnimationFrame((time, frame) => this.onXrFrame(time, frame))
                    this.onFrame.dispatchEvent(
                      new _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_4__.XrFrameEvent({
                        time,
                        frame
                      })
                    )
                  }
                  render(videoElement) {
                    if (!this.gl) {
                      return
                    }
                    const glLayer = this.xrSession.renderState.baseLayer
                    this.gl.viewport(0, 0, glLayer.framebufferWidth, glLayer.framebufferHeight)
                    this.gl.uniform4f(this.offsetLocation, 1.0, 1.0, 0.0, 0.0)
                    // Set rectangle
                    // prettier-ignore
                    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
            0, 0,
            videoElement.videoWidth, 0,
            0, videoElement.videoHeight,
            0, videoElement.videoHeight,
            videoElement.videoWidth, 0,
            videoElement.videoWidth, videoElement.videoHeight
        ]), this.gl.STATIC_DRAW);
                    // Provide texture coordinates for the rectangle
                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texcoordBuffer)
                    this.gl.bufferData(
                      this.gl.ARRAY_BUFFER,
                      new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]),
                      this.gl.STATIC_DRAW
                    )
                    let size // components per iteration
                    let type // the data type
                    let normalize // normalize the data
                    let stride // 0 = move forward size * sizeof(type) each iteration to get the next position
                    let offset // start position of the buffer
                    // Bind the position buffer.
                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer)
                    // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
                    size = 2 // 2 components per iteration
                    type = this.gl.FLOAT // the data is 32bit floats
                    normalize = false // don't normalize the data
                    stride = 0 // 0 = move forward size * sizeof(type) each iteration to get the next position
                    offset = 0 // start at the beginning of the buffer
                    this.gl.vertexAttribPointer(this.positionLocation, size, type, normalize, stride, offset)
                    // Turn on the texcoord attribute
                    this.gl.enableVertexAttribArray(this.texcoordLocation)
                    // bind the texcoord buffer.
                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texcoordBuffer)
                    // Tell the texcoord attribute how to get data out of texcoordBuffer (ARRAY_BUFFER)
                    size = 2 // 2 components per iteration
                    type = this.gl.FLOAT // the data is 32bit floats
                    normalize = false // don't normalize the data
                    stride = 0 // 0 = move forward size * sizeof(type) each iteration to get the next position
                    offset = 0 // start at the beginning of the buffer
                    this.gl.vertexAttribPointer(this.texcoordLocation, size, type, normalize, stride, offset)
                    // set the resolution
                    this.gl.uniform2f(this.resolutionLocation, videoElement.videoWidth, videoElement.videoHeight)
                    // draw the rectangle.
                    const primitiveType = this.gl.TRIANGLES
                    const count = 6
                    offset = 0
                    this.gl.drawArrays(primitiveType, offset, count)
                  }
                  static isSessionSupported(mode) {
                    if (navigator.xr) {
                      return navigator.xr.isSessionSupported(mode)
                    } else {
                      return new Promise(() => {
                        return false
                      })
                    }
                  }
                }

                /***/
              },

            /***/ sdp:
              /*!**********************!*\
  !*** external "sdp" ***!
  \**********************/
              /***/ (module) => {
                var x = (y) => {
                  var x = {}
                  __nested_webpack_require_402084__.d(x, y)
                  return x
                }
                var y = (x) => () => x
                module.exports = sdp__WEBPACK_IMPORTED_MODULE_0__

                /***/
              }

            /******/
          }
          /************************************************************************/
          /******/ // The module cache
          /******/ var __webpack_module_cache__ = {}
          /******/
          /******/ // The require function
          /******/ function __nested_webpack_require_402084__(moduleId) {
            /******/ // Check if module is in cache
            /******/ var cachedModule = __webpack_module_cache__[moduleId]
            /******/ if (cachedModule !== undefined) {
              /******/ return cachedModule.exports
              /******/
            }
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = (__webpack_module_cache__[moduleId] = {
              /******/ // no module.id needed
              /******/ // no module.loaded needed
              /******/ exports: {}
              /******/
            })
            /******/
            /******/ // Execute the module function
            /******/ __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_402084__)
            /******/
            /******/ // Return the exports of the module
            /******/ return module.exports
            /******/
          }
          /******/
          /************************************************************************/
          /******/ /* webpack/runtime/define property getters */
          /******/ ;(() => {
            /******/ // define getter functions for harmony exports
            /******/ __nested_webpack_require_402084__.d = (exports, definition) => {
              /******/ for (var key in definition) {
                /******/ if (
                  __nested_webpack_require_402084__.o(definition, key) &&
                  !__nested_webpack_require_402084__.o(exports, key)
                ) {
                  /******/ Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: definition[key]
                  })
                  /******/
                }
                /******/
              }
              /******/
            }
            /******/
          })() /* webpack/runtime/hasOwnProperty shorthand */
          /******/
          /******/
          /******/
          ;(() => {
            /******/ __nested_webpack_require_402084__.o = (obj, prop) =>
              Object.prototype.hasOwnProperty.call(obj, prop)
            /******/
          })() /* webpack/runtime/make namespace object */
          /******/
          /******/
          /******/
          ;(() => {
            /******/ // define __esModule on exports
            /******/ __nested_webpack_require_402084__.r = (exports) => {
              /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                  value: 'Module'
                })
                /******/
              }
              /******/ Object.defineProperty(exports, '__esModule', {
                value: true
              })
              /******/
            }
            /******/
          })()
          /******/
          /************************************************************************/
          var __webpack_exports__ = {}
          // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
          ;(() => {
            /*!***************************************!*\
  !*** ./src/pixelstreamingfrontend.ts ***!
  \***************************************/
            __nested_webpack_require_402084__.r(__webpack_exports__)
            /* harmony export */ __nested_webpack_require_402084__.d(__webpack_exports__, {
              /* harmony export */ AfkLogic: () =>
                /* reexport safe */ _AFK_AFKController__WEBPACK_IMPORTED_MODULE_9__.AFKController,
              /* harmony export */ AfkTimedOutEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.AfkTimedOutEvent,
              /* harmony export */ AfkWarningActivateEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.AfkWarningActivateEvent,
              /* harmony export */ AfkWarningDeactivateEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.AfkWarningDeactivateEvent,
              /* harmony export */ AfkWarningUpdateEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.AfkWarningUpdateEvent,
              /* harmony export */ AggregatedStats: () =>
                /* reexport safe */ _PeerConnectionController_AggregatedStats__WEBPACK_IMPORTED_MODULE_12__.AggregatedStats,
              /* harmony export */ CandidatePairStats: () =>
                /* reexport safe */ _PeerConnectionController_CandidatePairStats__WEBPACK_IMPORTED_MODULE_19__.CandidatePairStats,
              /* harmony export */ CandidateStat: () =>
                /* reexport safe */ _PeerConnectionController_CandidateStat__WEBPACK_IMPORTED_MODULE_20__.CandidateStat,
              /* harmony export */ Config: () => /* reexport safe */ _Config_Config__WEBPACK_IMPORTED_MODULE_2__.Config,
              /* harmony export */ ControlSchemeType: () =>
                /* reexport safe */ _Config_Config__WEBPACK_IMPORTED_MODULE_2__.ControlSchemeType,
              /* harmony export */ DataChannelCloseEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.DataChannelCloseEvent,
              /* harmony export */ DataChannelErrorEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.DataChannelErrorEvent,
              /* harmony export */ DataChannelOpenEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.DataChannelOpenEvent,
              /* harmony export */ DataChannelStats: () =>
                /* reexport safe */ _PeerConnectionController_DataChannelStats__WEBPACK_IMPORTED_MODULE_21__.DataChannelStats,
              /* harmony export */ EncoderSettings: () =>
                /* reexport safe */ _DataChannel_InitialSettings__WEBPACK_IMPORTED_MODULE_11__.EncoderSettings,
              /* harmony export */ EventEmitter: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.EventEmitter,
              /* harmony export */ Flags: () => /* reexport safe */ _Config_Config__WEBPACK_IMPORTED_MODULE_2__.Flags,
              /* harmony export */ HideFreezeFrameEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.HideFreezeFrameEvent,
              /* harmony export */ InboundAudioStats: () =>
                /* reexport safe */ _PeerConnectionController_InboundRTPStats__WEBPACK_IMPORTED_MODULE_22__.InboundAudioStats,
              /* harmony export */ InboundVideoStats: () =>
                /* reexport safe */ _PeerConnectionController_InboundRTPStats__WEBPACK_IMPORTED_MODULE_22__.InboundVideoStats,
              /* harmony export */ InitialSettings: () =>
                /* reexport safe */ _DataChannel_InitialSettings__WEBPACK_IMPORTED_MODULE_11__.InitialSettings,
              /* harmony export */ InitialSettingsEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.InitialSettingsEvent,
              /* harmony export */ LatencyTestResultEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.LatencyTestResultEvent,
              /* harmony export */ LatencyTestResults: () =>
                /* reexport safe */ _DataChannel_LatencyTestResults__WEBPACK_IMPORTED_MODULE_10__.LatencyTestResults,
              /* harmony export */ LoadFreezeFrameEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.LoadFreezeFrameEvent,
              /* harmony export */ Logger: () =>
                /* reexport safe */ _Logger_Logger__WEBPACK_IMPORTED_MODULE_13__.Logger,
              /* harmony export */ MessageRecv: () =>
                /* reexport safe */ _WebSockets_MessageReceive__WEBPACK_IMPORTED_MODULE_16__.MessageRecv,
              /* harmony export */ MessageSend: () =>
                /* reexport safe */ _WebSockets_MessageSend__WEBPACK_IMPORTED_MODULE_15__.MessageSend,
              /* harmony export */ MessageStreamerList: () =>
                /* reexport safe */ _WebSockets_MessageReceive__WEBPACK_IMPORTED_MODULE_16__.MessageStreamerList,
              /* harmony export */ NumericParameters: () =>
                /* reexport safe */ _Config_Config__WEBPACK_IMPORTED_MODULE_2__.NumericParameters,
              /* harmony export */ OptionParameters: () =>
                /* reexport safe */ _Config_Config__WEBPACK_IMPORTED_MODULE_2__.OptionParameters,
              /* harmony export */ OutBoundVideoStats: () =>
                /* reexport safe */ _PeerConnectionController_OutBoundRTPStats__WEBPACK_IMPORTED_MODULE_23__.OutBoundVideoStats,
              /* harmony export */ PixelStreaming: () =>
                /* reexport safe */ _PixelStreaming_PixelStreaming__WEBPACK_IMPORTED_MODULE_8__.PixelStreaming,
              /* harmony export */ PlayStreamErrorEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.PlayStreamErrorEvent,
              /* harmony export */ PlayStreamEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.PlayStreamEvent,
              /* harmony export */ PlayStreamRejectedEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.PlayStreamRejectedEvent,
              /* harmony export */ SettingBase: () =>
                /* reexport safe */ _Config_SettingBase__WEBPACK_IMPORTED_MODULE_3__.SettingBase,
              /* harmony export */ SettingFlag: () =>
                /* reexport safe */ _Config_SettingFlag__WEBPACK_IMPORTED_MODULE_4__.SettingFlag,
              /* harmony export */ SettingNumber: () =>
                /* reexport safe */ _Config_SettingNumber__WEBPACK_IMPORTED_MODULE_5__.SettingNumber,
              /* harmony export */ SettingOption: () =>
                /* reexport safe */ _Config_SettingOption__WEBPACK_IMPORTED_MODULE_6__.SettingOption,
              /* harmony export */ SettingText: () =>
                /* reexport safe */ _Config_SettingText__WEBPACK_IMPORTED_MODULE_7__.SettingText,
              /* harmony export */ SettingsChangedEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.SettingsChangedEvent,
              /* harmony export */ SignallingProtocol: () =>
                /* reexport safe */ _WebSockets_SignallingProtocol__WEBPACK_IMPORTED_MODULE_18__.SignallingProtocol,
              /* harmony export */ StatsReceivedEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.StatsReceivedEvent,
              /* harmony export */ StreamLoadingEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.StreamLoadingEvent,
              /* harmony export */ StreamPreConnectEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.StreamPreConnectEvent,
              /* harmony export */ StreamPreDisconnectEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.StreamPreDisconnectEvent,
              /* harmony export */ StreamReconnectEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.StreamReconnectEvent,
              /* harmony export */ StreamerListMessageEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.StreamerListMessageEvent,
              /* harmony export */ TextParameters: () =>
                /* reexport safe */ _Config_Config__WEBPACK_IMPORTED_MODULE_2__.TextParameters,
              /* harmony export */ UnquantizedAndDenormalizeUnsigned: () =>
                /* reexport safe */ _Util_CoordinateConverter__WEBPACK_IMPORTED_MODULE_14__.UnquantizedDenormalizedUnsignedCoord,
              /* harmony export */ VideoEncoderAvgQPEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.VideoEncoderAvgQPEvent,
              /* harmony export */ VideoInitializedEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.VideoInitializedEvent,
              /* harmony export */ WebRTCSettings: () =>
                /* reexport safe */ _DataChannel_InitialSettings__WEBPACK_IMPORTED_MODULE_11__.WebRTCSettings,
              /* harmony export */ WebRtcAutoConnectEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.WebRtcAutoConnectEvent,
              /* harmony export */ WebRtcConnectedEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.WebRtcConnectedEvent,
              /* harmony export */ WebRtcConnectingEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.WebRtcConnectingEvent,
              /* harmony export */ WebRtcDisconnectedEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.WebRtcDisconnectedEvent,
              /* harmony export */ WebRtcFailedEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.WebRtcFailedEvent,
              /* harmony export */ WebRtcPlayerController: () =>
                /* reexport safe */ _WebRtcPlayer_WebRtcPlayerController__WEBPACK_IMPORTED_MODULE_0__.WebRtcPlayerController,
              /* harmony export */ WebRtcSdpEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.WebRtcSdpEvent,
              /* harmony export */ WebSocketController: () =>
                /* reexport safe */ _WebSockets_WebSocketController__WEBPACK_IMPORTED_MODULE_17__.WebSocketController,
              /* harmony export */ WebXRController: () =>
                /* reexport safe */ _WebXR_WebXRController__WEBPACK_IMPORTED_MODULE_1__.WebXRController,
              /* harmony export */ XrFrameEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.XrFrameEvent,
              /* harmony export */ XrSessionEndedEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.XrSessionEndedEvent,
              /* harmony export */ XrSessionStartedEvent: () =>
                /* reexport safe */ _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__.XrSessionStartedEvent
              /* harmony export */
            })
            /* harmony import */ var _WebRtcPlayer_WebRtcPlayerController__WEBPACK_IMPORTED_MODULE_0__ =
              __nested_webpack_require_402084__(
                /*! ./WebRtcPlayer/WebRtcPlayerController */ './src/WebRtcPlayer/WebRtcPlayerController.ts'
              )
            /* harmony import */ var _WebXR_WebXRController__WEBPACK_IMPORTED_MODULE_1__ =
              __nested_webpack_require_402084__(/*! ./WebXR/WebXRController */ './src/WebXR/WebXRController.ts')
            /* harmony import */ var _Config_Config__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_402084__(
              /*! ./Config/Config */ './src/Config/Config.ts'
            )
            /* harmony import */ var _Config_SettingBase__WEBPACK_IMPORTED_MODULE_3__ =
              __nested_webpack_require_402084__(/*! ./Config/SettingBase */ './src/Config/SettingBase.ts')
            /* harmony import */ var _Config_SettingFlag__WEBPACK_IMPORTED_MODULE_4__ =
              __nested_webpack_require_402084__(/*! ./Config/SettingFlag */ './src/Config/SettingFlag.ts')
            /* harmony import */ var _Config_SettingNumber__WEBPACK_IMPORTED_MODULE_5__ =
              __nested_webpack_require_402084__(/*! ./Config/SettingNumber */ './src/Config/SettingNumber.ts')
            /* harmony import */ var _Config_SettingOption__WEBPACK_IMPORTED_MODULE_6__ =
              __nested_webpack_require_402084__(/*! ./Config/SettingOption */ './src/Config/SettingOption.ts')
            /* harmony import */ var _Config_SettingText__WEBPACK_IMPORTED_MODULE_7__ =
              __nested_webpack_require_402084__(/*! ./Config/SettingText */ './src/Config/SettingText.ts')
            /* harmony import */ var _PixelStreaming_PixelStreaming__WEBPACK_IMPORTED_MODULE_8__ =
              __nested_webpack_require_402084__(
                /*! ./PixelStreaming/PixelStreaming */ './src/PixelStreaming/PixelStreaming.ts'
              )
            /* harmony import */ var _AFK_AFKController__WEBPACK_IMPORTED_MODULE_9__ =
              __nested_webpack_require_402084__(/*! ./AFK/AFKController */ './src/AFK/AFKController.ts')
            /* harmony import */ var _DataChannel_LatencyTestResults__WEBPACK_IMPORTED_MODULE_10__ =
              __nested_webpack_require_402084__(
                /*! ./DataChannel/LatencyTestResults */ './src/DataChannel/LatencyTestResults.ts'
              )
            /* harmony import */ var _DataChannel_InitialSettings__WEBPACK_IMPORTED_MODULE_11__ =
              __nested_webpack_require_402084__(
                /*! ./DataChannel/InitialSettings */ './src/DataChannel/InitialSettings.ts'
              )
            /* harmony import */ var _PeerConnectionController_AggregatedStats__WEBPACK_IMPORTED_MODULE_12__ =
              __nested_webpack_require_402084__(
                /*! ./PeerConnectionController/AggregatedStats */ './src/PeerConnectionController/AggregatedStats.ts'
              )
            /* harmony import */ var _Logger_Logger__WEBPACK_IMPORTED_MODULE_13__ = __nested_webpack_require_402084__(
              /*! ./Logger/Logger */ './src/Logger/Logger.ts'
            )
            /* harmony import */ var _Util_CoordinateConverter__WEBPACK_IMPORTED_MODULE_14__ =
              __nested_webpack_require_402084__(/*! ./Util/CoordinateConverter */ './src/Util/CoordinateConverter.ts')
            /* harmony import */ var _WebSockets_MessageSend__WEBPACK_IMPORTED_MODULE_15__ =
              __nested_webpack_require_402084__(/*! ./WebSockets/MessageSend */ './src/WebSockets/MessageSend.ts')
            /* harmony import */ var _WebSockets_MessageReceive__WEBPACK_IMPORTED_MODULE_16__ =
              __nested_webpack_require_402084__(/*! ./WebSockets/MessageReceive */ './src/WebSockets/MessageReceive.ts')
            /* harmony import */ var _WebSockets_WebSocketController__WEBPACK_IMPORTED_MODULE_17__ =
              __nested_webpack_require_402084__(
                /*! ./WebSockets/WebSocketController */ './src/WebSockets/WebSocketController.ts'
              )
            /* harmony import */ var _WebSockets_SignallingProtocol__WEBPACK_IMPORTED_MODULE_18__ =
              __nested_webpack_require_402084__(
                /*! ./WebSockets/SignallingProtocol */ './src/WebSockets/SignallingProtocol.ts'
              )
            /* harmony import */ var _PeerConnectionController_CandidatePairStats__WEBPACK_IMPORTED_MODULE_19__ =
              __nested_webpack_require_402084__(
                /*! ./PeerConnectionController/CandidatePairStats */ './src/PeerConnectionController/CandidatePairStats.ts'
              )
            /* harmony import */ var _PeerConnectionController_CandidateStat__WEBPACK_IMPORTED_MODULE_20__ =
              __nested_webpack_require_402084__(
                /*! ./PeerConnectionController/CandidateStat */ './src/PeerConnectionController/CandidateStat.ts'
              )
            /* harmony import */ var _PeerConnectionController_DataChannelStats__WEBPACK_IMPORTED_MODULE_21__ =
              __nested_webpack_require_402084__(
                /*! ./PeerConnectionController/DataChannelStats */ './src/PeerConnectionController/DataChannelStats.ts'
              )
            /* harmony import */ var _PeerConnectionController_InboundRTPStats__WEBPACK_IMPORTED_MODULE_22__ =
              __nested_webpack_require_402084__(
                /*! ./PeerConnectionController/InboundRTPStats */ './src/PeerConnectionController/InboundRTPStats.ts'
              )
            /* harmony import */ var _PeerConnectionController_OutBoundRTPStats__WEBPACK_IMPORTED_MODULE_23__ =
              __nested_webpack_require_402084__(
                /*! ./PeerConnectionController/OutBoundRTPStats */ './src/PeerConnectionController/OutBoundRTPStats.ts'
              )
            /* harmony import */ var _Util_EventEmitter__WEBPACK_IMPORTED_MODULE_24__ =
              __nested_webpack_require_402084__(/*! ./Util/EventEmitter */ './src/Util/EventEmitter.ts')
            // Copyright Epic Games, Inc. All Rights Reserved.
          })()

          var __webpack_exports__AfkLogic = __webpack_exports__.AfkLogic
          var __webpack_exports__AfkTimedOutEvent = __webpack_exports__.AfkTimedOutEvent
          var __webpack_exports__AfkWarningActivateEvent = __webpack_exports__.AfkWarningActivateEvent
          var __webpack_exports__AfkWarningDeactivateEvent = __webpack_exports__.AfkWarningDeactivateEvent
          var __webpack_exports__AfkWarningUpdateEvent = __webpack_exports__.AfkWarningUpdateEvent
          var __webpack_exports__AggregatedStats = __webpack_exports__.AggregatedStats
          var __webpack_exports__CandidatePairStats = __webpack_exports__.CandidatePairStats
          var __webpack_exports__CandidateStat = __webpack_exports__.CandidateStat
          var __webpack_exports__Config = __webpack_exports__.Config
          var __webpack_exports__ControlSchemeType = __webpack_exports__.ControlSchemeType
          var __webpack_exports__DataChannelCloseEvent = __webpack_exports__.DataChannelCloseEvent
          var __webpack_exports__DataChannelErrorEvent = __webpack_exports__.DataChannelErrorEvent
          var __webpack_exports__DataChannelOpenEvent = __webpack_exports__.DataChannelOpenEvent
          var __webpack_exports__DataChannelStats = __webpack_exports__.DataChannelStats
          var __webpack_exports__EncoderSettings = __webpack_exports__.EncoderSettings
          var __webpack_exports__EventEmitter = __webpack_exports__.EventEmitter
          var __webpack_exports__Flags = __webpack_exports__.Flags
          var __webpack_exports__HideFreezeFrameEvent = __webpack_exports__.HideFreezeFrameEvent
          var __webpack_exports__InboundAudioStats = __webpack_exports__.InboundAudioStats
          var __webpack_exports__InboundVideoStats = __webpack_exports__.InboundVideoStats
          var __webpack_exports__InitialSettings = __webpack_exports__.InitialSettings
          var __webpack_exports__InitialSettingsEvent = __webpack_exports__.InitialSettingsEvent
          var __webpack_exports__LatencyTestResultEvent = __webpack_exports__.LatencyTestResultEvent
          var __webpack_exports__LatencyTestResults = __webpack_exports__.LatencyTestResults
          var __webpack_exports__LoadFreezeFrameEvent = __webpack_exports__.LoadFreezeFrameEvent
          var __webpack_exports__Logger = __webpack_exports__.Logger
          var __webpack_exports__MessageRecv = __webpack_exports__.MessageRecv
          var __webpack_exports__MessageSend = __webpack_exports__.MessageSend
          var __webpack_exports__MessageStreamerList = __webpack_exports__.MessageStreamerList
          var __webpack_exports__NumericParameters = __webpack_exports__.NumericParameters
          var __webpack_exports__OptionParameters = __webpack_exports__.OptionParameters
          var __webpack_exports__OutBoundVideoStats = __webpack_exports__.OutBoundVideoStats
          var __webpack_exports__PixelStreaming = __webpack_exports__.PixelStreaming
          var __webpack_exports__PlayStreamErrorEvent = __webpack_exports__.PlayStreamErrorEvent
          var __webpack_exports__PlayStreamEvent = __webpack_exports__.PlayStreamEvent
          var __webpack_exports__PlayStreamRejectedEvent = __webpack_exports__.PlayStreamRejectedEvent
          var __webpack_exports__SettingBase = __webpack_exports__.SettingBase
          var __webpack_exports__SettingFlag = __webpack_exports__.SettingFlag
          var __webpack_exports__SettingNumber = __webpack_exports__.SettingNumber
          var __webpack_exports__SettingOption = __webpack_exports__.SettingOption
          var __webpack_exports__SettingText = __webpack_exports__.SettingText
          var __webpack_exports__SettingsChangedEvent = __webpack_exports__.SettingsChangedEvent
          var __webpack_exports__SignallingProtocol = __webpack_exports__.SignallingProtocol
          var __webpack_exports__StatsReceivedEvent = __webpack_exports__.StatsReceivedEvent
          var __webpack_exports__StreamLoadingEvent = __webpack_exports__.StreamLoadingEvent
          var __webpack_exports__StreamPreConnectEvent = __webpack_exports__.StreamPreConnectEvent
          var __webpack_exports__StreamPreDisconnectEvent = __webpack_exports__.StreamPreDisconnectEvent
          var __webpack_exports__StreamReconnectEvent = __webpack_exports__.StreamReconnectEvent
          var __webpack_exports__StreamerListMessageEvent = __webpack_exports__.StreamerListMessageEvent
          var __webpack_exports__TextParameters = __webpack_exports__.TextParameters
          var __webpack_exports__UnquantizedAndDenormalizeUnsigned =
            __webpack_exports__.UnquantizedAndDenormalizeUnsigned
          var __webpack_exports__VideoEncoderAvgQPEvent = __webpack_exports__.VideoEncoderAvgQPEvent
          var __webpack_exports__VideoInitializedEvent = __webpack_exports__.VideoInitializedEvent
          var __webpack_exports__WebRTCSettings = __webpack_exports__.WebRTCSettings
          var __webpack_exports__WebRtcAutoConnectEvent = __webpack_exports__.WebRtcAutoConnectEvent
          var __webpack_exports__WebRtcConnectedEvent = __webpack_exports__.WebRtcConnectedEvent
          var __webpack_exports__WebRtcConnectingEvent = __webpack_exports__.WebRtcConnectingEvent
          var __webpack_exports__WebRtcDisconnectedEvent = __webpack_exports__.WebRtcDisconnectedEvent
          var __webpack_exports__WebRtcFailedEvent = __webpack_exports__.WebRtcFailedEvent
          var __webpack_exports__WebRtcPlayerController = __webpack_exports__.WebRtcPlayerController
          var __webpack_exports__WebRtcSdpEvent = __webpack_exports__.WebRtcSdpEvent
          var __webpack_exports__WebSocketController = __webpack_exports__.WebSocketController
          var __webpack_exports__WebXRController = __webpack_exports__.WebXRController
          var __webpack_exports__XrFrameEvent = __webpack_exports__.XrFrameEvent
          var __webpack_exports__XrSessionEndedEvent = __webpack_exports__.XrSessionEndedEvent
          var __webpack_exports__XrSessionStartedEvent = __webpack_exports__.XrSessionStartedEvent
          /***/
        },

      /***/ '../../library/node_modules/sdp/sdp.js':
        /*!*********************************************!*\
  !*** ../../library/node_modules/sdp/sdp.js ***!
  \*********************************************/
        /***/ (module) => {
          /* eslint-env node */

          // SDP helpers.
          const SDPUtils = {}

          // Generate an alphanumeric identifier for cname or mids.
          // TODO: use UUIDs instead? https://gist.github.com/jed/982883
          SDPUtils.generateIdentifier = function () {
            return Math.random().toString(36).substring(2, 12)
          }

          // The RTCP CNAME used by all peerconnections from the same JS.
          SDPUtils.localCName = SDPUtils.generateIdentifier()

          // Splits SDP into lines, dealing with both CRLF and LF.
          SDPUtils.splitLines = function (blob) {
            return blob
              .trim()
              .split('\n')
              .map((line) => line.trim())
          }
          // Splits SDP into sessionpart and mediasections. Ensures CRLF.
          SDPUtils.splitSections = function (blob) {
            const parts = blob.split('\nm=')
            return parts.map((part, index) => (index > 0 ? 'm=' + part : part).trim() + '\r\n')
          }

          // Returns the session description.
          SDPUtils.getDescription = function (blob) {
            const sections = SDPUtils.splitSections(blob)
            return sections && sections[0]
          }

          // Returns the individual media sections.
          SDPUtils.getMediaSections = function (blob) {
            const sections = SDPUtils.splitSections(blob)
            sections.shift()
            return sections
          }

          // Returns lines that start with a certain prefix.
          SDPUtils.matchPrefix = function (blob, prefix) {
            return SDPUtils.splitLines(blob).filter((line) => line.indexOf(prefix) === 0)
          }

          // Parses an ICE candidate line. Sample input:
          // candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
          // rport 55996"
          // Input can be prefixed with a=.
          SDPUtils.parseCandidate = function (line) {
            let parts
            // Parse both variants.
            if (line.indexOf('a=candidate:') === 0) {
              parts = line.substring(12).split(' ')
            } else {
              parts = line.substring(10).split(' ')
            }

            const candidate = {
              foundation: parts[0],
              component: { 1: 'rtp', 2: 'rtcp' }[parts[1]] || parts[1],
              protocol: parts[2].toLowerCase(),
              priority: parseInt(parts[3], 10),
              ip: parts[4],
              address: parts[4], // address is an alias for ip.
              port: parseInt(parts[5], 10),
              // skip parts[6] == 'typ'
              type: parts[7]
            }

            for (let i = 8; i < parts.length; i += 2) {
              switch (parts[i]) {
                case 'raddr':
                  candidate.relatedAddress = parts[i + 1]
                  break
                case 'rport':
                  candidate.relatedPort = parseInt(parts[i + 1], 10)
                  break
                case 'tcptype':
                  candidate.tcpType = parts[i + 1]
                  break
                case 'ufrag':
                  candidate.ufrag = parts[i + 1] // for backward compatibility.
                  candidate.usernameFragment = parts[i + 1]
                  break
                default: // extension handling, in particular ufrag. Don't overwrite.
                  if (candidate[parts[i]] === undefined) {
                    candidate[parts[i]] = parts[i + 1]
                  }
                  break
              }
            }
            return candidate
          }

          // Translates a candidate object into SDP candidate attribute.
          // This does not include the a= prefix!
          SDPUtils.writeCandidate = function (candidate) {
            const sdp = []
            sdp.push(candidate.foundation)

            const component = candidate.component
            if (component === 'rtp') {
              sdp.push(1)
            } else if (component === 'rtcp') {
              sdp.push(2)
            } else {
              sdp.push(component)
            }
            sdp.push(candidate.protocol.toUpperCase())
            sdp.push(candidate.priority)
            sdp.push(candidate.address || candidate.ip)
            sdp.push(candidate.port)

            const type = candidate.type
            sdp.push('typ')
            sdp.push(type)
            if (type !== 'host' && candidate.relatedAddress && candidate.relatedPort) {
              sdp.push('raddr')
              sdp.push(candidate.relatedAddress)
              sdp.push('rport')
              sdp.push(candidate.relatedPort)
            }
            if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
              sdp.push('tcptype')
              sdp.push(candidate.tcpType)
            }
            if (candidate.usernameFragment || candidate.ufrag) {
              sdp.push('ufrag')
              sdp.push(candidate.usernameFragment || candidate.ufrag)
            }
            return 'candidate:' + sdp.join(' ')
          }

          // Parses an ice-options line, returns an array of option tags.
          // Sample input:
          // a=ice-options:foo bar
          SDPUtils.parseIceOptions = function (line) {
            return line.substring(14).split(' ')
          }

          // Parses a rtpmap line, returns RTCRtpCoddecParameters. Sample input:
          // a=rtpmap:111 opus/48000/2
          SDPUtils.parseRtpMap = function (line) {
            let parts = line.substring(9).split(' ')
            const parsed = {
              payloadType: parseInt(parts.shift(), 10) // was: id
            }

            parts = parts[0].split('/')

            parsed.name = parts[0]
            parsed.clockRate = parseInt(parts[1], 10) // was: clockrate
            parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1
            // legacy alias, got renamed back to channels in ORTC.
            parsed.numChannels = parsed.channels
            return parsed
          }

          // Generates a rtpmap line from RTCRtpCodecCapability or
          // RTCRtpCodecParameters.
          SDPUtils.writeRtpMap = function (codec) {
            let pt = codec.payloadType
            if (codec.preferredPayloadType !== undefined) {
              pt = codec.preferredPayloadType
            }
            const channels = codec.channels || codec.numChannels || 1
            return (
              'a=rtpmap:' +
              pt +
              ' ' +
              codec.name +
              '/' +
              codec.clockRate +
              (channels !== 1 ? '/' + channels : '') +
              '\r\n'
            )
          }

          // Parses a extmap line (headerextension from RFC 5285). Sample input:
          // a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
          // a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
          SDPUtils.parseExtmap = function (line) {
            const parts = line.substring(9).split(' ')
            return {
              id: parseInt(parts[0], 10),
              direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
              uri: parts[1],
              attributes: parts.slice(2).join(' ')
            }
          }

          // Generates an extmap line from RTCRtpHeaderExtensionParameters or
          // RTCRtpHeaderExtension.
          SDPUtils.writeExtmap = function (headerExtension) {
            return (
              'a=extmap:' +
              (headerExtension.id || headerExtension.preferredId) +
              (headerExtension.direction && headerExtension.direction !== 'sendrecv'
                ? '/' + headerExtension.direction
                : '') +
              ' ' +
              headerExtension.uri +
              (headerExtension.attributes ? ' ' + headerExtension.attributes : '') +
              '\r\n'
            )
          }

          // Parses a fmtp line, returns dictionary. Sample input:
          // a=fmtp:96 vbr=on;cng=on
          // Also deals with vbr=on; cng=on
          SDPUtils.parseFmtp = function (line) {
            const parsed = {}
            let kv
            const parts = line.substring(line.indexOf(' ') + 1).split(';')
            for (let j = 0; j < parts.length; j++) {
              kv = parts[j].trim().split('=')
              parsed[kv[0].trim()] = kv[1]
            }
            return parsed
          }

          // Generates a fmtp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
          SDPUtils.writeFmtp = function (codec) {
            let line = ''
            let pt = codec.payloadType
            if (codec.preferredPayloadType !== undefined) {
              pt = codec.preferredPayloadType
            }
            if (codec.parameters && Object.keys(codec.parameters).length) {
              const params = []
              Object.keys(codec.parameters).forEach((param) => {
                if (codec.parameters[param] !== undefined) {
                  params.push(param + '=' + codec.parameters[param])
                } else {
                  params.push(param)
                }
              })
              line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n'
            }
            return line
          }

          // Parses a rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
          // a=rtcp-fb:98 nack rpsi
          SDPUtils.parseRtcpFb = function (line) {
            const parts = line.substring(line.indexOf(' ') + 1).split(' ')
            return {
              type: parts.shift(),
              parameter: parts.join(' ')
            }
          }

          // Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
          SDPUtils.writeRtcpFb = function (codec) {
            let lines = ''
            let pt = codec.payloadType
            if (codec.preferredPayloadType !== undefined) {
              pt = codec.preferredPayloadType
            }
            if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
              // FIXME: special handling for trr-int?
              codec.rtcpFeedback.forEach((fb) => {
                lines +=
                  'a=rtcp-fb:' +
                  pt +
                  ' ' +
                  fb.type +
                  (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
                  '\r\n'
              })
            }
            return lines
          }

          // Parses a RFC 5576 ssrc media attribute. Sample input:
          // a=ssrc:3735928559 cname:something
          SDPUtils.parseSsrcMedia = function (line) {
            const sp = line.indexOf(' ')
            const parts = {
              ssrc: parseInt(line.substring(7, sp), 10)
            }
            const colon = line.indexOf(':', sp)
            if (colon > -1) {
              parts.attribute = line.substring(sp + 1, colon)
              parts.value = line.substring(colon + 1)
            } else {
              parts.attribute = line.substring(sp + 1)
            }
            return parts
          }

          // Parse a ssrc-group line (see RFC 5576). Sample input:
          // a=ssrc-group:semantics 12 34
          SDPUtils.parseSsrcGroup = function (line) {
            const parts = line.substring(13).split(' ')
            return {
              semantics: parts.shift(),
              ssrcs: parts.map((ssrc) => parseInt(ssrc, 10))
            }
          }

          // Extracts the MID (RFC 5888) from a media section.
          // Returns the MID or undefined if no mid line was found.
          SDPUtils.getMid = function (mediaSection) {
            const mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0]
            if (mid) {
              return mid.substring(6)
            }
          }

          // Parses a fingerprint line for DTLS-SRTP.
          SDPUtils.parseFingerprint = function (line) {
            const parts = line.substring(14).split(' ')
            return {
              algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
              value: parts[1].toUpperCase() // the definition is upper-case in RFC 4572.
            }
          }

          // Extracts DTLS parameters from SDP media section or sessionpart.
          // FIXME: for consistency with other functions this should only
          //   get the fingerprint line as input. See also getIceParameters.
          SDPUtils.getDtlsParameters = function (mediaSection, sessionpart) {
            const lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=fingerprint:')
            // Note: a=setup line is ignored since we use the 'auto' role in Edge.
            return {
              role: 'auto',
              fingerprints: lines.map(SDPUtils.parseFingerprint)
            }
          }

          // Serializes DTLS parameters to SDP.
          SDPUtils.writeDtlsParameters = function (params, setupType) {
            let sdp = 'a=setup:' + setupType + '\r\n'
            params.fingerprints.forEach((fp) => {
              sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n'
            })
            return sdp
          }

          // Parses a=crypto lines into
          //   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#dictionary-rtcsrtpsdesparameters-members
          SDPUtils.parseCryptoLine = function (line) {
            const parts = line.substring(9).split(' ')
            return {
              tag: parseInt(parts[0], 10),
              cryptoSuite: parts[1],
              keyParams: parts[2],
              sessionParams: parts.slice(3)
            }
          }

          SDPUtils.writeCryptoLine = function (parameters) {
            return (
              'a=crypto:' +
              parameters.tag +
              ' ' +
              parameters.cryptoSuite +
              ' ' +
              (typeof parameters.keyParams === 'object'
                ? SDPUtils.writeCryptoKeyParams(parameters.keyParams)
                : parameters.keyParams) +
              (parameters.sessionParams ? ' ' + parameters.sessionParams.join(' ') : '') +
              '\r\n'
            )
          }

          // Parses the crypto key parameters into
          //   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#rtcsrtpkeyparam*
          SDPUtils.parseCryptoKeyParams = function (keyParams) {
            if (keyParams.indexOf('inline:') !== 0) {
              return null
            }
            const parts = keyParams.substring(7).split('|')
            return {
              keyMethod: 'inline',
              keySalt: parts[0],
              lifeTime: parts[1],
              mkiValue: parts[2] ? parts[2].split(':')[0] : undefined,
              mkiLength: parts[2] ? parts[2].split(':')[1] : undefined
            }
          }

          SDPUtils.writeCryptoKeyParams = function (keyParams) {
            return (
              keyParams.keyMethod +
              ':' +
              keyParams.keySalt +
              (keyParams.lifeTime ? '|' + keyParams.lifeTime : '') +
              (keyParams.mkiValue && keyParams.mkiLength ? '|' + keyParams.mkiValue + ':' + keyParams.mkiLength : '')
            )
          }

          // Extracts all SDES parameters.
          SDPUtils.getCryptoParameters = function (mediaSection, sessionpart) {
            const lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=crypto:')
            return lines.map(SDPUtils.parseCryptoLine)
          }

          // Parses ICE information from SDP media section or sessionpart.
          // FIXME: for consistency with other functions this should only
          //   get the ice-ufrag and ice-pwd lines as input.
          SDPUtils.getIceParameters = function (mediaSection, sessionpart) {
            const ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=ice-ufrag:')[0]
            const pwd = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=ice-pwd:')[0]
            if (!(ufrag && pwd)) {
              return null
            }
            return {
              usernameFragment: ufrag.substring(12),
              password: pwd.substring(10)
            }
          }

          // Serializes ICE parameters to SDP.
          SDPUtils.writeIceParameters = function (params) {
            let sdp = 'a=ice-ufrag:' + params.usernameFragment + '\r\n' + 'a=ice-pwd:' + params.password + '\r\n'
            if (params.iceLite) {
              sdp += 'a=ice-lite\r\n'
            }
            return sdp
          }

          // Parses the SDP media section and returns RTCRtpParameters.
          SDPUtils.parseRtpParameters = function (mediaSection) {
            const description = {
              codecs: [],
              headerExtensions: [],
              fecMechanisms: [],
              rtcp: []
            }
            const lines = SDPUtils.splitLines(mediaSection)
            const mline = lines[0].split(' ')
            for (let i = 3; i < mline.length; i++) {
              // find all codecs from mline[3..]
              const pt = mline[i]
              const rtpmapline = SDPUtils.matchPrefix(mediaSection, 'a=rtpmap:' + pt + ' ')[0]
              if (rtpmapline) {
                const codec = SDPUtils.parseRtpMap(rtpmapline)
                const fmtps = SDPUtils.matchPrefix(mediaSection, 'a=fmtp:' + pt + ' ')
                // Only the first a=fmtp:<pt> is considered.
                codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {}
                codec.rtcpFeedback = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-fb:' + pt + ' ').map(
                  SDPUtils.parseRtcpFb
                )
                description.codecs.push(codec)
                // parse FEC mechanisms from rtpmap lines.
                switch (codec.name.toUpperCase()) {
                  case 'RED':
                  case 'ULPFEC':
                    description.fecMechanisms.push(codec.name.toUpperCase())
                    break
                  default: // only RED and ULPFEC are recognized as FEC mechanisms.
                    break
                }
              }
            }
            SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach((line) => {
              description.headerExtensions.push(SDPUtils.parseExtmap(line))
            })
            const wildcardRtcpFb = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-fb:* ').map(SDPUtils.parseRtcpFb)
            description.codecs.forEach((codec) => {
              wildcardRtcpFb.forEach((fb) => {
                const duplicate = codec.rtcpFeedback.find((existingFeedback) => {
                  return existingFeedback.type === fb.type && existingFeedback.parameter === fb.parameter
                })
                if (!duplicate) {
                  codec.rtcpFeedback.push(fb)
                }
              })
            })
            // FIXME: parse rtcp.
            return description
          }

          // Generates parts of the SDP media section describing the capabilities /
          // parameters.
          SDPUtils.writeRtpDescription = function (kind, caps) {
            let sdp = ''

            // Build the mline.
            sdp += 'm=' + kind + ' '
            sdp += caps.codecs.length > 0 ? '9' : '0' // reject if no codecs.
            sdp += ' UDP/TLS/RTP/SAVPF '
            sdp +=
              caps.codecs
                .map((codec) => {
                  if (codec.preferredPayloadType !== undefined) {
                    return codec.preferredPayloadType
                  }
                  return codec.payloadType
                })
                .join(' ') + '\r\n'

            sdp += 'c=IN IP4 0.0.0.0\r\n'
            sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n'

            // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
            caps.codecs.forEach((codec) => {
              sdp += SDPUtils.writeRtpMap(codec)
              sdp += SDPUtils.writeFmtp(codec)
              sdp += SDPUtils.writeRtcpFb(codec)
            })
            let maxptime = 0
            caps.codecs.forEach((codec) => {
              if (codec.maxptime > maxptime) {
                maxptime = codec.maxptime
              }
            })
            if (maxptime > 0) {
              sdp += 'a=maxptime:' + maxptime + '\r\n'
            }

            if (caps.headerExtensions) {
              caps.headerExtensions.forEach((extension) => {
                sdp += SDPUtils.writeExtmap(extension)
              })
            }
            // FIXME: write fecMechanisms.
            return sdp
          }

          // Parses the SDP media section and returns an array of
          // RTCRtpEncodingParameters.
          SDPUtils.parseRtpEncodingParameters = function (mediaSection) {
            const encodingParameters = []
            const description = SDPUtils.parseRtpParameters(mediaSection)
            const hasRed = description.fecMechanisms.indexOf('RED') !== -1
            const hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1

            // filter a=ssrc:... cname:, ignore PlanB-msid
            const ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
              .map((line) => SDPUtils.parseSsrcMedia(line))
              .filter((parts) => parts.attribute === 'cname')
            const primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc
            let secondarySsrc

            const flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID').map((line) => {
              const parts = line.substring(17).split(' ')
              return parts.map((part) => parseInt(part, 10))
            })
            if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
              secondarySsrc = flows[0][1]
            }

            description.codecs.forEach((codec) => {
              if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
                let encParam = {
                  ssrc: primarySsrc,
                  codecPayloadType: parseInt(codec.parameters.apt, 10)
                }
                if (primarySsrc && secondarySsrc) {
                  encParam.rtx = { ssrc: secondarySsrc }
                }
                encodingParameters.push(encParam)
                if (hasRed) {
                  encParam = JSON.parse(JSON.stringify(encParam))
                  encParam.fec = {
                    ssrc: primarySsrc,
                    mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
                  }
                  encodingParameters.push(encParam)
                }
              }
            })
            if (encodingParameters.length === 0 && primarySsrc) {
              encodingParameters.push({
                ssrc: primarySsrc
              })
            }

            // we support both b=AS and b=TIAS but interpret AS as TIAS.
            let bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=')
            if (bandwidth.length) {
              if (bandwidth[0].indexOf('b=TIAS:') === 0) {
                bandwidth = parseInt(bandwidth[0].substring(7), 10)
              } else if (bandwidth[0].indexOf('b=AS:') === 0) {
                // use formula from JSEP to convert b=AS to TIAS value.
                bandwidth = parseInt(bandwidth[0].substring(5), 10) * 1000 * 0.95 - 50 * 40 * 8
              } else {
                bandwidth = undefined
              }
              encodingParameters.forEach((params) => {
                params.maxBitrate = bandwidth
              })
            }
            return encodingParameters
          }

          // parses http://draft.ortc.org/#rtcrtcpparameters*
          SDPUtils.parseRtcpParameters = function (mediaSection) {
            const rtcpParameters = {}

            // Gets the first SSRC. Note that with RTX there might be multiple
            // SSRCs.
            const remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
              .map((line) => SDPUtils.parseSsrcMedia(line))
              .filter((obj) => obj.attribute === 'cname')[0]
            if (remoteSsrc) {
              rtcpParameters.cname = remoteSsrc.value
              rtcpParameters.ssrc = remoteSsrc.ssrc
            }

            // Edge uses the compound attribute instead of reducedSize
            // compound is !reducedSize
            const rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize')
            rtcpParameters.reducedSize = rsize.length > 0
            rtcpParameters.compound = rsize.length === 0

            // parses the rtcp-mux attrіbute.
            // Note that Edge does not support unmuxed RTCP.
            const mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux')
            rtcpParameters.mux = mux.length > 0

            return rtcpParameters
          }

          SDPUtils.writeRtcpParameters = function (rtcpParameters) {
            let sdp = ''
            if (rtcpParameters.reducedSize) {
              sdp += 'a=rtcp-rsize\r\n'
            }
            if (rtcpParameters.mux) {
              sdp += 'a=rtcp-mux\r\n'
            }
            if (rtcpParameters.ssrc !== undefined && rtcpParameters.cname) {
              sdp += 'a=ssrc:' + rtcpParameters.ssrc + ' cname:' + rtcpParameters.cname + '\r\n'
            }
            return sdp
          }

          // parses either a=msid: or a=ssrc:... msid lines and returns
          // the id of the MediaStream and MediaStreamTrack.
          SDPUtils.parseMsid = function (mediaSection) {
            let parts
            const spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:')
            if (spec.length === 1) {
              parts = spec[0].substring(7).split(' ')
              return { stream: parts[0], track: parts[1] }
            }
            const planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
              .map((line) => SDPUtils.parseSsrcMedia(line))
              .filter((msidParts) => msidParts.attribute === 'msid')
            if (planB.length > 0) {
              parts = planB[0].value.split(' ')
              return { stream: parts[0], track: parts[1] }
            }
          }

          // SCTP
          // parses draft-ietf-mmusic-sctp-sdp-26 first and falls back
          // to draft-ietf-mmusic-sctp-sdp-05
          SDPUtils.parseSctpDescription = function (mediaSection) {
            const mline = SDPUtils.parseMLine(mediaSection)
            const maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=max-message-size:')
            let maxMessageSize
            if (maxSizeLine.length > 0) {
              maxMessageSize = parseInt(maxSizeLine[0].substring(19), 10)
            }
            if (isNaN(maxMessageSize)) {
              maxMessageSize = 65536
            }
            const sctpPort = SDPUtils.matchPrefix(mediaSection, 'a=sctp-port:')
            if (sctpPort.length > 0) {
              return {
                port: parseInt(sctpPort[0].substring(12), 10),
                protocol: mline.fmt,
                maxMessageSize
              }
            }
            const sctpMapLines = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:')
            if (sctpMapLines.length > 0) {
              const parts = sctpMapLines[0].substring(10).split(' ')
              return {
                port: parseInt(parts[0], 10),
                protocol: parts[1],
                maxMessageSize
              }
            }
          }

          // SCTP
          // outputs the draft-ietf-mmusic-sctp-sdp-26 version that all browsers
          // support by now receiving in this format, unless we originally parsed
          // as the draft-ietf-mmusic-sctp-sdp-05 format (indicated by the m-line
          // protocol of DTLS/SCTP -- without UDP/ or TCP/)
          SDPUtils.writeSctpDescription = function (media, sctp) {
            let output = []
            if (media.protocol !== 'DTLS/SCTP') {
              output = [
                'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.protocol + '\r\n',
                'c=IN IP4 0.0.0.0\r\n',
                'a=sctp-port:' + sctp.port + '\r\n'
              ]
            } else {
              output = [
                'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.port + '\r\n',
                'c=IN IP4 0.0.0.0\r\n',
                'a=sctpmap:' + sctp.port + ' ' + sctp.protocol + ' 65535\r\n'
              ]
            }
            if (sctp.maxMessageSize !== undefined) {
              output.push('a=max-message-size:' + sctp.maxMessageSize + '\r\n')
            }
            return output.join('')
          }

          // Generate a session ID for SDP.
          // https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
          // recommends using a cryptographically random +ve 64-bit value
          // but right now this should be acceptable and within the right range
          SDPUtils.generateSessionId = function () {
            return Math.random().toString().substr(2, 22)
          }

          // Write boiler plate for start of SDP
          // sessId argument is optional - if not supplied it will
          // be generated randomly
          // sessVersion is optional and defaults to 2
          // sessUser is optional and defaults to 'thisisadapterortc'
          SDPUtils.writeSessionBoilerplate = function (sessId, sessVer, sessUser) {
            let sessionId
            const version = sessVer !== undefined ? sessVer : 2
            if (sessId) {
              sessionId = sessId
            } else {
              sessionId = SDPUtils.generateSessionId()
            }
            const user = sessUser || 'thisisadapterortc'
            // FIXME: sess-id should be an NTP timestamp.
            return (
              'v=0\r\n' +
              'o=' +
              user +
              ' ' +
              sessionId +
              ' ' +
              version +
              ' IN IP4 127.0.0.1\r\n' +
              's=-\r\n' +
              't=0 0\r\n'
            )
          }

          // Gets the direction from the mediaSection or the sessionpart.
          SDPUtils.getDirection = function (mediaSection, sessionpart) {
            // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
            const lines = SDPUtils.splitLines(mediaSection)
            for (let i = 0; i < lines.length; i++) {
              switch (lines[i]) {
                case 'a=sendrecv':
                case 'a=sendonly':
                case 'a=recvonly':
                case 'a=inactive':
                  return lines[i].substring(2)
                default:
                // FIXME: What should happen here?
              }
            }
            if (sessionpart) {
              return SDPUtils.getDirection(sessionpart)
            }
            return 'sendrecv'
          }

          SDPUtils.getKind = function (mediaSection) {
            const lines = SDPUtils.splitLines(mediaSection)
            const mline = lines[0].split(' ')
            return mline[0].substring(2)
          }

          SDPUtils.isRejected = function (mediaSection) {
            return mediaSection.split(' ', 2)[1] === '0'
          }

          SDPUtils.parseMLine = function (mediaSection) {
            const lines = SDPUtils.splitLines(mediaSection)
            const parts = lines[0].substring(2).split(' ')
            return {
              kind: parts[0],
              port: parseInt(parts[1], 10),
              protocol: parts[2],
              fmt: parts.slice(3).join(' ')
            }
          }

          SDPUtils.parseOLine = function (mediaSection) {
            const line = SDPUtils.matchPrefix(mediaSection, 'o=')[0]
            const parts = line.substring(2).split(' ')
            return {
              username: parts[0],
              sessionId: parts[1],
              sessionVersion: parseInt(parts[2], 10),
              netType: parts[3],
              addressType: parts[4],
              address: parts[5]
            }
          }

          // a very naive interpretation of a valid SDP.
          SDPUtils.isValidSDP = function (blob) {
            if (typeof blob !== 'string' || blob.length === 0) {
              return false
            }
            const lines = SDPUtils.splitLines(blob)
            for (let i = 0; i < lines.length; i++) {
              if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
                return false
              }
              // TODO: check the modifier a bit more.
            }
            return true
          }

          // Expose public methods.
          if (true) {
            module.exports = SDPUtils
          }

          /***/
        },

      /***/ '../../ui-library/dist/lib-pixelstreamingfrontend-ui.esm.js':
        /*!******************************************************************!*\
  !*** ../../ui-library/dist/lib-pixelstreamingfrontend-ui.esm.js ***!
  \******************************************************************/
        /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__)
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ AFKOverlay: () => /* binding */ __webpack_exports__AFKOverlay,
            /* harmony export */ ActionOverlay: () => /* binding */ __webpack_exports__ActionOverlay,
            /* harmony export */ Application: () => /* binding */ __webpack_exports__Application,
            /* harmony export */ ConfigUI: () => /* binding */ __webpack_exports__ConfigUI,
            /* harmony export */ ConnectOverlay: () => /* binding */ __webpack_exports__ConnectOverlay,
            /* harmony export */ DisconnectOverlay: () => /* binding */ __webpack_exports__DisconnectOverlay,
            /* harmony export */ ErrorOverlay: () => /* binding */ __webpack_exports__ErrorOverlay,
            /* harmony export */ InfoOverlay: () => /* binding */ __webpack_exports__InfoOverlay,
            /* harmony export */ OverlayBase: () => /* binding */ __webpack_exports__OverlayBase,
            /* harmony export */ PixelStreamingApplicationStyle: () =>
              /* binding */ __webpack_exports__PixelStreamingApplicationStyle,
            /* harmony export */ PlayOverlay: () => /* binding */ __webpack_exports__PlayOverlay,
            /* harmony export */ SettingUIBase: () => /* binding */ __webpack_exports__SettingUIBase,
            /* harmony export */ SettingUIFlag: () => /* binding */ __webpack_exports__SettingUIFlag,
            /* harmony export */ SettingUINumber: () => /* binding */ __webpack_exports__SettingUINumber,
            /* harmony export */ SettingUIOption: () => /* binding */ __webpack_exports__SettingUIOption,
            /* harmony export */ SettingUIText: () => /* binding */ __webpack_exports__SettingUIText,
            /* harmony export */ TextOverlay: () => /* binding */ __webpack_exports__TextOverlay,
            /* harmony export */ UIElementCreationMode: () => /* binding */ __webpack_exports__UIElementCreationMode
            /* harmony export */
          })
          /* harmony import */ var _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @epicgames-ps/lib-pixelstreamingfrontend-ue5.2 */ '../../library/dist/lib-pixelstreamingfrontend.esm.js'
            )
          /* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! jss */ '../../ui-library/node_modules/jss/dist/jss.esm.js'
          )
          /* harmony import */ var jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! jss-plugin-camel-case */ '../../ui-library/node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js'
          )
          /* harmony import */ var jss_plugin_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! jss-plugin-global */ '../../ui-library/node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js'
          )

          /******/ var __webpack_modules__ = {
            /***/ './src/Application/Application.ts':
              /*!****************************************!*\
  !*** ./src/Application/Application.ts ***!
  \****************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_673__) => {
                __nested_webpack_require_673__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_673__.d(__webpack_exports__, {
                  /* harmony export */ Application: () => /* binding */ Application
                  /* harmony export */
                })
                /* harmony import */ var _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_673__(
                    /*! @epicgames-ps/lib-pixelstreamingfrontend-ue5.2 */ '@epicgames-ps/lib-pixelstreamingfrontend-ue5.2'
                  )
                /* harmony import */ var _Overlay_ConnectOverlay__WEBPACK_IMPORTED_MODULE_7__ =
                  __nested_webpack_require_673__(/*! ../Overlay/ConnectOverlay */ './src/Overlay/ConnectOverlay.ts')
                /* harmony import */ var _Overlay_DisconnectOverlay__WEBPACK_IMPORTED_MODULE_6__ =
                  __nested_webpack_require_673__(
                    /*! ../Overlay/DisconnectOverlay */ './src/Overlay/DisconnectOverlay.ts'
                  )
                /* harmony import */ var _Overlay_PlayOverlay__WEBPACK_IMPORTED_MODULE_8__ =
                  __nested_webpack_require_673__(/*! ../Overlay/PlayOverlay */ './src/Overlay/PlayOverlay.ts')
                /* harmony import */ var _Overlay_InfoOverlay__WEBPACK_IMPORTED_MODULE_9__ =
                  __nested_webpack_require_673__(/*! ../Overlay/InfoOverlay */ './src/Overlay/InfoOverlay.ts')
                /* harmony import */ var _Overlay_ErrorOverlay__WEBPACK_IMPORTED_MODULE_10__ =
                  __nested_webpack_require_673__(/*! ../Overlay/ErrorOverlay */ './src/Overlay/ErrorOverlay.ts')
                /* harmony import */ var _Overlay_AFKOverlay__WEBPACK_IMPORTED_MODULE_11__ =
                  __nested_webpack_require_673__(/*! ../Overlay/AFKOverlay */ './src/Overlay/AFKOverlay.ts')
                /* harmony import */ var _UI_Controls__WEBPACK_IMPORTED_MODULE_12__ = __nested_webpack_require_673__(
                  /*! ../UI/Controls */ './src/UI/Controls.ts'
                )
                /* harmony import */ var _UI_LabelledButton__WEBPACK_IMPORTED_MODULE_14__ =
                  __nested_webpack_require_673__(/*! ../UI/LabelledButton */ './src/UI/LabelledButton.ts')
                /* harmony import */ var _UI_SettingsPanel__WEBPACK_IMPORTED_MODULE_4__ =
                  __nested_webpack_require_673__(/*! ../UI/SettingsPanel */ './src/UI/SettingsPanel.ts')
                /* harmony import */ var _UI_StatsPanel__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_673__(
                  /*! ../UI/StatsPanel */ './src/UI/StatsPanel.ts'
                )
                /* harmony import */ var _UI_VideoQpIndicator__WEBPACK_IMPORTED_MODULE_5__ =
                  __nested_webpack_require_673__(/*! ../UI/VideoQpIndicator */ './src/UI/VideoQpIndicator.ts')
                /* harmony import */ var _Config_ConfigUI__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_673__(
                  /*! ../Config/ConfigUI */ './src/Config/ConfigUI.ts'
                )
                /* harmony import */ var _UI_UIConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__ =
                  __nested_webpack_require_673__(/*! ../UI/UIConfigurationTypes */ './src/UI/UIConfigurationTypes.ts')
                /* harmony import */ var _UI_FullscreenIcon__WEBPACK_IMPORTED_MODULE_13__ =
                  __nested_webpack_require_673__(/*! ../UI/FullscreenIcon */ './src/UI/FullscreenIcon.ts')
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * An Application is a combination of UI elements to display and manage a WebRTC Pixel Streaming
                 * connection. It includes features for controlling a stream with mouse and keyboard,
                 * managing connection endpoints, as well as displaying stats and other information about it.
                 */
                class Application {
                  /**
                   * @param options - Initialization options
                   */
                  constructor(options) {
                    this._options = options
                    this.stream = options.stream
                    this.onColorModeChanged = options.onColorModeChanged
                    this.configUI = new _Config_ConfigUI__WEBPACK_IMPORTED_MODULE_1__.ConfigUI(this.stream.config)
                    this.createOverlays()
                    if (
                      (0, _UI_UIConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.isPanelEnabled)(
                        options.statsPanelConfig
                      )
                    ) {
                      // Add stats panel
                      this.statsPanel = new _UI_StatsPanel__WEBPACK_IMPORTED_MODULE_3__.StatsPanel()
                      this.uiFeaturesElement.appendChild(this.statsPanel.rootElement)
                    }
                    if (
                      (0, _UI_UIConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.isPanelEnabled)(
                        options.settingsPanelConfig
                      )
                    ) {
                      // Add settings panel
                      this.settingsPanel = new _UI_SettingsPanel__WEBPACK_IMPORTED_MODULE_4__.SettingsPanel()
                      this.uiFeaturesElement.appendChild(this.settingsPanel.rootElement)
                      this.configureSettings()
                    }
                    if (!options.videoQpIndicatorConfig || !options.videoQpIndicatorConfig.disableIndicator) {
                      // Add the video stream QP indicator
                      this.videoQpIndicator = new _UI_VideoQpIndicator__WEBPACK_IMPORTED_MODULE_5__.VideoQpIndicator()
                      this.uiFeaturesElement.appendChild(this.videoQpIndicator.rootElement)
                    }
                    this.createButtons()
                    this.registerCallbacks()
                    this.showConnectOrAutoConnectOverlays()
                    this.setColorMode(
                      this.configUI.isCustomFlagEnabled(_Config_ConfigUI__WEBPACK_IMPORTED_MODULE_1__.LightMode)
                    )
                  }
                  createOverlays() {
                    // build all of the overlays
                    this.disconnectOverlay =
                      new _Overlay_DisconnectOverlay__WEBPACK_IMPORTED_MODULE_6__.DisconnectOverlay(
                        this.stream.videoElementParent
                      )
                    this.connectOverlay = new _Overlay_ConnectOverlay__WEBPACK_IMPORTED_MODULE_7__.ConnectOverlay(
                      this.stream.videoElementParent
                    )
                    this.playOverlay = new _Overlay_PlayOverlay__WEBPACK_IMPORTED_MODULE_8__.PlayOverlay(
                      this.stream.videoElementParent
                    )
                    this.infoOverlay = new _Overlay_InfoOverlay__WEBPACK_IMPORTED_MODULE_9__.InfoOverlay(
                      this.stream.videoElementParent
                    )
                    this.errorOverlay = new _Overlay_ErrorOverlay__WEBPACK_IMPORTED_MODULE_10__.ErrorOverlay(
                      this.stream.videoElementParent
                    )
                    this.afkOverlay = new _Overlay_AFKOverlay__WEBPACK_IMPORTED_MODULE_11__.AFKOverlay(
                      this.stream.videoElementParent
                    )
                    this.disconnectOverlay.onAction(() => this.stream.reconnect())
                    // Build the webRtc connect overlay Event Listener and show the connect overlay
                    this.connectOverlay.onAction(() => this.stream.connect())
                    // set up the play overlays action
                    this.playOverlay.onAction(() => this.stream.play())
                  }
                  /**
                   * Set up button click functions and button functionality
                   */
                  createButtons() {
                    const controlsUIConfig = {
                      statsButtonType: !!this._options.statsPanelConfig
                        ? this._options.statsPanelConfig.visibilityButtonConfig
                        : undefined,
                      settingsButtonType: !!this._options.settingsPanelConfig
                        ? this._options.settingsPanelConfig.visibilityButtonConfig
                        : undefined,
                      fullscreenButtonType: this._options.fullScreenControlsConfig,
                      xrIconType: this._options.xrControlsConfig
                    }
                    // Setup controls
                    const controls = new _UI_Controls__WEBPACK_IMPORTED_MODULE_12__.Controls(controlsUIConfig)
                    // this.uiFeaturesElement.appendChild(controls.rootElement)
                    // When we fullscreen we want this element to be the root
                    const fullScreenButton =
                      // Depending on if we're creating an internal button, or using an external one
                      !!this._options.fullScreenControlsConfig &&
                      this._options.fullScreenControlsConfig.creationMode ===
                        _UI_UIConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.UIElementCreationMode.UseCustomElement
                        ? // Either create a fullscreen class based on the external button
                          new _UI_FullscreenIcon__WEBPACK_IMPORTED_MODULE_13__.FullScreenIconExternal(
                            this._options.fullScreenControlsConfig.customElement
                          )
                        : // Or use the one created by the Controls initializer earlier
                          controls.fullscreenIcon
                    if (fullScreenButton) {
                      fullScreenButton.fullscreenElement = /iPhone|iPod/.test(navigator.userAgent)
                        ? this.stream.videoElementParent.getElementsByTagName('video')[0]
                        : this.rootElement
                    }
                    // Add settings button to controls
                    const settingsButton = !!controls.settingsIcon
                      ? controls.settingsIcon.rootElement
                      : this._options.settingsPanelConfig.visibilityButtonConfig.customElement
                    if (!!settingsButton) settingsButton.onclick = () => this.settingsClicked()
                    if (!!this.settingsPanel)
                      this.settingsPanel.settingsCloseButton.onclick = () => this.settingsClicked()
                    // Add WebXR button to controls
                    const xrButton = !!controls.xrIcon
                      ? controls.xrIcon.rootElement
                      : this._options.xrControlsConfig.creationMode ===
                        _UI_UIConfigurationTypes__WEBPACK_IMPORTED_MODULE_2__.UIElementCreationMode.UseCustomElement
                      ? this._options.xrControlsConfig.customElement
                      : undefined
                    if (!!xrButton) xrButton.onclick = () => this.stream.toggleXR()
                    // setup the stats/info button
                    const statsButton = !!controls.statsIcon
                      ? controls.statsIcon.rootElement
                      : this._options.statsPanelConfig.visibilityButtonConfig.customElement
                    if (!!statsButton) statsButton.onclick = () => this.statsClicked()
                    if (!!this.statsPanel) {
                      this.statsPanel.statsCloseButton.onclick = () => this.statsClicked()
                    }
                    // Add command buttons (if we have somewhere to add them to)
                    if (!!this.settingsPanel) {
                      // Add button for toggle fps
                      const showFPSButton = new _UI_LabelledButton__WEBPACK_IMPORTED_MODULE_14__.LabelledButton(
                        'Show FPS',
                        'Toggle'
                      )
                      showFPSButton.addOnClickListener(() => {
                        this.stream.requestShowFps()
                      })
                      // Add button for restart stream
                      const restartStreamButton = new _UI_LabelledButton__WEBPACK_IMPORTED_MODULE_14__.LabelledButton(
                        'Restart Stream',
                        'Restart'
                      )
                      restartStreamButton.addOnClickListener(() => {
                        this.stream.reconnect()
                      })
                      // Add button for request keyframe
                      const requestKeyframeButton = new _UI_LabelledButton__WEBPACK_IMPORTED_MODULE_14__.LabelledButton(
                        'Request keyframe',
                        'Request'
                      )
                      requestKeyframeButton.addOnClickListener(() => {
                        this.stream.requestIframe()
                      })
                      const commandsSectionElem = this.configUI.buildSectionWithHeading(
                        this.settingsPanel.settingsContentElement,
                        'Commands'
                      )
                      commandsSectionElem.appendChild(showFPSButton.rootElement)
                      commandsSectionElem.appendChild(requestKeyframeButton.rootElement)
                      commandsSectionElem.appendChild(restartStreamButton.rootElement)
                    }
                  }
                  /**
                   * Configure the settings with on change listeners and any additional per experience settings.
                   */
                  configureSettings() {
                    // This builds all the settings sections and flags under this `settingsContent` element.
                    this.configUI.populateSettingsElement(this.settingsPanel.settingsContentElement)
                    this.configUI.addCustomFlagOnSettingChangedListener(
                      _Config_ConfigUI__WEBPACK_IMPORTED_MODULE_1__.LightMode,
                      (isLightMode) => {
                        this.configUI.setCustomFlagLabel(
                          _Config_ConfigUI__WEBPACK_IMPORTED_MODULE_1__.LightMode,
                          `Color Scheme: ${isLightMode ? 'Light' : 'Dark'} Mode`
                        )
                        this.setColorMode(isLightMode)
                      }
                    )
                  }
                  registerCallbacks() {
                    this.stream.addEventListener('afkWarningActivate', ({ data: { countDown, dismissAfk } }) =>
                      this.showAfkOverlay(countDown, dismissAfk)
                    )
                    this.stream.addEventListener('afkWarningUpdate', ({ data: { countDown } }) =>
                      this.afkOverlay.updateCountdown(countDown)
                    )
                    this.stream.addEventListener('afkWarningDeactivate', () => this.afkOverlay.hide())
                    this.stream.addEventListener('afkTimedOut', () => this.afkOverlay.hide())
                    this.stream.addEventListener('videoEncoderAvgQP', ({ data: { avgQP } }) =>
                      this.onVideoEncoderAvgQP(avgQP)
                    )
                    this.stream.addEventListener('webRtcSdp', () => this.onWebRtcSdp())
                    this.stream.addEventListener('webRtcAutoConnect', () => this.onWebRtcAutoConnect())
                    this.stream.addEventListener('webRtcConnecting', () => this.onWebRtcConnecting())
                    this.stream.addEventListener('webRtcConnected', () => this.onWebRtcConnected())
                    this.stream.addEventListener('webRtcFailed', () => this.onWebRtcFailed())
                    this.stream.addEventListener(
                      'webRtcDisconnected',
                      ({ data: { eventString, showActionOrErrorOnDisconnect } }) =>
                        this.onDisconnect(eventString, showActionOrErrorOnDisconnect)
                    )
                    this.stream.addEventListener('videoInitialized', () => this.onVideoInitialized())
                    this.stream.addEventListener('streamLoading', () => this.onStreamLoading())
                    this.stream.addEventListener('playStreamError', ({ data: { message } }) =>
                      this.onPlayStreamError(message)
                    )
                    this.stream.addEventListener('playStream', () => this.onPlayStream())
                    this.stream.addEventListener('playStreamRejected', ({ data: { reason } }) =>
                      this.onPlayStreamRejected(reason)
                    )
                    this.stream.addEventListener('loadFreezeFrame', ({ data: { shouldShowPlayOverlay } }) =>
                      this.onLoadFreezeFrame(shouldShowPlayOverlay)
                    )
                    this.stream.addEventListener('statsReceived', ({ data: { aggregatedStats } }) =>
                      this.onStatsReceived(aggregatedStats)
                    )
                    this.stream.addEventListener('latencyTestResult', ({ data: { latencyTimings } }) =>
                      this.onLatencyTestResults(latencyTimings)
                    )
                    this.stream.addEventListener(
                      'streamerListMessage',
                      ({ data: { messageStreamerList, autoSelectedStreamerId } }) =>
                        this.handleStreamerListMessage(messageStreamerList, autoSelectedStreamerId)
                    )
                    this.stream.addEventListener('settingsChanged', (event) => this.configUI.onSettingsChanged(event))
                  }
                  /**
                   * Gets the rootElement of the application, video stream and all UI are children of this element.
                   */
                  get rootElement() {
                    if (!this._rootElement) {
                      this._rootElement = document.createElement('div')
                      this._rootElement.id = 'playerUI'
                      this._rootElement.classList.add('noselect')
                      this._rootElement.appendChild(this.stream.videoElementParent)
                      this._rootElement.appendChild(this.uiFeaturesElement)
                    }
                    return this._rootElement
                  }
                  /**
                   * Gets the element that contains all the UI features, like the stats and settings panels.
                   */
                  get uiFeaturesElement() {
                    if (!this._uiFeatureElement) {
                      this._uiFeatureElement = document.createElement('div')
                      this._uiFeatureElement.id = 'uiFeatures'
                    }
                    return this._uiFeatureElement
                  }
                  /**
                   * Shows the disconnect overlay
                   * @param updateText - the text that will be displayed in the overlay
                   */
                  showDisconnectOverlay(updateText) {
                    this.hideCurrentOverlay()
                    this.updateDisconnectOverlay(updateText)
                    this.disconnectOverlay.show()
                    this.currentOverlay = this.disconnectOverlay
                  }
                  /**
                   * Update the disconnect overlays span text
                   * @param updateText - the new countdown number
                   */
                  updateDisconnectOverlay(updateText) {
                    this.disconnectOverlay.update(updateText)
                  }
                  /**
                   * Activates the disconnect overlays action
                   */
                  onDisconnectionAction() {
                    this.disconnectOverlay.activate()
                  }
                  /**
                   * Hides the current overlay
                   */
                  hideCurrentOverlay() {
                    if (this.currentOverlay != null) {
                      this.currentOverlay.hide()
                      this.currentOverlay = null
                    }
                  }
                  /**
                   * Shows the connect overlay
                   */
                  showConnectOverlay() {
                    this.hideCurrentOverlay()
                    this.connectOverlay.show()
                    this.currentOverlay = this.connectOverlay
                  }
                  /**
                   * Shows the play overlay
                   */
                  showPlayOverlay() {
                    this.hideCurrentOverlay()
                    this.playOverlay.show()
                    this.currentOverlay = this.playOverlay
                  }
                  /**
                   * Shows the text overlay
                   * @param text - the text that will be shown in the overlay
                   */
                  showTextOverlay(text) {
                    this.hideCurrentOverlay()
                    this.infoOverlay.update(text)
                    this.infoOverlay.show()
                    this.currentOverlay = this.infoOverlay
                  }
                  /**
                   * Shows the error overlay
                   * @param text - the text that will be shown in the overlay
                   */
                  showErrorOverlay(text) {
                    this.hideCurrentOverlay()
                    this.errorOverlay.update(text)
                    this.errorOverlay.show()
                    this.currentOverlay = this.errorOverlay
                  }
                  /**
                   * Shows or hides the settings panel if clicked
                   */
                  settingsClicked() {
                    this.statsPanel.hide()
                    this.settingsPanel.toggleVisibility()
                  }
                  /**
                   * Shows or hides the stats panel if clicked
                   */
                  statsClicked() {
                    this.settingsPanel.hide()
                    this.statsPanel.toggleVisibility()
                  }
                  /**
                   * Activates the connect overlays action
                   */
                  onConnectAction() {
                    this.connectOverlay.activate()
                  }
                  /**
                   * Activates the play overlays action
                   */
                  onPlayAction() {
                    this.playOverlay.activate()
                  }
                  /**
                   * Shows the afk overlay
                   * @param countDown - the countdown number for the afk countdown
                   */
                  showAfkOverlay(countDown, dismissAfk) {
                    this.hideCurrentOverlay()
                    this.afkOverlay.updateCountdown(countDown)
                    this.afkOverlay.onAction(() => dismissAfk())
                    this.afkOverlay.show()
                    this.currentOverlay = this.afkOverlay
                  }
                  /**
                   * Show the Connect Overlay or auto connect
                   */
                  showConnectOrAutoConnectOverlays() {
                    // set up if the auto play will be used or regular click to start
                    if (
                      !this.stream.config.isFlagEnabled(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags.AutoConnect
                      )
                    ) {
                      this.showConnectOverlay()
                    }
                  }
                  /**
                   * Show the webRtcAutoConnect Overlay and connect
                   */
                  onWebRtcAutoConnect() {
                    this.showTextOverlay('Auto Connecting Now')
                  }
                  /**
                   * Set up functionality to happen when receiving a webRTC answer
                   */
                  onWebRtcSdp() {
                    this.showTextOverlay('WebRTC Connection Negotiated')
                  }
                  /**
                   * Shows a text overlay to alert the user the stream is currently loading
                   */
                  onStreamLoading() {
                    // build the spinner span
                    const spinnerSpan = document.createElement('span')
                    spinnerSpan.className = 'visually-hidden'
                    spinnerSpan.innerHTML = 'Loading...'
                    // build the spinner div
                    const spinnerDiv = document.createElement('div')
                    spinnerDiv.id = 'loading-spinner'
                    spinnerDiv.className = 'spinner-border ms-2'
                    spinnerDiv.setAttribute('role', 'status')
                    // append the spinner to the element
                    spinnerDiv.appendChild(spinnerSpan)
                    this.showTextOverlay('Loading Stream ' + spinnerDiv.outerHTML)
                  }
                  /**
                   * Event fired when the video is disconnected - displays the error overlay and resets the buttons stream tools upon disconnect
                   * @param eventString - the event text that will be shown in the overlay
                   */
                  onDisconnect(eventString, showActionOrErrorOnDisconnect) {
                    if (showActionOrErrorOnDisconnect == false) {
                      this.showErrorOverlay(`Disconnected: ${eventString}`)
                    } else {
                      this.showDisconnectOverlay(
                        `Disconnected: ${eventString}  <div class="clickableState">Click To Restart</div>`
                      )
                    }
                    // disable starting a latency check
                    this.statsPanel.latencyTest.latencyTestButton.onclick = () => {
                      // do nothing
                    }
                  }
                  /**
                   * Handles when Web Rtc is connecting
                   */
                  onWebRtcConnecting() {
                    this.showTextOverlay('Starting connection to server, please wait')
                  }
                  /**
                   * Handles when Web Rtc has connected
                   */
                  onWebRtcConnected() {
                    this.showTextOverlay('WebRTC connected, waiting for video')
                  }
                  /**
                   * Handles when Web Rtc fails to connect
                   */
                  onWebRtcFailed() {
                    this.showErrorOverlay('Unable to setup video')
                  }
                  onLoadFreezeFrame(shouldShowPlayOverlay) {
                    if (shouldShowPlayOverlay === true) {
                      _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        'showing play overlay'
                      )
                      this.showPlayOverlay()
                    }
                  }
                  onPlayStream() {
                    this.hideCurrentOverlay()
                  }
                  onPlayStreamError(message) {
                    this.showErrorOverlay(message)
                  }
                  onPlayStreamRejected(onRejectedReason) {
                    this.showPlayOverlay()
                  }
                  onVideoInitialized() {
                    if (
                      !this.stream.config.isFlagEnabled(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags.AutoPlayVideo
                      )
                    ) {
                      this.showPlayOverlay()
                    }
                    // starting a latency check
                    this.statsPanel.latencyTest.latencyTestButton.onclick = () => {
                      this.stream.requestLatencyTest()
                    }
                  }
                  /**
                   * Set up functionality to happen when calculating the average video encoder qp
                   * @param QP - the quality number of the stream
                   */
                  onVideoEncoderAvgQP(QP) {
                    // Update internal QP indicator if one is present
                    if (!!this.videoQpIndicator) {
                      this.videoQpIndicator.updateQpTooltip(QP)
                    }
                  }
                  onInitialSettings(settings) {
                    if (settings.PixelStreamingSettings) {
                      const disableLatencyTest = settings.PixelStreamingSettings.DisableLatencyTest
                      if (disableLatencyTest) {
                        this.statsPanel.latencyTest.latencyTestButton.disabled = true
                        this.statsPanel.latencyTest.latencyTestButton.title =
                          'Disabled by -PixelStreamingDisableLatencyTester=true'
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Logger.Info(
                          _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                          '-PixelStreamingDisableLatencyTester=true, requesting latency report from the the browser to UE is disabled.'
                        )
                      }
                    }
                  }
                  onStatsReceived(aggregatedStats) {
                    // Grab all stats we can off the aggregated stats
                    this.statsPanel.handleStats(aggregatedStats)
                  }
                  onLatencyTestResults(latencyTimings) {
                    this.statsPanel.latencyTest.handleTestResult(latencyTimings)
                  }
                  handleStreamerListMessage(messageStreamingList, autoSelectedStreamerId) {
                    if (autoSelectedStreamerId === null) {
                      if (messageStreamingList.ids.length === 0) {
                        this.showDisconnectOverlay(
                          'No streamers connected. <div class="clickableState">Click To Restart</div>'
                        )
                      } else {
                        this.showTextOverlay(
                          'Multiple streamers detected. Use the dropdown in the settings menu to select the streamer'
                        )
                      }
                    }
                  }
                  /**
                   * Set light/dark color mode
                   * @param isLightMode - should we use a light or dark color scheme
                   */
                  setColorMode(isLightMode) {
                    if (this.onColorModeChanged) {
                      this.onColorModeChanged(isLightMode)
                    }
                  }
                }

                /***/
              },

            /***/ './src/Config/ConfigUI.ts':
              /*!********************************!*\
  !*** ./src/Config/ConfigUI.ts ***!
  \********************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_24309__) => {
                __nested_webpack_require_24309__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_24309__.d(__webpack_exports__, {
                  /* harmony export */ ConfigUI: () => /* binding */ ConfigUI,
                  /* harmony export */ LightMode: () => /* binding */ LightMode
                  /* harmony export */
                })
                /* harmony import */ var _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_24309__(
                    /*! @epicgames-ps/lib-pixelstreamingfrontend-ue5.2 */ '@epicgames-ps/lib-pixelstreamingfrontend-ue5.2'
                  )
                /* harmony import */ var _SettingUIFlag__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_24309__(
                  /*! ./SettingUIFlag */ './src/Config/SettingUIFlag.ts'
                )
                /* harmony import */ var _SettingUINumber__WEBPACK_IMPORTED_MODULE_3__ =
                  __nested_webpack_require_24309__(/*! ./SettingUINumber */ './src/Config/SettingUINumber.ts')
                /* harmony import */ var _SettingUIText__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_24309__(
                  /*! ./SettingUIText */ './src/Config/SettingUIText.ts'
                )
                /* harmony import */ var _SettingUIOption__WEBPACK_IMPORTED_MODULE_4__ =
                  __nested_webpack_require_24309__(/*! ./SettingUIOption */ './src/Config/SettingUIOption.ts')
                // Copyright Epic Games, Inc. All Rights Reserved.

                const LightMode = 'LightMode'
                class ConfigUI {
                  // ------------ Settings -----------------
                  constructor(config) {
                    this.customFlags = new Map()
                    /* A map of flags that can be toggled - options that can be set in the application - e.g. Use Mic? */
                    this.flagsUi = new Map()
                    /* A map of numerical settings - options that can be in the application - e.g. MinBitrate */
                    this.numericParametersUi = new Map()
                    /* A map of text settings - e.g. signalling server url */
                    this.textParametersUi = new Map()
                    /* A map of enum based settings - e.g. preferred codec */
                    this.optionParametersUi = new Map()
                    this.createCustomUISettings(config.useUrlParams)
                    this.registerSettingsUIComponents(config)
                  }
                  /**
                   * Create custom UI settings that are not provided by the Pixel Streaming library.
                   */
                  createCustomUISettings(useUrlParams) {
                    this.customFlags.set(
                      LightMode,
                      new _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.SettingFlag(
                        LightMode,
                        'Color Scheme: Dark Mode',
                        'Page styling will be either light or dark',
                        false /*if want to use system pref: (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches)*/,
                        useUrlParams,
                        (isLightMode, setting) => {
                          setting.label = `Color Scheme: ${isLightMode ? 'Light' : 'Dark'} Mode`
                        }
                      )
                    )
                  }
                  /**
                   * Creates UI wrapper components for each setting element in config.
                   * @param config
                   */
                  registerSettingsUIComponents(config) {
                    for (const setting of config.getFlags()) {
                      this.flagsUi.set(
                        setting.id,
                        new _SettingUIFlag__WEBPACK_IMPORTED_MODULE_1__.SettingUIFlag(setting)
                      )
                    }
                    for (const setting of Array.from(this.customFlags.values())) {
                      this.flagsUi.set(
                        setting.id,
                        new _SettingUIFlag__WEBPACK_IMPORTED_MODULE_1__.SettingUIFlag(setting)
                      )
                    }
                    for (const setting of config.getTextSettings()) {
                      this.textParametersUi.set(
                        setting.id,
                        new _SettingUIText__WEBPACK_IMPORTED_MODULE_2__.SettingUIText(setting)
                      )
                    }
                    for (const setting of config.getNumericSettings()) {
                      this.numericParametersUi.set(
                        setting.id,
                        new _SettingUINumber__WEBPACK_IMPORTED_MODULE_3__.SettingUINumber(setting)
                      )
                    }
                    for (const setting of config.getOptionSettings()) {
                      this.optionParametersUi.set(
                        setting.id,
                        new _SettingUIOption__WEBPACK_IMPORTED_MODULE_4__.SettingUIOption(setting)
                      )
                    }
                  }
                  /**
                   * Make DOM elements for a settings section with a heading.
                   * @param settingsElem The parent container for our DOM elements.
                   * @param sectionHeading The heading element to go into the section.
                   * @returns The constructed DOM element for the section.
                   */
                  buildSectionWithHeading(settingsElem, sectionHeading) {
                    // make section element
                    const sectionElem = document.createElement('section')
                    sectionElem.classList.add('settingsContainer')
                    // make section heading
                    const psSettingsHeader = document.createElement('div')
                    psSettingsHeader.classList.add('settingsHeader')
                    psSettingsHeader.classList.add('settings-text')
                    psSettingsHeader.textContent = sectionHeading
                    // add section and heading to parent settings element
                    sectionElem.appendChild(psSettingsHeader)
                    settingsElem.appendChild(sectionElem)
                    return sectionElem
                  }
                  /**
                   * Setup flags with their default values and add them to the `Config.flags` map.
                   * @param settingsElem - The element that contains all the individual settings sections, flags, and so on.
                   */
                  populateSettingsElement(settingsElem) {
                    /* Setup all Pixel Streaming specific settings */
                    const psSettingsSection = this.buildSectionWithHeading(settingsElem, 'Pixel Streaming')
                    // make settings show up in DOM
                    this.addSettingText(
                      psSettingsSection,
                      this.textParametersUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.TextParameters
                          .SignallingServerUrl
                      )
                    )
                    this.addSettingOption(
                      psSettingsSection,
                      this.optionParametersUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.OptionParameters
                          .StreamerId
                      )
                    )
                    this.addSettingFlag(
                      psSettingsSection,
                      this.flagsUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags.AutoConnect
                      )
                    )
                    this.addSettingFlag(
                      psSettingsSection,
                      this.flagsUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags.AutoPlayVideo
                      )
                    )
                    this.addSettingFlag(
                      psSettingsSection,
                      this.flagsUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags
                          .BrowserSendOffer
                      )
                    )
                    this.addSettingFlag(
                      psSettingsSection,
                      this.flagsUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags.UseMic
                      )
                    )
                    this.addSettingFlag(
                      psSettingsSection,
                      this.flagsUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags
                          .StartVideoMuted
                      )
                    )
                    this.addSettingFlag(
                      psSettingsSection,
                      this.flagsUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags.PreferSFU
                      )
                    )
                    this.addSettingFlag(
                      psSettingsSection,
                      this.flagsUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags
                          .IsQualityController
                      )
                    )
                    this.addSettingFlag(
                      psSettingsSection,
                      this.flagsUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags.ForceMonoAudio
                      )
                    )
                    this.addSettingFlag(
                      psSettingsSection,
                      this.flagsUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags.ForceTURN
                      )
                    )
                    this.addSettingFlag(
                      psSettingsSection,
                      this.flagsUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags
                          .SuppressBrowserKeys
                      )
                    )
                    this.addSettingFlag(
                      psSettingsSection,
                      this.flagsUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags.AFKDetection
                      )
                    )
                    this.addSettingNumeric(
                      psSettingsSection,
                      this.numericParametersUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.NumericParameters
                          .AFKTimeoutSecs
                      )
                    )
                    this.addSettingNumeric(
                      psSettingsSection,
                      this.numericParametersUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.NumericParameters
                          .MaxReconnectAttempts
                      )
                    )
                    /* Setup all view/ui related settings under this section */
                    const viewSettingsSection = this.buildSectionWithHeading(settingsElem, 'UI')
                    this.addSettingFlag(
                      viewSettingsSection,
                      this.flagsUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags
                          .MatchViewportResolution
                      )
                    )
                    this.addSettingFlag(
                      viewSettingsSection,
                      this.flagsUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags
                          .HoveringMouseMode
                      )
                    )
                    this.addSettingFlag(viewSettingsSection, this.flagsUi.get(LightMode))
                    /* Setup all encoder related settings under this section */
                    const inputSettingsSection = this.buildSectionWithHeading(settingsElem, 'Input')
                    this.addSettingFlag(
                      inputSettingsSection,
                      this.flagsUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags.KeyboardInput
                      )
                    )
                    this.addSettingFlag(
                      inputSettingsSection,
                      this.flagsUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags.MouseInput
                      )
                    )
                    this.addSettingFlag(
                      inputSettingsSection,
                      this.flagsUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags.TouchInput
                      )
                    )
                    this.addSettingFlag(
                      inputSettingsSection,
                      this.flagsUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags.GamepadInput
                      )
                    )
                    this.addSettingFlag(
                      inputSettingsSection,
                      this.flagsUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Flags
                          .XRControllerInput
                      )
                    )
                    /* Setup all encoder related settings under this section */
                    const encoderSettingsSection = this.buildSectionWithHeading(settingsElem, 'Encoder')
                    this.addSettingNumeric(
                      encoderSettingsSection,
                      this.numericParametersUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.NumericParameters
                          .MinQP
                      )
                    )
                    this.addSettingNumeric(
                      encoderSettingsSection,
                      this.numericParametersUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.NumericParameters
                          .MaxQP
                      )
                    )
                    const preferredCodecOption = this.optionParametersUi.get(
                      _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.OptionParameters
                        .PreferredCodec
                    )
                    this.addSettingOption(
                      encoderSettingsSection,
                      this.optionParametersUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.OptionParameters
                          .PreferredCodec
                      )
                    )
                    if (
                      preferredCodecOption &&
                      [...preferredCodecOption.selector.options]
                        .map((o) => o.value)
                        .includes('Only available on Chrome')
                    ) {
                      preferredCodecOption.disable()
                    }
                    /* Setup all webrtc related settings under this section */
                    const webrtcSettingsSection = this.buildSectionWithHeading(settingsElem, 'WebRTC')
                    this.addSettingNumeric(
                      webrtcSettingsSection,
                      this.numericParametersUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.NumericParameters
                          .WebRTCFPS
                      )
                    )
                    this.addSettingNumeric(
                      webrtcSettingsSection,
                      this.numericParametersUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.NumericParameters
                          .WebRTCMinBitrate
                      )
                    )
                    this.addSettingNumeric(
                      webrtcSettingsSection,
                      this.numericParametersUi.get(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.NumericParameters
                          .WebRTCMaxBitrate
                      )
                    )
                  }
                  /**
                   * Add a SettingText element to a particular settings section in the DOM and registers that text in the text settings map.
                   * @param settingsSection The settings section HTML element.
                   * @param settingText The textual settings object.
                   */
                  addSettingText(settingsSection, settingText) {
                    if (settingText) {
                      settingsSection.appendChild(settingText.rootElement)
                      this.textParametersUi.set(settingText.setting.id, settingText)
                    }
                  }
                  /**
                   * Add a SettingFlag element to a particular settings section in the DOM and registers that flag in the Config.flag map.
                   * @param settingsSection The settings section HTML element.
                   * @param settingFlag The settings flag object.
                   */
                  addSettingFlag(settingsSection, settingFlag) {
                    if (settingFlag) {
                      settingsSection.appendChild(settingFlag.rootElement)
                      this.flagsUi.set(settingFlag.setting.id, settingFlag)
                    }
                  }
                  /**
                   * Add a numeric setting element to a particular settings section in the DOM and registers that flag in the Config.numericParameters map.
                   * @param settingsSection The settings section HTML element.
                   * @param settingFlag The settings flag object.
                   */
                  addSettingNumeric(settingsSection, setting) {
                    if (setting) {
                      settingsSection.appendChild(setting.rootElement)
                      this.numericParametersUi.set(setting.setting.id, setting)
                    }
                  }
                  /**
                   * Add an enum based settings element to a particular settings section in the DOM and registers that flag in the Config.enumParameters map.
                   * @param settingsSection The settings section HTML element.
                   * @param settingFlag The settings flag object.
                   */
                  addSettingOption(settingsSection, setting) {
                    if (setting) {
                      settingsSection.appendChild(setting.rootElement)
                      this.optionParametersUi.set(setting.setting.id, setting)
                    }
                  }
                  onSettingsChanged({ data: { id, target, type } }) {
                    if (type === 'flag') {
                      const _id = id
                      const _target = target
                      const setting = this.flagsUi.get(_id)
                      if (setting) {
                        if (setting.flag !== _target.flag) {
                          setting.flag = _target.flag
                        }
                        if (setting.label !== _target.label) {
                          setting.label = _target.label
                        }
                      }
                    } else if (type === 'number') {
                      const _id = id
                      const _target = target
                      const setting = this.numericParametersUi.get(_id)
                      if (setting) {
                        if (setting.number !== _target.number) {
                          setting.number = _target.number
                        }
                        if (setting.label !== _target.label) {
                          setting.label = _target.label
                        }
                      }
                    } else if (type === 'text') {
                      const _id = id
                      const _target = target
                      const setting = this.textParametersUi.get(_id)
                      if (setting) {
                        if (setting.text !== _target.text) {
                          setting.text = _target.text
                        }
                        if (setting.label !== _target.label) {
                          setting.label = _target.label
                        }
                      }
                    } else if (type === 'option') {
                      const _id = id
                      const _target = target
                      const setting = this.optionParametersUi.get(_id)
                      if (setting) {
                        const uiOptions = setting.options
                        const targetOptions = _target.options
                        if (
                          uiOptions.length !== targetOptions.length ||
                          !uiOptions.every((value) => targetOptions.includes(value))
                        ) {
                          setting.options = _target.options
                        }
                        if (setting.selected !== _target.selected) {
                          setting.selected = _target.selected
                        }
                        if (setting.label !== _target.label) {
                          setting.label = _target.label
                        }
                      }
                    }
                  }
                  /**
                   * Add a callback to fire when the flag is toggled.
                   * @param id The id of the flag.
                   * @param onChangeListener The callback to fire when the value changes.
                   */
                  addCustomFlagOnSettingChangedListener(id, onChangeListener) {
                    if (this.customFlags.has(id)) {
                      this.customFlags.get(id).onChange = onChangeListener
                    }
                  }
                  /**
                   * Set the label for the flag.
                   * @param id The id of the flag.
                   * @param label The new label to use for the flag.
                   */
                  setCustomFlagLabel(id, label) {
                    if (!this.customFlags.has(id)) {
                      _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Logger.Warning(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        `Cannot set label for flag called ${id} - it does not exist in the Config.flags map.`
                      )
                    } else {
                      this.customFlags.get(id).label = label
                      this.flagsUi.get(id).label = label
                    }
                  }
                  /**
                   * Get the value of the configuration flag which has the given id.
                   * @param id The unique id for the flag.
                   * @returns True if the flag is enabled.
                   */
                  isCustomFlagEnabled(id) {
                    return this.customFlags.get(id).flag
                  }
                }

                /***/
              },

            /***/ './src/Config/SettingUIBase.ts':
              /*!*************************************!*\
  !*** ./src/Config/SettingUIBase.ts ***!
  \*************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_41424__) => {
                __nested_webpack_require_41424__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_41424__.d(__webpack_exports__, {
                  /* harmony export */ SettingUIBase: () => /* binding */ SettingUIBase
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * Base class for a setting that has a text label, an arbitrary setting value it stores, an a HTML element that represents this setting.
                 */
                class SettingUIBase {
                  constructor(setting) {
                    this._setting = setting
                  }
                  /**
                   * @returns The setting component.
                   */
                  get setting() {
                    return this._setting
                  }
                  /**
                   * @returns Return or creates a HTML element that represents this setting in the DOM.
                   */
                  get rootElement() {
                    if (!this._rootElement) {
                      this._rootElement = document.createElement('div')
                    }
                    return this._rootElement
                  }
                }

                /***/
              },

            /***/ './src/Config/SettingUIFlag.ts':
              /*!*************************************!*\
  !*** ./src/Config/SettingUIFlag.ts ***!
  \*************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_42594__) => {
                __nested_webpack_require_42594__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_42594__.d(__webpack_exports__, {
                  /* harmony export */ SettingUIFlag: () => /* binding */ SettingUIFlag
                  /* harmony export */
                })
                /* harmony import */ var _SettingUIBase__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_42594__(
                  /*! ./SettingUIBase */ './src/Config/SettingUIBase.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                class SettingUIFlag extends _SettingUIBase__WEBPACK_IMPORTED_MODULE_0__.SettingUIBase {
                  constructor(setting) {
                    super(setting)
                    this.label = setting.label
                    this.flag = setting.flag
                  }
                  /**
                   * @returns The setting component.
                   */
                  get setting() {
                    return this._setting
                  }
                  get settingsTextElem() {
                    if (!this._settingsTextElem) {
                      this._settingsTextElem = document.createElement('div')
                      this._settingsTextElem.innerText = this.setting._label
                      this._settingsTextElem.title = this.setting.description
                    }
                    return this._settingsTextElem
                  }
                  get checkbox() {
                    if (!this._checkbox) {
                      this._checkbox = document.createElement('input')
                      this._checkbox.type = 'checkbox'
                    }
                    return this._checkbox
                  }
                  /**
                   * @returns Return or creates a HTML element that represents this setting in the DOM.
                   */
                  get rootElement() {
                    if (!this._rootElement) {
                      // create root div with "setting" css class
                      this._rootElement = document.createElement('div')
                      this._rootElement.id = this.setting.id
                      this._rootElement.classList.add('setting')
                      // create div element to contain our setting's text
                      this._rootElement.appendChild(this.settingsTextElem)
                      // create label element to wrap out input type
                      const wrapperLabel = document.createElement('label')
                      wrapperLabel.classList.add('tgl-switch')
                      this._rootElement.appendChild(wrapperLabel)
                      // create input type=checkbox
                      this.checkbox.title = this.setting.description
                      this.checkbox.classList.add('tgl')
                      this.checkbox.classList.add('tgl-flat')
                      const slider = document.createElement('div')
                      slider.classList.add('tgl-slider')
                      wrapperLabel.appendChild(this.checkbox)
                      wrapperLabel.appendChild(slider)
                      // setup on change from checkbox
                      this.checkbox.addEventListener('change', () => {
                        if (this.setting.flag !== this.checkbox.checked) {
                          this.setting.flag = this.checkbox.checked
                          this.setting.updateURLParams()
                        }
                      })
                    }
                    return this._rootElement
                  }
                  /**
                   * Update the setting's stored value.
                   * @param inValue The new value for the setting.
                   */
                  set flag(inValue) {
                    this.checkbox.checked = inValue
                  }
                  /**
                   * Get value
                   */
                  get flag() {
                    return this.checkbox.checked
                  }
                  /**
                   * Set the label text for the setting.
                   * @param label setting label.
                   */
                  set label(inLabel) {
                    this.settingsTextElem.innerText = inLabel
                  }
                  /**
                   * Get label
                   */
                  get label() {
                    return this.settingsTextElem.innerText
                  }
                }

                /***/
              },

            /***/ './src/Config/SettingUINumber.ts':
              /*!***************************************!*\
  !*** ./src/Config/SettingUINumber.ts ***!
  \***************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_46320__) => {
                __nested_webpack_require_46320__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_46320__.d(__webpack_exports__, {
                  /* harmony export */ SettingUINumber: () => /* binding */ SettingUINumber
                  /* harmony export */
                })
                /* harmony import */ var _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_46320__(
                    /*! @epicgames-ps/lib-pixelstreamingfrontend-ue5.2 */ '@epicgames-ps/lib-pixelstreamingfrontend-ue5.2'
                  )
                /* harmony import */ var _SettingUIBase__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_46320__(
                  /*! ./SettingUIBase */ './src/Config/SettingUIBase.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * A number spinner with a text label beside it.
                 */
                class SettingUINumber extends _SettingUIBase__WEBPACK_IMPORTED_MODULE_1__.SettingUIBase {
                  constructor(setting) {
                    super(setting)
                    this.label = this.setting.label
                    this.number = this.setting.number
                  }
                  /**
                   * @returns The setting component.
                   */
                  get setting() {
                    return this._setting
                  }
                  get settingsTextElem() {
                    if (!this._settingsTextElem) {
                      this._settingsTextElem = document.createElement('label')
                      this._settingsTextElem.innerText = this.setting.label
                      this._settingsTextElem.title = this.setting.description
                    }
                    return this._settingsTextElem
                  }
                  /**
                   * Get the HTMLInputElement for the button.
                   */
                  get spinner() {
                    if (!this._spinner) {
                      this._spinner = document.createElement('input')
                      this._spinner.type = 'number'
                      this._spinner.min = this.setting.min.toString()
                      this._spinner.max = this.setting.max.toString()
                      this._spinner.value = this.setting.number.toString()
                      this._spinner.title = this.setting.description
                      this._spinner.classList.add('form-control')
                    }
                    return this._spinner
                  }
                  /**
                   * @returns Return or creates a HTML element that represents this setting in the DOM.
                   */
                  get rootElement() {
                    if (!this._rootElement) {
                      // create root div with "setting" css class
                      this._rootElement = document.createElement('div')
                      this._rootElement.classList.add('setting')
                      this._rootElement.classList.add('form-group')
                      // create div element to contain our setting's text
                      this._rootElement.appendChild(this.settingsTextElem)
                      // create label element to wrap out input type
                      this._rootElement.appendChild(this.spinner)
                      // setup onchange
                      this.spinner.onchange = (event) => {
                        const inputElem = event.target
                        const parsedValue = Number.parseInt(inputElem.value)
                        if (Number.isNaN(parsedValue)) {
                          _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Logger.Warning(
                            _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                            `Could not parse value change into a valid number - value was ${inputElem.value}, resetting value to ${this.setting.min}`
                          )
                          if (this.setting.number !== this.setting.min) {
                            this.setting.number = this.setting.min
                          }
                        } else {
                          if (this.setting.number !== parsedValue) {
                            this.setting.number = parsedValue
                            this.setting.updateURLParams()
                          }
                        }
                      }
                    }
                    return this._rootElement
                  }
                  /**
                   * Set the number in the spinner (will be clamped within range).
                   */
                  set number(newNumber) {
                    this.spinner.value = this.setting.clamp(newNumber).toString()
                  }
                  /**
                   * Get value
                   */
                  get number() {
                    return +this.spinner.value
                  }
                  /**
                   * Set the label text for the setting.
                   * @param label setting label.
                   */
                  set label(inLabel) {
                    this.settingsTextElem.innerText = inLabel
                  }
                  /**
                   * Get label
                   */
                  get label() {
                    return this.settingsTextElem.innerText
                  }
                }

                /***/
              },

            /***/ './src/Config/SettingUIOption.ts':
              /*!***************************************!*\
  !*** ./src/Config/SettingUIOption.ts ***!
  \***************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_50900__) => {
                __nested_webpack_require_50900__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_50900__.d(__webpack_exports__, {
                  /* harmony export */ SettingUIOption: () => /* binding */ SettingUIOption
                  /* harmony export */
                })
                /* harmony import */ var _SettingUIBase__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_50900__(
                  /*! ./SettingUIBase */ './src/Config/SettingUIBase.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                class SettingUIOption extends _SettingUIBase__WEBPACK_IMPORTED_MODULE_0__.SettingUIBase {
                  constructor(setting) {
                    super(setting)
                    this.label = this.setting.label
                    this.options = this.setting.options
                    this.selected = this.setting.selected
                  }
                  /**
                   * @returns The setting component.
                   */
                  get setting() {
                    return this._setting
                  }
                  get selector() {
                    if (!this._selector) {
                      this._selector = document.createElement('select')
                      this._selector.classList.add('form-control')
                      this._selector.classList.add('settings-option')
                    }
                    return this._selector
                  }
                  get settingsTextElem() {
                    if (!this._settingsTextElem) {
                      this._settingsTextElem = document.createElement('div')
                      this._settingsTextElem.innerText = this.setting.label
                      this._settingsTextElem.title = this.setting.description
                    }
                    return this._settingsTextElem
                  }
                  /**
                   * Set the label text for the setting.
                   * @param label setting label.
                   */
                  set label(inLabel) {
                    this.settingsTextElem.innerText = inLabel
                  }
                  /**
                   * Get label
                   */
                  get label() {
                    return this.settingsTextElem.innerText
                  }
                  /**
                   * @returns Return or creates a HTML element that represents this setting in the DOM.
                   */
                  get rootElement() {
                    if (!this._rootElement) {
                      // create root div with "setting" css class
                      this._rootElement = document.createElement('div')
                      this._rootElement.id = this.setting.id
                      this._rootElement.classList.add('setting')
                      this._rootElement.classList.add('form-group')
                      // create div element to contain our setting's text
                      this._rootElement.appendChild(this.settingsTextElem)
                      // create label element to wrap out input type
                      const wrapperLabel = document.createElement('label')
                      this._rootElement.appendChild(wrapperLabel)
                      // create select element
                      this.selector.title = this.setting.description
                      wrapperLabel.appendChild(this.selector)
                      // setup on change from selector
                      this.selector.onchange = () => {
                        if (this.setting.selected !== this.selector.value) {
                          this.setting.selected = this.selector.value
                          this.setting.updateURLParams()
                        }
                      }
                    }
                    return this._rootElement
                  }
                  set options(values) {
                    for (let i = this.selector.options.length - 1; i >= 0; i--) {
                      this.selector.remove(i)
                    }
                    values.forEach((value) => {
                      const opt = document.createElement('option')
                      opt.value = value
                      opt.innerHTML = value
                      this.selector.appendChild(opt)
                    })
                  }
                  get options() {
                    return [...this.selector.options].map((o) => o.value)
                  }
                  set selected(value) {
                    // A user may not specify the full possible value so we instead use the closest match.
                    // eg ?xxx=H264 would select 'H264 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f'
                    const filteredList = this.options.filter((option) => option.indexOf(value) !== -1)
                    if (filteredList.length) {
                      this.selector.value = filteredList[0]
                    }
                  }
                  get selected() {
                    return this.selector.value
                  }
                  disable() {
                    this.selector.disabled = true
                  }
                  enable() {
                    this.selector.disabled = false
                  }
                }

                /***/
              },

            /***/ './src/Config/SettingUIText.ts':
              /*!*************************************!*\
  !*** ./src/Config/SettingUIText.ts ***!
  \*************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_55302__) => {
                __nested_webpack_require_55302__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_55302__.d(__webpack_exports__, {
                  /* harmony export */ SettingUIText: () => /* binding */ SettingUIText
                  /* harmony export */
                })
                /* harmony import */ var _SettingUIBase__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_55302__(
                  /*! ./SettingUIBase */ './src/Config/SettingUIBase.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                class SettingUIText extends _SettingUIBase__WEBPACK_IMPORTED_MODULE_0__.SettingUIBase {
                  constructor(setting) {
                    super(setting)
                    this.label = this.setting.label
                    this.text = this.setting.text
                  }
                  /**
                   * @returns The setting component.
                   */
                  get setting() {
                    return this._setting
                  }
                  get settingsTextElem() {
                    if (!this._settingsTextElem) {
                      this._settingsTextElem = document.createElement('div')
                      this._settingsTextElem.innerText = this.setting.label
                      this._settingsTextElem.title = this.setting.description
                    }
                    return this._settingsTextElem
                  }
                  get textbox() {
                    if (!this._textbox) {
                      this._textbox = document.createElement('input')
                      this._textbox.classList.add('form-control')
                      this._textbox.type = 'textbox'
                    }
                    return this._textbox
                  }
                  /**
                   * @returns Return or creates a HTML element that represents this setting in the DOM.
                   */
                  get rootElement() {
                    if (!this._rootElement) {
                      // create root div with "setting" css class
                      this._rootElement = document.createElement('div')
                      this._rootElement.id = this.setting.id
                      this._rootElement.classList.add('setting')
                      // create div element to contain our setting's text
                      this._rootElement.appendChild(this.settingsTextElem)
                      // create label element to wrap out input type
                      const wrapperLabel = document.createElement('label')
                      this._rootElement.appendChild(wrapperLabel)
                      // create input type=checkbox
                      this.textbox.title = this.setting.description
                      wrapperLabel.appendChild(this.textbox)
                      // setup on change from checkbox
                      this.textbox.addEventListener('input', () => {
                        if (this.setting.text !== this.textbox.value) {
                          this.setting.text = this.textbox.value
                          this.setting.updateURLParams()
                        }
                      })
                    }
                    return this._rootElement
                  }
                  /**
                   * Update the setting's stored value.
                   * @param inValue The new value for the setting.
                   */
                  set text(inValue) {
                    this.textbox.value = inValue
                  }
                  /**
                   * Get value
                   */
                  get text() {
                    return this.textbox.value
                  }
                  /**
                   * Set the label text for the setting.
                   * @param label setting label.
                   */
                  set label(inLabel) {
                    this.settingsTextElem.innerText = inLabel
                  }
                  /**
                   * Get label
                   */
                  get label() {
                    return this.settingsTextElem.innerText
                  }
                }

                /***/
              },

            /***/ './src/Overlay/AFKOverlay.ts':
              /*!***********************************!*\
  !*** ./src/Overlay/AFKOverlay.ts ***!
  \***********************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_58744__) => {
                __nested_webpack_require_58744__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_58744__.d(__webpack_exports__, {
                  /* harmony export */ AFKOverlay: () => /* binding */ AFKOverlay
                  /* harmony export */
                })
                /* harmony import */ var _ActionOverlay__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_58744__(
                  /*! ./ActionOverlay */ './src/Overlay/ActionOverlay.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Show an overlay for when the session is unattended, it begins a countdown timer, which when elapsed will disconnect the stream.
                 */
                class AFKOverlay extends _ActionOverlay__WEBPACK_IMPORTED_MODULE_0__.ActionOverlay {
                  /**
                   * @returns The created root element of this overlay.
                   */
                  static createRootElement() {
                    const afkOverlayHtml = document.createElement('div')
                    afkOverlayHtml.id = 'afkOverlay'
                    afkOverlayHtml.className = 'clickableState'
                    return afkOverlayHtml
                  }
                  /**
                   * @returns The created content element of this overlay, which contain some text for an afk count down.
                   */
                  static createContentElement() {
                    const afkOverlayHtmlInner = document.createElement('div')
                    afkOverlayHtmlInner.id = 'afkOverlayInner'
                    afkOverlayHtmlInner.innerHTML =
                      '<center>No activity detected<br>Disconnecting in <span id="afkCountDownNumber"></span> seconds<br>Click to continue<br></center>'
                    return afkOverlayHtmlInner
                  }
                  /**
                   * Construct an Afk overlay
                   * @param parentElement the element this overlay will be inserted into
                   */
                  constructor(rootDiv) {
                    super(rootDiv, AFKOverlay.createRootElement(), AFKOverlay.createContentElement())
                    this.rootElement.addEventListener('click', () => {
                      this.activate()
                    })
                  }
                  /**
                   * Update the count down spans number for the overlay
                   * @param countdown the count down number to be inserted into the span for updating
                   */
                  updateCountdown(countdown) {
                    this.textElement.innerHTML = `<center>No activity detected<br>Disconnecting in <span id="afkCountDownNumber">${countdown}</span> seconds<br>Click to continue<br></center>`
                  }
                }

                /***/
              },

            /***/ './src/Overlay/ActionOverlay.ts':
              /*!**************************************!*\
  !*** ./src/Overlay/ActionOverlay.ts ***!
  \**************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_61219__) => {
                __nested_webpack_require_61219__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_61219__.d(__webpack_exports__, {
                  /* harmony export */ ActionOverlay: () => /* binding */ ActionOverlay
                  /* harmony export */
                })
                /* harmony import */ var _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_61219__(
                    /*! @epicgames-ps/lib-pixelstreamingfrontend-ue5.2 */ '@epicgames-ps/lib-pixelstreamingfrontend-ue5.2'
                  )
                /* harmony import */ var _BaseOverlay__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_61219__(
                  /*! ./BaseOverlay */ './src/Overlay/BaseOverlay.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Class for the base action overlay structure
                 */
                class ActionOverlay extends _BaseOverlay__WEBPACK_IMPORTED_MODULE_1__.OverlayBase {
                  /**
                   * Construct an action overlay
                   * @param rootDiv the root element this overlay will be inserted into
                   * @param rootElement the root element that is the overlay
                   * @param contentElement an element that contains text for the action overlay
                   */
                  constructor(rootDiv, rootElement, contentElement) {
                    super(rootDiv, rootElement, contentElement)
                    this.onActionCallback = () => {
                      /* do nothing */ _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Logger.Info(
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                        'Did you forget to set the onAction callback in your overlay?'
                      )
                    }
                  }
                  /**
                   * Update the text overlays inner text
                   * @param text the update text to be inserted into the overlay
                   */
                  update(text) {
                    if (text != null || text != undefined) {
                      this.textElement.innerHTML = text
                    }
                  }
                  /**
                   * Set a method as an event emitter callback
                   * @param callBack the method that is to be called when the event is emitted
                   */
                  onAction(callBack) {
                    this.onActionCallback = callBack
                  }
                  /**
                   * Activate an event that is attached to the event emitter
                   */
                  activate() {
                    this.onActionCallback()
                  }
                }

                /***/
              },

            /***/ './src/Overlay/BaseOverlay.ts':
              /*!************************************!*\
  !*** ./src/Overlay/BaseOverlay.ts ***!
  \************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_63623__) => {
                __nested_webpack_require_63623__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_63623__.d(__webpack_exports__, {
                  /* harmony export */ OverlayBase: () => /* binding */ OverlayBase
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * Class for the base overlay structure
                 */
                class OverlayBase {
                  /**
                   * Construct an overlay
                   * @param rootDiv the root element this overlay will be inserted into
                   * @param rootElement the root element that is the overlay
                   */
                  constructor(rootDiv, rootElement, textElement) {
                    this.rootDiv = rootDiv
                    this.rootElement = rootElement
                    this.textElement = textElement
                    this.rootElement.appendChild(this.textElement)
                    this.hide()
                    this.rootDiv.appendChild(this.rootElement)
                  }
                  /**
                   * Show the overlay
                   */
                  show() {
                    this.rootElement.classList.remove('hiddenState')
                  }
                  /**
                   * Hide the overlay
                   */
                  hide() {
                    this.rootElement.classList.add('hiddenState')
                  }
                }

                /***/
              },

            /***/ './src/Overlay/ConnectOverlay.ts':
              /*!***************************************!*\
  !*** ./src/Overlay/ConnectOverlay.ts ***!
  \***************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_64963__) => {
                __nested_webpack_require_64963__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_64963__.d(__webpack_exports__, {
                  /* harmony export */ ConnectOverlay: () => /* binding */ ConnectOverlay
                  /* harmony export */
                })
                /* harmony import */ var _ActionOverlay__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_64963__(
                  /*! ./ActionOverlay */ './src/Overlay/ActionOverlay.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Overlay shown during connection, has a button that can be clicked to initiate a connection.
                 */
                class ConnectOverlay extends _ActionOverlay__WEBPACK_IMPORTED_MODULE_0__.ActionOverlay {
                  /**
                   * @returns The created root element of this overlay.
                   */
                  static createRootElement() {
                    const connectElem = document.createElement('div')
                    connectElem.id = 'connectOverlay'
                    connectElem.className = 'clickableState'
                    return connectElem
                  }
                  /**
                   * @returns The created content element of this overlay, which contain whatever content this element contains, like text or a button.
                   */
                  static createContentElement() {
                    const connectContentElem = document.createElement('div')
                    connectContentElem.id = 'connectButton'
                    connectContentElem.innerHTML = 'Click to start'
                    return connectContentElem
                  }
                  /**
                   * Construct a connect overlay with a connection button.
                   * @param parentElem the parent element this overlay will be inserted into.
                   */
                  constructor(parentElem) {
                    super(parentElem, ConnectOverlay.createRootElement(), ConnectOverlay.createContentElement())
                    // add the new event listener
                    this.rootElement.addEventListener('click', () => {
                      this.activate()
                    })
                  }
                }

                /***/
              },

            /***/ './src/Overlay/DisconnectOverlay.ts':
              /*!******************************************!*\
  !*** ./src/Overlay/DisconnectOverlay.ts ***!
  \******************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_67017__) => {
                __nested_webpack_require_67017__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_67017__.d(__webpack_exports__, {
                  /* harmony export */ DisconnectOverlay: () => /* binding */ DisconnectOverlay
                  /* harmony export */
                })
                /* harmony import */ var _ActionOverlay__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_67017__(
                  /*! ./ActionOverlay */ './src/Overlay/ActionOverlay.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Overlay shown during disconnection, has a reconnection element that can be clicked to reconnect.
                 */
                class DisconnectOverlay extends _ActionOverlay__WEBPACK_IMPORTED_MODULE_0__.ActionOverlay {
                  /**
                   * @returns The created root element of this overlay.
                   */
                  static createRootElement() {
                    const disconnectOverlayHtml = document.createElement('div')
                    disconnectOverlayHtml.id = 'disconnectOverlay'
                    disconnectOverlayHtml.className = 'clickableState'
                    return disconnectOverlayHtml
                  }
                  /**
                   * @returns The created content element of this overlay, which contain whatever content this element contains, like text or a button.
                   */
                  static createContentElement() {
                    // build the inner html container
                    const disconnectOverlayHtmlContainer = document.createElement('div')
                    disconnectOverlayHtmlContainer.id = 'disconnectButton'
                    disconnectOverlayHtmlContainer.innerHTML = 'Click To Restart'
                    return disconnectOverlayHtmlContainer
                  }
                  /**
                   * Construct a disconnect overlay with a retry connection icon.
                   * @param parentElem the parent element this overlay will be inserted into.
                   */
                  constructor(parentElem) {
                    super(parentElem, DisconnectOverlay.createRootElement(), DisconnectOverlay.createContentElement())
                    // add the new event listener
                    this.rootElement.addEventListener('click', () => {
                      this.activate()
                    })
                  }
                }

                /***/
              },

            /***/ './src/Overlay/ErrorOverlay.ts':
              /*!*************************************!*\
  !*** ./src/Overlay/ErrorOverlay.ts ***!
  \*************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_69217__) => {
                __nested_webpack_require_69217__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_69217__.d(__webpack_exports__, {
                  /* harmony export */ ErrorOverlay: () => /* binding */ ErrorOverlay
                  /* harmony export */
                })
                /* harmony import */ var _TextOverlay__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_69217__(
                  /*! ./TextOverlay */ './src/Overlay/TextOverlay.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Generic overlay used to show textual error info to the user.
                 */
                class ErrorOverlay extends _TextOverlay__WEBPACK_IMPORTED_MODULE_0__.TextOverlay {
                  /**
                   * @returns The created root element of this overlay.
                   */
                  static createRootElement() {
                    const errorOverlayHtml = document.createElement('div')
                    errorOverlayHtml.id = 'errorOverlay'
                    errorOverlayHtml.className = 'textDisplayState'
                    return errorOverlayHtml
                  }
                  /**
                   * @returns The created content element of this overlay, which contain whatever content this element contains, like text or a button.
                   */
                  static createContentElement() {
                    const errorOverlayHtmlInner = document.createElement('div')
                    errorOverlayHtmlInner.id = 'errorOverlayInner'
                    return errorOverlayHtmlInner
                  }
                  /**
                   * Construct a connect overlay with a connection button.
                   * @param parentElem the parent element this overlay will be inserted into.
                   */
                  constructor(parentElem) {
                    super(parentElem, ErrorOverlay.createRootElement(), ErrorOverlay.createContentElement())
                  }
                }

                /***/
              },

            /***/ './src/Overlay/InfoOverlay.ts':
              /*!************************************!*\
  !*** ./src/Overlay/InfoOverlay.ts ***!
  \************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_71029__) => {
                __nested_webpack_require_71029__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_71029__.d(__webpack_exports__, {
                  /* harmony export */ InfoOverlay: () => /* binding */ InfoOverlay
                  /* harmony export */
                })
                /* harmony import */ var _TextOverlay__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_71029__(
                  /*! ./TextOverlay */ './src/Overlay/TextOverlay.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Generic overlay used to show textual info to the user.
                 */
                class InfoOverlay extends _TextOverlay__WEBPACK_IMPORTED_MODULE_0__.TextOverlay {
                  /**
                   * @returns The created root element of this overlay.
                   */
                  static createRootElement() {
                    const infoOverlayHtml = document.createElement('div')
                    infoOverlayHtml.id = 'infoOverlay'
                    infoOverlayHtml.className = 'textDisplayState'
                    return infoOverlayHtml
                  }
                  /**
                   * @returns The created content element of this overlay, which contain whatever content this element contains, like text or a button.
                   */
                  static createContentElement() {
                    const infoOverlayHtmlInner = document.createElement('div')
                    infoOverlayHtmlInner.id = 'messageOverlayInner'
                    return infoOverlayHtmlInner
                  }
                  /**
                   * Construct a connect overlay with a connection button.
                   * @param parentElem the parent element this overlay will be inserted into.
                   */
                  constructor(parentElem) {
                    super(parentElem, InfoOverlay.createRootElement(), InfoOverlay.createContentElement())
                  }
                }

                /***/
              },

            /***/ './src/Overlay/PlayOverlay.ts':
              /*!************************************!*\
  !*** ./src/Overlay/PlayOverlay.ts ***!
  \************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_72824__) => {
                __nested_webpack_require_72824__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_72824__.d(__webpack_exports__, {
                  /* harmony export */ PlayOverlay: () => /* binding */ PlayOverlay
                  /* harmony export */
                })
                /* harmony import */ var _ActionOverlay__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_72824__(
                  /*! ./ActionOverlay */ './src/Overlay/ActionOverlay.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Overlay shown when stream is ready to play.
                 */
                class PlayOverlay extends _ActionOverlay__WEBPACK_IMPORTED_MODULE_0__.ActionOverlay {
                  /**
                   * @returns The created root element of this overlay.
                   */
                  static createRootElement() {
                    const playElem = document.createElement('div')
                    playElem.id = 'playOverlay'
                    playElem.className = 'clickableState'
                    return playElem
                  }
                  /**
                   * @returns The created content element of this overlay, which contain whatever content this element contains, like text or a button.
                   */
                  static createContentElement() {
                    // todo: change this to an svg
                    const playOverlayHtmlInner = document.createElement('img')
                    playOverlayHtmlInner.id = 'playButton'
                    playOverlayHtmlInner.src =
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAAD5CAYAAAD2mNNkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMjHxIGmVAAASgklEQVR4Xu2dC7BdVX2HqUCCIRASCPjAFIQREBRBBSRYbFOt8lIrFUWRFqXWsT5wbItUqFWs0KqIMPKoYEWpRS06KDjS1BeVFkVQbCw+wCfiAwGhCKWP9PuZtU24uTe59zz22Y/vm/nGkXtz7jlrr9+sdfZea/03Wb169QtxGW62iYi0D8L7NbwYj8EdcdPyIxFpA4T2P/F/8Ua8CI/GhPnXyq+ISJMhrAlxxX9hRuYL8Sh8SPk1EWkqBHXdEFfcg6vw3fhs3Kb8uog0DQI6XYgr8rOvYsJ8OM4v/0xEmkIJ6ob4P8zIfANegCvQMIs0BQK5sRBXJMy/wIzM5+ByXFBeRkQmBUGcbYjX5S5MmM/AA3CL8nIiUjcEcJAQV9yBX8a/wSeiz5hF6obgDRPikGfMCfOX8DTcu7y0iNQBoRs2xBX/g3diwvwm3Kn8CREZJ4RtVCGuqMKcu9kn4xJ09ZfIuCBgow5xyJ3sTLNzAywrwF6J26NhFhk1BGscIV6XhPluvA6Pxx3KnxaRUUCoxh3iioQ5z5n/BY/FJeUtiMgwEKa6QlyRMN+Hn8Hn4ZblrYjIIBCiukMc8p25Ws6ZMD+zvB0RmSsEaBIhnkrew5V4EHrCiMhcKAFqCv+Nl+J+uBC9my2yMQhKk0Jcke/M78Gsy06YH1TerohMhYA0McQVP8Nz8UDcCl2bLTIVgtHkEFd8D8/E/XFrdGQWqSAQbQhxyKOpm/B03Ac9MkgkEIa2hLgiN78S5lPx0bgIvQEm/YUAtC3EFQnzzfgnuDc6zZZ+Qsdva4jX5Sv4atwXHZmlX9DhuxDikC2Qn8dXYUbmReUjinQbOntXQlyRTRafwldgwrxV+agi3YRO3rUQV/wcV+LL8DHoyZzSTejcXQ1xRc7/uhyzl3kv3Lx8dJFuQKfueohDnjFnZP4o/j7m0ZQH4Es3oDP3IcQV2f6YMF+COZjgUeiZ2dJu6MR9CvG63ILvx4zMCfO80iQi7YLO29cQV3wb34spsr4rumBE2gWdtu8hDln99S1MXeYX4M6leUSaDx3WEK8lRdYT5lR/zPlfnswpzYeOaojXJ4cSfB3Pw+fgtug0W5oJndMQT0/uZGeaXZVyfTZuV5pNpDnQMQ3xxsk0O9Ufz8ZDcdvSfCKThw5piGdP2ioF496JT0c3WcjkKR1T5kYWjCTM78DfQheMyOSgAxriwch35lR/vAbPwOXozS+pHzqeIR6Oal12wvx2fBy6yULqgw5niEdDwpyR+VpMkfXsmHIpp4wfOpohHj234RfwFNwDnWbL+KCDGeLxkJH5p3g1vg53K00uMlroXIZ4vGTBSMJ8FeZkzmWl6UVGA53KENfD/ZiyNCmynvO/FpdLIDIcdCZDXC8ZmfOd+d/wJejZXzIcdCJDXD95xpwjdnP+V74zH4Wu/pLBoPMY4smSMN+FKbJ+BBpmmRt0GkPcDBLmu/FjeAi6lFNmB53FEDeHTLPzaCoj80dwBfqMWTYMncQQN5esAPsw7lcul8j60EEMcfPJDbD3YU7l3KxcOpE10CkMcTvIVDvfmc/E3XELtPqjGOKWkhVgp+GemDD7vbnP0AEMcXtJkfU34GNxAToy9xEuvCFuP6vwJMyOqYXl0kpf4KIb4m5QncyZTRapZGGY+wIX2xB3i3vxOswmi13QaXbX4QIb4m6SY3a/iMdh7mYb5q7ChTXE3aXaaLESq7rMW5ZLL12Bi2qI+8E9eDkmzLuhYe4KXExD3B8yMt+Ol+KL0CLrXYCLaIj7R8J8K16CR6PLOdsMF88Q95fsmPoRXozPxdzNdvVX2+CiGWLJza+EOXWZj8Sd0APw2wIXyxBLqPYy34LnY8K8DA1z0+EiGWKZSgJ9I74LU2R9R3Sa3VS4OIZYZqJaynkWpsj6w0u3kSbBhTHEsjHuwxswpVwPw6Wl+0gT4IIYYpkNmWKnr1yPqf54KG5VupFMknJhRGZLwpzVX6n++DZ8GrpjapJwAQyxDELCnB1TqWTx1/gUdGSeBDS8IZZBSZBjzv76PP4VHoSGuU5ocEMsoyBhTsG4VH98Ix6A80s3k3FCQxtiGSVZMPIT/CwmzPuhz5jHCQ1siGUcZClnwvxpPAX3LF1ORg2Na4hlXGSKnQUjCfNn8PX4CNy0dD8ZBTSoIZZxkzBXI/Pn8ATMumzDPApoSEMsdZEw5zvzDzHT7JdjwuzZX8NAAxpimQSZZifMn8Tj8aGlS8pcofEMsUyKjMw5lTOnjHwcc2TQktI1ZbbQaIZYJk3CnE0WGZmvwOeh+5hnC41liKUpVCNzwvwJPBy9+bUxaCRDLE0jYb4fU/0x0+yD8cGly8pUaBxDLE0kQa7CfCfmML8D0SN2p0KjGGJpOglztWgkh/k9CT1it4LGMMTSFhLmLBrJ3exzcJ/SjfsNDWGIpY0k0D/AM/GRpTv3ExrAEEubqVaAnY5LsX93s/nQhli6QLUF8nWYI3bnYT+Wc/JBDbF0heqO9jfwlfhInI/dDjMf0BBLF0mYr8NsskiNqS2wm2Hmgxli6TJ5zpwjg/4Qd8buLRrhQxli6QM5ZjdHBh2H+c7cnUUjfBhDLH0hU+y7cCU+H7OXeV6JQnvhQxhi6RsJc0bmy/BZ+MsbYCUS7YM3b4ilryTM2QL5QUzBuHxnbt80mzdtiEVWr74NL8KUck2R9faMzLxZQyyyhozMWcp5If4uJszNP5yAN2mIRR5IVn/djOfhEdjsw/x4c4ZYZHryjPkmPBsPwYeV2DQL3pghFpmZTLFzZFDCnLrMz8DtsTkbLXgzhlhk4yTM2cu8CrNjKiNzwjz5OlO8CUMsMjcS5qzLfgumyPr2JU6TgTdgiEUGoyqynrrMv42TOTObP2yIRQYn0+ws5bwaU8r1N3HrEq964A8aYpHhSZjvwBSMS5gPwnrWZfOHDLHI6Mgz5hyxm4Jxf4kH4HjDzB8wxCKjJ2HONPuf8c9xHxzPXmZe2BCLjIdMsWMqWfwTnoiPwdGOzLygIRYZPwlzVWPqtbgXjmbBCC9kiEXqI8+Ys8nicnwN7laiODi8iCEWqZeMylmXnTCnYFxO5tyxRHLu8I8NschkSJizLvv7mJH5pbgY57Zjin9giEUmSzUyfw9TZP1Y3LZEdOPwy4ZYpBkkzKn++B38KB6F25Wozgy/ZIhFmkXCnLO/vosfwpwysqhEdn34oSEWaSYJ8y8w0+wP4GG4/oIR/qMhFmk2VZgzzU6Ys2Nq7T5m/o8hFmkHCXO2PybMF+O++CBDLNIuEuSsy8535lvxZEMs0j6qWszZJbXUEIu0i1vwrZhqFZv5nVikPWTqfA5mF9QDD+fjPxhikeaR777xdrwAn1Aiuz780BCLNIvsdMqBAqkNtRw3XBeKXzDEIpMno27Cezdeik/GBSWmG4ZfNMQikyPhzXrpVGXM6R8rcG7lVfkHhlikfhLe7FzKo6KV+Hu45m7zXOEfGmKReske4oT3k3gMblniOBi8gCEWqYeMvD/GK/F43KHEcDh4IUMsMl5yw+pHmLOoX4aDH8UzHbygIRYZD/nem5H3KjwBd8LRV1HkRQ2xyGjJ3eacNZ1iayfhr+P46hnz4oZYZDRk2pzwph7TX+CuOP76xfwRQywyHNlVVIX3VHx8iVc98AcNscjgZJFGypq+GffHwZ71DgN/1BCLzJ2f47/iWzBlTId71jsM/HFDLDI7crf5HrwG34YHY70FxaeDN2GIRTZMwpvjcK7Fd+BTcfLhreDNGGKRmcnIez2+Ew/FhTi3MivjhjdkiEXWJ0fEfhXPwmfi4hKZ5sGbM8Qia8n65lX4LkzlhYeVqDQX3qQhFlnzrPc/8FzMtsBl2Kxp80zwRg2x9J0cxn4epoBZlkjW/6x3GHjDhlj6SJZI5gTJ9+DzMeHdvMSiXfDGDbH0iWpbYMqgJLy7YLtG3qnwAQyx9IVsC7wEX4C74/h2FtUJH8QQS9fJUTg5QfI43APnle7fDfhAhli6So5//Ri+GBPeya1vHid8MEMsXSMH0X0CX4J74cLS3bsJH9AQS1fITavs6f1VeLEdz3qHgQ9piKXtZHNC1jfnELpfTpux++Gt4MMaYmkrmTZ/GV+LCW+3p80zwQc3xNI2skTyBswhdHtic7YFTgIawBBLm7gRT8HH4dbYn2nzTNAIhljaQCrkvwkT3tywGv8pkm2BxjDE0lRyokbOsjoDUyE/N6wM71RoFEMsTSPhvRPfjY/GBei0eSZoHEMsTeJ2/ADug+3cVVQ3NJQhliaQkfcf8SnoqDsXaDBDLJMij4ruxcvwaejIOwg0nCGWusnyyIT3CjwM+7lIY1TQgIZY6iA3qzLyZmdRSn0eic09QbJN0JCGWMZJwpuR9w78Er4Qu7klcFLQoIZYxkXq9OZuc2oWZXNCv5dHjgsa1hDLqKnCm2qB2Zzw0NLdZBzQwIZYRkWmzT/DhPdE3KV0MxknNLQhlmHJ996ENwXHsjkhq6xcHlkXNLYhlkFJeHPDKhvyszkh4W338a9thEY3xDJX8qgoGxMS3tTpfSzOL11K6obGN8QyWxLeLI/MtDmlPvdHp82ThotgiGU2ZOStwrsCXSLZFLgYhlg2xF2Yc6zOxqejCzWaBhfFEMt0pMj2VzB1eg/BJaXLSNPg4hhiqcjd5izUSIX8lPp8Fi4tXUWaChfJEEtIhfwU2b4QU2R7O3RfbxvgQhnifpOD17+JCW9KfS5F7zi3CS6YIe4nOXj9W/h3eAw+vHQJaRtcPEPcL/Ks92a8CI/FXdFpc5vhAhri/vB9/Hv8A3wUukSyC3AhDXH3+Sn+Ax6PqZDvEskuwQU1xN2kOgonJ0im1Gc2J2xRLrt0CS6sIe4W1c6ij2NG3lROmFcut3QRLrAh7g4J75X4R7g3Gt4+wIU2xO0n0+ZP4aswBcdc39wnuOCGuL3kWe/n8DW4Ly4ql1X6BBfeELeTL+AJ+ATcBn3W21e4+Ia4PeSO89fwT/GJuAhdItl36ASGuPlkZ9G38fWYo3Ay8hpeWQOdwRA3lxwBexO+GVPq07Insj50DEPcTLK++e2Yc6wWo995ZXroHIa4WdyKOQpnOWbavGm5VCLTQycxxM0gp0iej0/G3LAyvDI76CyGeHJUx+G8Hw9Ewytzh05jiCdDDqK7HA/Aheh3XhkMOo8hrpe096fxd9D9vDI8pVPJ+LkXP4vPQafMMjroUIZ4fOQ7b9Y3X4U5x8oi2zJ66FiGePRkeWROkfwiHoee3Szjgw5miEdDRt14D+bw9ZfjDqWZRcYHHc0QD091FE6OgP0z9OB1qQ86myEenKxtTngz8r4BHXmlfuh4hnjuJLwp9Zlqgafh7qU5ReqHDmiIZ0+mzVkeeQO+FR9fmlFkctARDfHsSJ3ef8dqZ5GH0EkzoDMa4pnJ3ea0T07TOAezvnlBaTqRZlA6qTyQhDdrm1fhBXgwGl5pJnROQ7yW6jlvwvtefAZuXppKpJmUTitrp80p9Zn1zQ8uTSTSbOisfQ9xps2pkJ/wPhe3K00j0g7otH0N8f34dXwfHo0W2ZZ2QuftY4izPDKnabwIH4Ee/yrthQ7clxBnldUP8BJ8MSa87uuV9kNH7nqIc4ZVwvshfCkuQ8Mr3YEO3dUQZ4nkD/HDmFKfe5SPLNIt6NxdDHHC+xF8BabsiSOvdBc6eJdCfBtehglvimz7rFe6Dx29CyHOQo0r8NWYOr0W2Zb+QIdva4izRDLPeldi6vSm1OfC8rFE+gMdv40hznu+GlMhfz/cEj0OR/oJnb9NIc57vQZPxCehI69ICUbTydnN1+LJmPAuKW9fRAhEk0OcZ73XYw6hOwg9v1lkKgSjqSHO5oRT8TdwKbq+WWQ6CEeTQpw7zlmocTqmTm/Ob7bomMiGICRNCHGmzT/BszClPjPyuspKZDYQlkmH+Mf4t7gct0enzSJzgdBMKsQJ70X4VHTkFRkUwlN3iFM54YN4KG6LHkQnMgyEqK4Q51nvpZjwZuQ1vCKjgDDVEeIr8XBMeL3bLDJKCNW4QpyR9zo8ArdBb1iJjAPCNeoQJ7ypFngszkc3JoiME0I2qhDnWW8Kjv0xujFBpC4I3DAhzgqrHESXUp/Z0/uQ8rIiUhcEb5AQJ7z34TfwJNy5vJyI1A0BnG2IE9yYsiffwTfizuh3XpFJQghnE+J83014v4upkL8r+qhIpAkQxg2FOOHNzzNtPhf3REdekSZRQjqVTJtzguSNeD4eWH5dRJoGAZ0a4rvxm3ghrkCnzSJNhpBWIc7/plpgwpudRZ7dLNIGCOvtJbwX42G4uPxIRNoAoU2d3iNxUflPItIaNtnk/wEGBoMdpECGHAAAAABJRU5ErkJggg=='
                    playOverlayHtmlInner.alt = 'Start Streaming'
                    return playOverlayHtmlInner
                  }
                  /**
                   * Construct a connect overlay with a connection button.
                   * @param parentElem the parent element this overlay will be inserted into.
                   */
                  constructor(parentElem) {
                    super(parentElem, PlayOverlay.createRootElement(), PlayOverlay.createContentElement())
                    // add the new event listener
                    this.rootElement.addEventListener('click', () => {
                      this.activate()
                    })
                  }
                }

                /***/
              },

            /***/ './src/Overlay/TextOverlay.ts':
              /*!************************************!*\
  !*** ./src/Overlay/TextOverlay.ts ***!
  \************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_81403__) => {
                __nested_webpack_require_81403__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_81403__.d(__webpack_exports__, {
                  /* harmony export */ TextOverlay: () => /* binding */ TextOverlay
                  /* harmony export */
                })
                /* harmony import */ var _BaseOverlay__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_81403__(
                  /*! ./BaseOverlay */ './src/Overlay/BaseOverlay.ts'
                )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Class for the text overlay base
                 */
                class TextOverlay extends _BaseOverlay__WEBPACK_IMPORTED_MODULE_0__.OverlayBase {
                  /**
                   * Construct a text overlay
                   * @param rootDiv the root element this overlay will be inserted into
                   * @param rootElement the root element that is the overlay
                   * @param textElement an element that contains text for the action overlay
                   */
                  constructor(rootDiv, rootElement, textElement) {
                    super(rootDiv, rootElement, textElement)
                  }
                  /**
                   * Update the text overlays inner text
                   * @param text the update text to be inserted into the overlay
                   */
                  update(text) {
                    if (text != null || text != undefined) {
                      this.textElement.innerHTML = text
                    }
                  }
                }

                /***/
              },

            /***/ './src/Styles/PixelStreamingApplicationStyles.ts':
              /*!*******************************************************!*\
  !*** ./src/Styles/PixelStreamingApplicationStyles.ts ***!
  \*******************************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_82920__) => {
                __nested_webpack_require_82920__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_82920__.d(__webpack_exports__, {
                  /* harmony export */ PixelStreamingApplicationStyle: () =>
                    /* binding */ PixelStreamingApplicationStyle
                  /* harmony export */
                })
                /* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_82920__(
                  /*! jss */ 'jss'
                )
                /* harmony import */ var jss_plugin_global__WEBPACK_IMPORTED_MODULE_1__ =
                  __nested_webpack_require_82920__(/*! jss-plugin-global */ 'jss-plugin-global')
                /* harmony import */ var jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_2__ =
                  __nested_webpack_require_82920__(/*! jss-plugin-camel-case */ 'jss-plugin-camel-case')
                /* Copyright Epic Games, Inc. All Rights Reserved. */

                class PixelStreamingApplicationStyle {
                  constructor(options) {
                    this.defaultLightModePalette = {
                      '--color0': '#e2e0dd80',
                      '--color1': '#FFFFFF',
                      '--color2': '#000000',
                      '--color3': '#0585fe',
                      '--color4': '#35b350',
                      '--color5': '#ffab00',
                      '--color6': '#e1e2dd',
                      '--color7': '#c3c4bf'
                    }
                    this.defaultDarkModePalette = {
                      '--color0': '#1D1F2280',
                      '--color1': '#000000',
                      '--color2': '#FFFFFF',
                      '--color3': '#0585fe',
                      '--color4': '#35b350',
                      '--color5': '#ffab00',
                      '--color6': '#1e1d22',
                      '--color7': '#3c3b40'
                    }
                    this.defaultStyles = {
                      ':root': {
                        '--color0': '#1D1F2280',
                        '--color1': '#000000',
                        '--color2': '#FFFFFF',
                        '--color3': '#0585fe',
                        '--color4': '#35b350',
                        '--color5': '#ffab00',
                        '--color6': '#1e1d22',
                        '--color7': '#3c3b40',
                        '--color8': '#41008c',
                        '--color9': '#3e0070',
                        '--color10': '#2e0052',
                        '--color11': 'rgba(65,0,139,1)'
                      },
                      '.noselect': {
                        userSelect: 'none'
                      },
                      '#playerUI': {
                        width: '100%',
                        height: '100%',
                        position: 'relative'
                      },
                      '#videoElementParent': {
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        backgroundColor: 'var(--color1)'
                      },
                      '#uiFeatures': {
                        width: '100%',
                        height: '100%',
                        zIndex: '30',
                        position: 'relative',
                        color: 'var(--color2)',
                        pointerEvents: 'none',
                        overflow: 'hidden'
                      },
                      '.UiTool .tooltiptext': {
                        visibility: 'hidden',
                        width: 'auto',
                        color: 'var(--color2)',
                        textAlign: 'center',
                        borderRadius: '15px',
                        padding: '0px 10px',
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '0.75rem',
                        letterSpacing: '0.75px',
                        position: 'absolute',
                        top: '0',
                        transform: 'translateY(25%)',
                        left: '125%',
                        zIndex: '20'
                      },
                      '.UiTool:hover .tooltiptext': {
                        visibility: 'visible',
                        backgroundColor: 'var(--color7)'
                      },
                      '#connection .tooltiptext': {
                        top: '125%',
                        transform: 'translateX(-25%)',
                        left: '0',
                        zIndex: '20',
                        padding: '5px 10px'
                      },
                      '#connection': {
                        position: 'absolute',
                        bottom: '8%',
                        left: '5%',
                        fontFamily: "'Michroma', sans-serif",
                        height: '3rem',
                        width: '3rem',
                        pointerEvents: 'all'
                      },
                      '#settings-panel .tooltiptext': {
                        display: 'block',
                        top: '125%',
                        transform: 'translateX(-50%)',
                        left: '0',
                        zIndex: '20',
                        padding: '5px 10px',
                        border: '3px solid var(--color3)',
                        width: 'max-content',
                        fallbacks: [
                          {
                            width: 'max-content'
                          },
                          {
                            border: '3px solid var(--color3)'
                          },
                          {
                            padding: '5px 10px'
                          },
                          {
                            zIndex: '20'
                          },
                          {
                            left: '0'
                          },
                          {
                            transform: 'translateX(-50%)'
                          },
                          {
                            top: '125%'
                          },
                          {
                            display: 'block'
                          }
                        ]
                      },
                      '#controls': {
                        position: 'absolute',
                        top: '3%',
                        left: '2%',
                        fontFamily: "'Michroma', sans-serif",
                        pointerEvents: 'all',
                        display: 'block'
                      },
                      '#controls>*': {
                        marginBottom: '0.5rem',
                        borderRadius: '50%',
                        display: 'block',
                        height: '2rem',
                        lineHeight: '1.75rem',
                        padding: '0.5rem'
                      },
                      '#controls #additionalinfo': {
                        textAlign: 'center',
                        fontFamily: "'Montserrat', sans-serif"
                      },
                      '#fullscreen-btn': {
                        padding: '0.6rem !important'
                      },
                      '#minimizeIcon': {
                        display: 'none'
                      },
                      '#settingsBtn, #statsBtn': {
                        cursor: 'pointer'
                      },
                      '#uiFeatures button': {
                        backgroundColor: 'var(--color7)',
                        border: '1px solid var(--color7)',
                        color: 'var(--color2)',
                        position: 'relative',
                        width: '3rem',
                        height: '3rem',
                        padding: '0.5rem',
                        textAlign: 'center'
                      },
                      '#uiFeatures button:hover': {
                        backgroundColor: 'var(--color3)',
                        border: '3px solid var(--color3)',
                        transition: '0.25s ease',
                        paddingLeft: '0.55rem',
                        paddingTop: '0.55rem'
                      },
                      '#uiFeatures button:active': {
                        border: '3px solid var(--color3)',
                        backgroundColor: 'var(--color7)',
                        paddingLeft: '0.55rem',
                        paddingTop: '0.55rem'
                      },
                      '.btn-flat': {
                        backgroundColor: 'transparent',
                        color: 'var(--color2)',
                        fontFamily: "'Montserrat'",
                        fontWeight: 'bold',
                        border: '3px solid var(--color3)',
                        borderRadius: '1rem',
                        fontSize: '0.75rem',
                        paddingLeft: '0.5rem',
                        paddingRight: '0.5rem',
                        cursor: 'pointer',
                        textAlign: 'center'
                      },
                      '.btn-flat:hover': {
                        backgroundColor: 'var(--color3)',
                        transition: 'ease 0.3s'
                      },
                      '.btn-flat:disabled': {
                        background: 'var(--color7)',
                        borderColor: 'var(--color3)',
                        color: 'var(--color3)',
                        cursor: 'default'
                      },
                      '.btn-flat:active': {
                        backgroundColor: 'transparent'
                      },
                      '.btn-flat:focus': {
                        outline: 'none'
                      },
                      '#uiFeatures img': {
                        width: '100%',
                        height: '100%'
                      },
                      '.panel-wrap': {
                        position: 'absolute',
                        top: '0',
                        bottom: '0',
                        right: '0',
                        height: '100%',
                        minWidth: '20vw',
                        maxWidth: '100vw',
                        transform: 'translateX(100%)',
                        transition: '.3s ease-out',
                        pointerEvents: 'all',
                        backdropFilter: 'blur(10px)',
                        webkitBackdropFilter: 'blur(10px)',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        backgroundColor: 'var(--color0)'
                      },
                      '.panel-wrap-visible': {
                        transform: 'translateX(0%)'
                      },
                      '.panel': {
                        overflowY: 'auto',
                        padding: '1em'
                      },
                      '#settingsHeading, #statsHeading': {
                        display: 'inline-block',
                        fontSize: '2em',
                        marginBlockStart: '0.67em',
                        marginBlockEnd: '0.67em',
                        marginInlineStart: '0px',
                        marginInlineEnd: '0px',
                        position: 'relative',
                        padding: '0 0 0 2rem'
                      },
                      '#settingsClose, #statsClose': {
                        margin: '0.5rem',
                        paddingTop: '0.5rem',
                        paddingBottom: '0.5rem',
                        paddingRight: '0.5rem',
                        fontSize: '2em',
                        float: 'right'
                      },
                      '#settingsClose:after, #statsClose:after': {
                        paddingLeft: '0.5rem',
                        display: 'inline-block',
                        content: '"\\00d7"'
                      },
                      '#settingsClose:hover, #statsClose:hover': {
                        color: 'var(--color3)',
                        transition: 'ease 0.3s'
                      },
                      '#settingsContent, #statsContent': {
                        marginLeft: '2rem',
                        marginRight: '2rem'
                      },
                      '.setting': {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: '0.15rem 10px 0.15rem 10px'
                      },
                      '.settings-text': {
                        color: 'var(--color2)',
                        verticalAlign: 'middle',
                        fontWeight: 'normal'
                      },
                      '.settings-option': {
                        width: '100%',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      },
                      '#connectOverlay, #playOverlay, #infoOverlay, #errorOverlay, #afkOverlay, #disconnectOverlay': {
                        zIndex: '30',
                        position: 'absolute',
                        color: 'var(--color2)',
                        fontSize: '1.8em',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'var(--color1)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textTransform: 'uppercase'
                      },
                      '.clickableState': {
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        cursor: 'pointer'
                      },
                      '.textDisplayState': {
                        display: 'flex'
                      },
                      '.hiddenState': {
                        display: 'none'
                      },
                      '#playButton, #connectButton': {
                        display: 'inline-block',
                        height: 'auto',
                        zIndex: '30'
                      },
                      'img#playButton': {
                        maxWidth: '241px',
                        width: '10%'
                      },
                      '#uiInteraction': {
                        position: 'fixed'
                      },
                      '#UIInteractionButtonBoundary': {
                        padding: '2px'
                      },
                      '#UIInteractionButton': {
                        cursor: 'pointer'
                      },
                      '#hiddenInput': {
                        position: 'absolute',
                        left: '-10%',
                        width: '0px',
                        opacity: '0'
                      },
                      '#editTextButton': {
                        position: 'absolute',
                        height: '40px',
                        width: '40px'
                      },
                      '.btn-overlay': {
                        verticalAlign: 'middle',
                        display: 'inline-block'
                      },
                      '.tgl-switch': {
                        verticalAlign: 'middle',
                        display: 'inline-block'
                      },
                      '.tgl-switch .tgl': {
                        display: 'none'
                      },
                      '.tgl, .tgl:after, .tgl:before, .tgl *, .tgl *:after, .tgl *:before, .tgl+.tgl-slider': {
                        webkitBoxSizing: 'border-box',
                        boxSizing: 'border-box'
                      },
                      '.tgl::-moz-selection, .tgl:after::-moz-selection, .tgl:before::-moz-selection, .tgl *::-moz-selection, .tgl *:after::-moz-selection, .tgl *:before::-moz-selection, .tgl+.tgl-slider::-moz-selection':
                        {
                          background: 'none'
                        },
                      '.tgl::selection, .tgl:after::selection, .tgl:before::selection, .tgl *::selection, .tgl *:after::selection, .tgl *:before::selection, .tgl+.tgl-slider::selection':
                        {
                          background: 'none'
                        },
                      '.tgl-slider': {},
                      '.tgl+.tgl-slider': {
                        outline: '0',
                        display: 'block',
                        width: '40px',
                        height: '18px',
                        position: 'relative',
                        cursor: 'pointer',
                        userSelect: 'none'
                      },
                      '.tgl+.tgl-slider:after, .tgl+.tgl-slider:before': {
                        position: 'relative',
                        display: 'block',
                        content: '""',
                        width: '50%',
                        height: '100%'
                      },
                      '.tgl+.tgl-slider:after': {
                        left: '0'
                      },
                      '.tgl+.tgl-slider:before': {
                        display: 'none'
                      },
                      '.tgl-flat+.tgl-slider': {
                        padding: '2px',
                        webkitTransition: 'all .2s ease',
                        transition: 'all .2s ease',
                        background: 'var(--color6)',
                        border: '3px solid var(--color7)',
                        borderRadius: '2em'
                      },
                      '.tgl-flat+.tgl-slider:after': {
                        webkitTransition: 'all .2s ease',
                        transition: 'all .2s ease',
                        background: 'var(--color7)',
                        content: '""',
                        borderRadius: '1em'
                      },
                      '.tgl-flat:checked+.tgl-slider': {
                        border: '3px solid var(--color3)'
                      },
                      '.tgl-flat:checked+.tgl-slider:after': {
                        left: '50%',
                        background: 'var(--color3)'
                      },
                      '.btn-apply': {
                        display: 'block !important',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '40%'
                      },
                      '.form-control': {
                        backgroundColor: 'var(--color7)',
                        border: '2px solid var(--color7)',
                        borderRadius: '4px',
                        color: 'var(--color2)',
                        textAlign: 'right',
                        fontFamily: 'inherit'
                      },
                      '.form-control:hover': {
                        borderColor: 'var(--color7)'
                      },
                      '.form-group': {
                        paddingTop: '4px',
                        display: 'grid',
                        gridTemplateColumns: '80% 20%',
                        rowGap: '4px',
                        paddingRight: '10px',
                        paddingLeft: '10px'
                      },
                      '.form-group label': {
                        verticalAlign: 'middle',
                        fontWeight: 'normal'
                      },
                      '.settingsContainer': {
                        display: 'flex',
                        flexDirection: 'column',
                        borderBottom: '1px solid var(--color7)',
                        paddingTop: '10px',
                        paddingBottom: '10px'
                      },
                      '.settingsContainer> :first-child': {
                        marginTop: '4px',
                        marginBottom: '4px',
                        fontWeight: 'bold',
                        justifyContent: 'space-between',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'baseline'
                      },
                      '.collapse': {
                        paddingLeft: '5%'
                      },
                      '#streamTools': {
                        borderBottomRightRadius: '5px',
                        borderBottomLeftRadius: '5px',
                        userSelect: 'none',
                        position: 'absolute',
                        top: '0',
                        right: '2%',
                        zIndex: '100',
                        border: '4px solid var(--colour8)',
                        borderTopWidth: '0px'
                      },
                      '.settingsHeader': {
                        fontStyle: 'italic'
                      },
                      '#streamToolsHeader': {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid var(--colour8)',
                        backgroundColor: 'var(--color7)'
                      },
                      '.streamTools': {
                        backgroundColor: 'var(--color2)',
                        fontFamily: 'var(--buttonFont)',
                        fontWeight: 'lighter',
                        color: 'var(--color7)'
                      },
                      '.streamTools-shown>#streamToolsSettings, .streamTools-shown>#streamToolsStats': {
                        display: 'block'
                      },
                      '#streamToolsToggle': {
                        width: '100%'
                      },
                      '#qualityStatus': {
                        fontSize: '37px',
                        paddingRight: '4px'
                      },
                      '.svgIcon': {
                        fill: 'var(--color2)'
                      }
                    }
                    const { customStyles, lightModePalette, darkModePalette } =
                      options !== null && options !== void 0 ? options : {}
                    // One time setup with default plugins and settings.
                    const jssOptions = {
                      // JSS has many interesting plugins we may wish to turn on
                      //plugins: [functions(), template(), global(), extend(), nested(), compose(), camelCase(), defaultUnit(options.defaultUnit), expand(), vendorPrefixer(), propsSort()]
                      plugins: [
                        (0, jss_plugin_global__WEBPACK_IMPORTED_MODULE_1__['default'])(),
                        (0, jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_2__['default'])()
                      ]
                    }
                    jss__WEBPACK_IMPORTED_MODULE_0__['default'].setup(jssOptions)
                    this.customStyles = customStyles
                    this.lightModePalette =
                      lightModePalette !== null && lightModePalette !== void 0
                        ? lightModePalette
                        : this.defaultLightModePalette
                    this.darkModePalette =
                      darkModePalette !== null && darkModePalette !== void 0
                        ? darkModePalette
                        : this.defaultDarkModePalette
                  }
                  applyStyleSheet() {
                    // Todo: refactor codebase to use jss at a component level, classes can be grabbed like so:
                    //const {pixelStreamingClasses} = jss.createStyleSheet(styles).attach();
                    // attach generated style sheet to page
                    jss__WEBPACK_IMPORTED_MODULE_0__['default']
                      .createStyleSheet({
                        '@global': Object.assign(Object.assign({}, this.defaultStyles), this.customStyles)
                      })
                      .attach()
                  }
                  applyPalette(palette) {
                    const rootElement = document.querySelector(':root')
                    rootElement.style.setProperty('--color0', palette['--color0'])
                    rootElement.style.setProperty('--color1', palette['--color1'])
                    rootElement.style.setProperty('--color2', palette['--color2'])
                    rootElement.style.setProperty('--color3', palette['--color3'])
                    rootElement.style.setProperty('--color4', palette['--color4'])
                    rootElement.style.setProperty('--color5', palette['--color5'])
                    rootElement.style.setProperty('--color6', palette['--color6'])
                    rootElement.style.setProperty('--color7', palette['--color7'])
                  }
                  /**
                   * Update the players color variables
                   * @param isLightMode - should we use a light or dark color scheme
                   */
                  setColorMode(isLightMode) {
                    if (isLightMode) {
                      this.applyPalette(this.lightModePalette)
                    } else {
                      this.applyPalette(this.darkModePalette)
                    }
                  }
                }

                /***/
              },

            /***/ './src/UI/Controls.ts':
              /*!****************************!*\
  !*** ./src/UI/Controls.ts ***!
  \****************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_103985__) => {
                __nested_webpack_require_103985__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_103985__.d(__webpack_exports__, {
                  /* harmony export */ Controls: () => /* binding */ Controls
                  /* harmony export */
                })
                /* harmony import */ var _FullscreenIcon__WEBPACK_IMPORTED_MODULE_4__ =
                  __nested_webpack_require_103985__(/*! ./FullscreenIcon */ './src/UI/FullscreenIcon.ts')
                /* harmony import */ var _SettingsIcon__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_103985__(
                  /*! ./SettingsIcon */ './src/UI/SettingsIcon.ts'
                )
                /* harmony import */ var _StatsIcon__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_103985__(
                  /*! ./StatsIcon */ './src/UI/StatsIcon.ts'
                )
                /* harmony import */ var _XRIcon__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_103985__(
                  /*! ./XRIcon */ './src/UI/XRIcon.ts'
                )
                /* harmony import */ var _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_103985__(
                    /*! @epicgames-ps/lib-pixelstreamingfrontend-ue5.2 */ '@epicgames-ps/lib-pixelstreamingfrontend-ue5.2'
                  )
                /* harmony import */ var _UI_UIConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__ =
                  __nested_webpack_require_103985__(
                    /*! ../UI/UIConfigurationTypes */ './src/UI/UIConfigurationTypes.ts'
                  )
                // Copyright Epic Games, Inc. All Rights Reserved.

                // If there isn't a type provided, default behaviour is to create the element.
                function shouldCreateButton(type) {
                  return type == undefined
                    ? true
                    : type.creationMode ===
                        _UI_UIConfigurationTypes__WEBPACK_IMPORTED_MODULE_1__.UIElementCreationMode.CreateDefaultElement
                }
                /**
                 * Element containing various controls like stats, settings, fullscreen.
                 */
                class Controls {
                  /**
                   * Construct the controls
                   */
                  constructor(config) {
                    if (!config || shouldCreateButton(config.statsButtonType)) {
                      this.statsIcon = new _StatsIcon__WEBPACK_IMPORTED_MODULE_2__.StatsIcon()
                    }
                    if (!config || shouldCreateButton(config.settingsButtonType)) {
                      this.settingsIcon = new _SettingsIcon__WEBPACK_IMPORTED_MODULE_3__.SettingsIcon()
                    }
                    if (!config || shouldCreateButton(config.fullscreenButtonType)) {
                      this.fullscreenIcon = new _FullscreenIcon__WEBPACK_IMPORTED_MODULE_4__.FullScreenIcon()
                    }
                    if (!config || shouldCreateButton(config.xrIconType)) {
                      this.xrIcon = new _XRIcon__WEBPACK_IMPORTED_MODULE_5__.XRIcon()
                    }
                  }
                  /**
                   * Get the element containing the controls.
                   */
                  get rootElement() {
                    if (!this._rootElement) {
                      this._rootElement = document.createElement('div')
                      this._rootElement.id = 'controls'
                      if (!!this.fullscreenIcon) {
                        this._rootElement.appendChild(this.fullscreenIcon.rootElement)
                      }
                      if (!!this.settingsIcon) {
                        this._rootElement.appendChild(this.settingsIcon.rootElement)
                      }
                      if (!!this.statsIcon) {
                        this._rootElement.appendChild(this.statsIcon.rootElement)
                      }
                      if (!!this.xrIcon) {
                        _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.WebXRController.isSessionSupported(
                          'immersive-vr'
                        ).then((supported) => {
                          if (supported) {
                            this._rootElement.appendChild(this.xrIcon.rootElement)
                          }
                        })
                      }
                    }
                    return this._rootElement
                  }
                }

                /***/
              },

            /***/ './src/UI/FullscreenIcon.ts':
              /*!**********************************!*\
  !*** ./src/UI/FullscreenIcon.ts ***!
  \**********************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_107688__) => {
                __nested_webpack_require_107688__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_107688__.d(__webpack_exports__, {
                  /* harmony export */ FullScreenIcon: () => /* binding */ FullScreenIcon,
                  /* harmony export */ FullScreenIconBase: () => /* binding */ FullScreenIconBase,
                  /* harmony export */ FullScreenIconExternal: () => /* binding */ FullScreenIconExternal
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * Base class for an element (i.e. button) that, when clicked, will toggle fullscreen of a given element.
                 * Can be initialized with any HTMLElement, if it is set as rootElement in the constructor.
                 */
                class FullScreenIconBase {
                  get rootElement() {
                    return this._rootElement
                  }
                  set rootElement(element) {
                    element.onclick = () => this.toggleFullscreen()
                    this._rootElement = element
                  }
                  constructor() {
                    this.isFullscreen = false
                    // set up the full screen events
                    document.addEventListener('webkitfullscreenchange', () => this.onFullscreenChange(), false)
                    document.addEventListener('mozfullscreenchange', () => this.onFullscreenChange(), false)
                    document.addEventListener('fullscreenchange', () => this.onFullscreenChange(), false)
                    document.addEventListener('MSFullscreenChange', () => this.onFullscreenChange(), false)
                  }
                  /**
                   * Makes the document or fullscreenElement fullscreen.
                   */
                  toggleFullscreen() {
                    // if already full screen; exit
                    // else go fullscreen
                    if (
                      document.fullscreenElement ||
                      document.webkitFullscreenElement ||
                      document.mozFullScreenElement ||
                      document.msFullscreenElement
                    ) {
                      if (document.exitFullscreen) {
                        document.exitFullscreen()
                      } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen()
                      } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen()
                      } else if (document.msExitFullscreen) {
                        document.msExitFullscreen()
                      }
                    } else {
                      const element = this.fullscreenElement
                      if (!element) {
                        return
                      }
                      if (element.requestFullscreen) {
                        element.requestFullscreen()
                      } else if (element.mozRequestFullscreen) {
                        element.mozRequestFullscreen()
                      } else if (element.webkitRequestFullscreen) {
                        element.webkitRequestFullscreen()
                      } else if (element.msRequestFullscreen) {
                        element.msRequestFullscreen()
                      } else if (element.webkitEnterFullscreen) {
                        element.webkitEnterFullscreen() //for iphone this code worked
                      }
                    }
                    this.onFullscreenChange()
                  }
                  /**
                   * Handles the fullscreen button on change
                   */
                  onFullscreenChange() {
                    this.isFullscreen =
                      document.webkitIsFullScreen ||
                      document.mozFullScreen ||
                      (document.msFullscreenElement && document.msFullscreenElement !== null) ||
                      (document.fullscreenElement && document.fullscreenElement !== null)
                  }
                }
                /**
                 * An implementation of FullScreenIconBase that uses an externally
                 * provided HTMLElement for toggling full screen.
                 */
                class FullScreenIconExternal extends FullScreenIconBase {
                  constructor(externalButton) {
                    super()
                    this.rootElement = externalButton
                  }
                }
                /**
                 * The default fullscreen icon that contains a button and svgs for each state.
                 */
                class FullScreenIcon extends FullScreenIconBase {
                  constructor() {
                    super()
                    const createdButton = document.createElement('button')
                    createdButton.type = 'button'
                    createdButton.classList.add('UiTool')
                    createdButton.id = 'fullscreen-btn'
                    createdButton.appendChild(this.maximizeIcon)
                    createdButton.appendChild(this.minimizeIcon)
                    createdButton.appendChild(this.tooltipText)
                    this.rootElement = createdButton
                  }
                  get tooltipText() {
                    if (!this._tooltipText) {
                      this._tooltipText = document.createElement('span')
                      this._tooltipText.classList.add('tooltiptext')
                      this._tooltipText.innerHTML = 'Fullscreen'
                    }
                    return this._tooltipText
                  }
                  get maximizeIcon() {
                    if (!this._maximizeIcon) {
                      this._maximizeIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                      this._maximizeIcon.setAttributeNS(null, 'id', 'maximizeIcon')
                      this._maximizeIcon.setAttributeNS(null, 'x', '0px')
                      this._maximizeIcon.setAttributeNS(null, 'y', '0px')
                      this._maximizeIcon.setAttributeNS(null, 'viewBox', '0 0 384.97 384.97')
                      // create svg group for the paths
                      const svgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
                      svgGroup.classList.add('svgIcon')
                      this._maximizeIcon.appendChild(svgGroup)
                      // create paths for the icon itself, one for each corner
                      const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                      path1.setAttributeNS(
                        null,
                        'd',
                        'M384.97,12.03c0-6.713-5.317-12.03-12.03-12.03H264.847c-6.833,0-11.922,5.39-11.934,12.223c0,6.821,5.101,11.838,11.934,11.838h96.062l-0.193,96.519c0,6.833,5.197,12.03,12.03,12.03c6.833-0.012,12.03-5.197,12.03-12.03l0.193-108.369c0-0.036-0.012-0.06-0.012-0.084C384.958,12.09,384.97,12.066,384.97,12.03z'
                      )
                      const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                      path2.setAttributeNS(
                        null,
                        'd',
                        'M120.496,0H12.403c-0.036,0-0.06,0.012-0.096,0.012C12.283,0.012,12.247,0,12.223,0C5.51,0,0.192,5.317,0.192,12.03L0,120.399c0,6.833,5.39,11.934,12.223,11.934c6.821,0,11.838-5.101,11.838-11.934l0.192-96.339h96.242c6.833,0,12.03-5.197,12.03-12.03C132.514,5.197,127.317,0,120.496,0z'
                      )
                      const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                      path3.setAttributeNS(
                        null,
                        'd',
                        'M120.123,360.909H24.061v-96.242c0-6.833-5.197-12.03-12.03-12.03S0,257.833,0,264.667v108.092c0,0.036,0.012,0.06,0.012,0.084c0,0.036-0.012,0.06-0.012,0.096c0,6.713,5.317,12.03,12.03,12.03h108.092c6.833,0,11.922-5.39,11.934-12.223C132.057,365.926,126.956,360.909,120.123,360.909z'
                      )
                      const path4 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                      path4.setAttributeNS(
                        null,
                        'd',
                        'M372.747,252.913c-6.833,0-11.85,5.101-11.838,11.934v96.062h-96.242c-6.833,0-12.03,5.197-12.03,12.03s5.197,12.03,12.03,12.03h108.092c0.036,0,0.06-0.012,0.084-0.012c0.036-0.012,0.06,0.012,0.096,0.012c6.713,0,12.03-5.317,12.03-12.03V264.847C384.97,258.014,379.58,252.913,372.747,252.913z'
                      )
                      svgGroup.appendChild(path1)
                      svgGroup.appendChild(path2)
                      svgGroup.appendChild(path3)
                      svgGroup.appendChild(path4)
                    }
                    return this._maximizeIcon
                  }
                  get minimizeIcon() {
                    if (!this._minimizeIcon) {
                      this._minimizeIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                      this._minimizeIcon.setAttributeNS(null, 'id', 'minimizeIcon')
                      this._minimizeIcon.setAttributeNS(null, 'x', '0px')
                      this._minimizeIcon.setAttributeNS(null, 'y', '0px')
                      this._minimizeIcon.setAttributeNS(null, 'viewBox', '0 0 385.331 385.331')
                      // create svg group for the paths
                      const svgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
                      svgGroup.classList.add('svgIcon')
                      this._minimizeIcon.appendChild(svgGroup)
                      // create paths for the icon itself, one for each corner
                      const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                      path1.setAttributeNS(
                        null,
                        'd',
                        'M264.943,156.665h108.273c6.833,0,11.934-5.39,11.934-12.211c0-6.833-5.101-11.85-11.934-11.838h-96.242V36.181c0-6.833-5.197-12.03-12.03-12.03s-12.03,5.197-12.03,12.03v108.273c0,0.036,0.012,0.06,0.012,0.084c0,0.036-0.012,0.06-0.012,0.096C252.913,151.347,258.23,156.677,264.943,156.665z'
                      )
                      const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                      path2.setAttributeNS(
                        null,
                        'd',
                        'M120.291,24.247c-6.821,0-11.838,5.113-11.838,11.934v96.242H12.03c-6.833,0-12.03,5.197-12.03,12.03c0,6.833,5.197,12.03,12.03,12.03h108.273c0.036,0,0.06-0.012,0.084-0.012c0.036,0,0.06,0.012,0.096,0.012c6.713,0,12.03-5.317,12.03-12.03V36.181C132.514,29.36,127.124,24.259,120.291,24.247z'
                      )
                      const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                      path3.setAttributeNS(
                        null,
                        'd',
                        'M120.387,228.666H12.115c-6.833,0.012-11.934,5.39-11.934,12.223c0,6.833,5.101,11.85,11.934,11.838h96.242v96.423c0,6.833,5.197,12.03,12.03,12.03c6.833,0,12.03-5.197,12.03-12.03V240.877c0-0.036-0.012-0.06-0.012-0.084c0-0.036,0.012-0.06,0.012-0.096C132.418,233.983,127.1,228.666,120.387,228.666z'
                      )
                      const path4 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                      path4.setAttributeNS(
                        null,
                        'd',
                        'M373.3,228.666H265.028c-0.036,0-0.06,0.012-0.084,0.012c-0.036,0-0.06-0.012-0.096-0.012c-6.713,0-12.03,5.317-12.03,12.03v108.273c0,6.833,5.39,11.922,12.223,11.934c6.821,0.012,11.838-5.101,11.838-11.922v-96.242H373.3c6.833,0,12.03-5.197,12.03-12.03S380.134,228.678,373.3,228.666z'
                      )
                      svgGroup.appendChild(path1)
                      svgGroup.appendChild(path2)
                      svgGroup.appendChild(path3)
                      svgGroup.appendChild(path4)
                    }
                    return this._minimizeIcon
                  }
                  onFullscreenChange() {
                    super.onFullscreenChange()
                    const minimize = this.minimizeIcon
                    const maximize = this.maximizeIcon
                    if (this.isFullscreen) {
                      minimize.style.display = 'inline'
                      //ios disappearing svg fix
                      minimize.style.transform = 'translate(0, 0)'
                      maximize.style.display = 'none'
                    } else {
                      minimize.style.display = 'none'
                      maximize.style.display = 'inline'
                      //ios disappearing svg fix
                      maximize.style.transform = 'translate(0, 0)'
                    }
                  }
                }

                /***/
              },

            /***/ './src/UI/LabelledButton.ts':
              /*!**********************************!*\
  !*** ./src/UI/LabelledButton.ts ***!
  \**********************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_118552__) => {
                __nested_webpack_require_118552__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_118552__.d(__webpack_exports__, {
                  /* harmony export */ LabelledButton: () => /* binding */ LabelledButton
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * A button with a text label beside it.
                 */
                class LabelledButton {
                  constructor(label, buttonText) {
                    this._label = label
                    this._buttonText = buttonText
                  }
                  /**
                   * Add a click listener to the button element.
                   */
                  addOnClickListener(onClickFunc) {
                    this.button.addEventListener('click', onClickFunc)
                  }
                  /**
                   * Get the HTMLInputElement for the button.
                   */
                  get button() {
                    if (!this._button) {
                      this._button = document.createElement('input')
                      this._button.type = 'button'
                      this._button.value = this._buttonText
                      this._button.classList.add('overlay-button')
                      this._button.classList.add('btn-flat')
                    }
                    return this._button
                  }
                  /**
                   * @returns Return or creates a HTML element that represents this setting in the DOM.
                   */
                  get rootElement() {
                    if (!this._rootElement) {
                      // create root div with "setting" css class
                      this._rootElement = document.createElement('div')
                      this._rootElement.classList.add('setting')
                      // create div element to contain our setting's text
                      const settingsTextElem = document.createElement('div')
                      settingsTextElem.innerText = this._label
                      this._rootElement.appendChild(settingsTextElem)
                      // create label element to wrap out input type
                      const wrapperLabel = document.createElement('label')
                      wrapperLabel.classList.add('btn-overlay')
                      this._rootElement.appendChild(wrapperLabel)
                      wrapperLabel.appendChild(this.button)
                    }
                    return this._rootElement
                  }
                }

                /***/
              },

            /***/ './src/UI/LatencyTest.ts':
              /*!*******************************!*\
  !*** ./src/UI/LatencyTest.ts ***!
  \*******************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_120802__) => {
                __nested_webpack_require_120802__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_120802__.d(__webpack_exports__, {
                  /* harmony export */ LatencyTest: () => /* binding */ LatencyTest
                  /* harmony export */
                })
                /* harmony import */ var _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_120802__(
                    /*! @epicgames-ps/lib-pixelstreamingfrontend-ue5.2 */ '@epicgames-ps/lib-pixelstreamingfrontend-ue5.2'
                  )
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * Latency test UI elements and results handling.
                 */
                class LatencyTest {
                  /**
                   * Get the the button containing the stats icon.
                   */
                  get rootElement() {
                    if (!this._rootElement) {
                      this._rootElement = document.createElement('section')
                      this._rootElement.classList.add('settingsContainer')
                      // make heading
                      const heading = document.createElement('div')
                      heading.id = 'latencyTestHeader'
                      heading.classList.add('settings-text')
                      heading.classList.add('settingsHeader')
                      this._rootElement.appendChild(heading)
                      const headingText = document.createElement('div')
                      headingText.innerHTML = 'Latency Test'
                      heading.appendChild(headingText)
                      heading.appendChild(this.latencyTestButton)
                      // make test results element
                      const resultsParentElem = document.createElement('div')
                      resultsParentElem.id = 'latencyTestContainer'
                      resultsParentElem.classList.add('d-none')
                      this._rootElement.appendChild(resultsParentElem)
                      resultsParentElem.appendChild(this.latencyTestResultsElement)
                    }
                    return this._rootElement
                  }
                  get latencyTestResultsElement() {
                    if (!this._latencyTestResultsElement) {
                      this._latencyTestResultsElement = document.createElement('div')
                      this._latencyTestResultsElement.id = 'latencyStatsResults'
                      this._latencyTestResultsElement.classList.add('StatsResult')
                    }
                    return this._latencyTestResultsElement
                  }
                  get latencyTestButton() {
                    if (!this._latencyTestButton) {
                      this._latencyTestButton = document.createElement('input')
                      this._latencyTestButton.type = 'button'
                      this._latencyTestButton.value = 'Run Test'
                      this._latencyTestButton.id = 'btn-start-latency-test'
                      this._latencyTestButton.classList.add('streamTools-button')
                      this._latencyTestButton.classList.add('btn-flat')
                    }
                    return this._latencyTestButton
                  }
                  /**
                   * Populate the UI based on the latency test's results.
                   * @param latencyTimings The latency test results.
                   */
                  handleTestResult(latencyTimings) {
                    _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      latencyTimings.toString(),
                      6
                    )
                    let latencyStatsInnerHTML = ''
                    latencyStatsInnerHTML += '<div>Net latency RTT (ms): ' + latencyTimings.networkLatency + '</div>'
                    latencyStatsInnerHTML += '<div>UE Encode (ms): ' + latencyTimings.EncodeMs + '</div>'
                    latencyStatsInnerHTML += '<div>UE Capture (ms): ' + latencyTimings.CaptureToSendMs + '</div>'
                    latencyStatsInnerHTML +=
                      '<div>Browser send latency (ms): ' + latencyTimings.browserSendLatency + '</div>'
                    latencyStatsInnerHTML +=
                      latencyTimings.frameDisplayDeltaTimeMs && latencyTimings.browserReceiptTimeMs
                        ? '<div>Browser receive latency (ms): ' + latencyTimings.frameDisplayDeltaTimeMs + '</div>'
                        : ''
                    latencyStatsInnerHTML +=
                      '<div>Total latency (excluding browser) (ms): ' + latencyTimings.latencyExcludingDecode + '</div>'
                    latencyStatsInnerHTML += latencyTimings.endToEndLatency
                      ? '<div>Total latency (ms): ' + latencyTimings.endToEndLatency + '</div>'
                      : ''
                    this.latencyTestResultsElement.innerHTML = latencyStatsInnerHTML
                  }
                }

                /***/
              },

            /***/ './src/UI/SettingsIcon.ts':
              /*!********************************!*\
  !*** ./src/UI/SettingsIcon.ts ***!
  \********************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_125529__) => {
                __nested_webpack_require_125529__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_125529__.d(__webpack_exports__, {
                  /* harmony export */ SettingsIcon: () => /* binding */ SettingsIcon
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * Settings icon that can be clicked.
                 */
                class SettingsIcon {
                  /**
                   * Get the the button containing the settings icon.
                   */
                  get rootElement() {
                    if (!this._rootElement) {
                      this._rootElement = document.createElement('button')
                      this._rootElement.type = 'button'
                      this._rootElement.classList.add('UiTool')
                      this._rootElement.id = 'settingsBtn'
                      this._rootElement.appendChild(this.settingsIcon)
                      this._rootElement.appendChild(this.tooltipText)
                    }
                    return this._rootElement
                  }
                  get tooltipText() {
                    if (!this._tooltipText) {
                      this._tooltipText = document.createElement('span')
                      this._tooltipText.classList.add('tooltiptext')
                      this._tooltipText.innerHTML = 'Settings'
                    }
                    return this._tooltipText
                  }
                  get settingsIcon() {
                    if (!this._settingsIcon) {
                      this._settingsIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                      this._settingsIcon.setAttributeNS(null, 'id', 'settingsIcon')
                      this._settingsIcon.setAttributeNS(null, 'x', '0px')
                      this._settingsIcon.setAttributeNS(null, 'y', '0px')
                      this._settingsIcon.setAttributeNS(null, 'viewBox', '0 0 478.703 478.703')
                      // create svg group for the paths
                      const svgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
                      svgGroup.classList.add('svgIcon')
                      this._settingsIcon.appendChild(svgGroup)
                      // create paths for the icon itself, the inner and out path of a cog
                      const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                      path1.setAttributeNS(
                        null,
                        'd',
                        'M454.2,189.101l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8,7.1-27.9-3.2-38.1l-29.8-29.8\
			c-5.6-5.6-13-8.7-20.9-8.7c-6.2,0-12.1,1.9-17.1,5.5l-27.8,19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2\
			c-2.4-14.3-14.7-24.7-29.2-24.7h-42.1c-14.5,0-26.8,10.4-29.2,24.7l-5.8,34c-11.2,3.5-22.1,8.1-32.5,13.7l-27.5-19.8\
			c-5-3.6-11-5.5-17.2-5.5c-7.9,0-15.4,3.1-20.9,8.7l-29.9,29.8c-10.2,10.2-11.6,26.3-3.2,38.1l20,28.1\
			c-5.5,10.5-9.9,21.4-13.3,32.7l-33.2,5.6c-14.3,2.4-24.7,14.7-24.7,29.2v42.1c0,14.5,10.4,26.8,24.7,29.2l34,5.8\
			c3.5,11.2,8.1,22.1,13.7,32.5l-19.7,27.4c-8.4,11.8-7.1,27.9,3.2,38.1l29.8,29.8c5.6,5.6,13,8.7,20.9,8.7c6.2,0,12.1-1.9,17.1-5.5\
			l28.1-20c10.1,5.3,20.7,9.6,31.6,13l5.6,33.6c2.4,14.3,14.7,24.7,29.2,24.7h42.2c14.5,0,26.8-10.4,29.2-24.7l5.7-33.6\
			c11.3-3.5,22.2-8,32.6-13.5l27.7,19.8c5,3.6,11,5.5,17.2,5.5l0,0c7.9,0,15.3-3.1,20.9-8.7l29.8-29.8c10.2-10.2,11.6-26.3,3.2-38.1\
			l-19.8-27.8c5.5-10.5,10.1-21.4,13.5-32.6l33.6-5.6c14.3-2.4,24.7-14.7,24.7-29.2v-42.1\
			C478.9,203.801,468.5,191.501,454.2,189.101z M451.9,260.401c0,1.3-0.9,2.4-2.2,2.6l-42,7c-5.3,0.9-9.5,4.8-10.8,9.9\
			c-3.8,14.7-9.6,28.8-17.4,41.9c-2.7,4.6-2.5,10.3,0.6,14.7l24.7,34.8c0.7,1,0.6,2.5-0.3,3.4l-29.8,29.8c-0.7,0.7-1.4,0.8-1.9,0.8\
			c-0.6,0-1.1-0.2-1.5-0.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-0.6c-13.1,7.8-27.2,13.6-41.9,17.4c-5.2,1.3-9.1,5.6-9.9,10.8l-7.1,42\
			c-0.2,1.3-1.3,2.2-2.6,2.2h-42.1c-1.3,0-2.4-0.9-2.6-2.2l-7-42c-0.9-5.3-4.8-9.5-9.9-10.8c-14.3-3.7-28.1-9.4-41-16.8\
			c-2.1-1.2-4.5-1.8-6.8-1.8c-2.7,0-5.5,0.8-7.8,2.5l-35,24.9c-0.5,0.3-1,0.5-1.5,0.5c-0.4,0-1.2-0.1-1.9-0.8l-29.8-29.8\
			c-0.9-0.9-1-2.3-0.3-3.4l24.6-34.5c3.1-4.4,3.3-10.2,0.6-14.8c-7.8-13-13.8-27.1-17.6-41.8c-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2\
			c-1.3-0.2-2.2-1.3-2.2-2.6v-42.1c0-1.3,0.9-2.4,2.2-2.6l41.7-7c5.3-0.9,9.6-4.8,10.9-10c3.7-14.7,9.4-28.9,17.1-42\
			c2.7-4.6,2.4-10.3-0.7-14.6l-24.9-35c-0.7-1-0.6-2.5,0.3-3.4l29.8-29.8c0.7-0.7,1.4-0.8,1.9-0.8c0.6,0,1.1,0.2,1.5,0.5l34.5,24.6\
			c4.4,3.1,10.2,3.3,14.8,0.6c13-7.8,27.1-13.8,41.8-17.6c5.1-1.4,9-5.6,9.9-10.8l7.2-42.3c0.2-1.3,1.3-2.2,2.6-2.2h42.1\
			c1.3,0,2.4,0.9,2.6,2.2l7,41.7c0.9,5.3,4.8,9.6,10,10.9c15.1,3.8,29.5,9.7,42.9,17.6c4.6,2.7,10.3,2.5,14.7-0.6l34.5-24.8\
			c0.5-0.3,1-0.5,1.5-0.5c0.4,0,1.2,0.1,1.9,0.8l29.8,29.8c0.9,0.9,1,2.3,0.3,3.4l-24.7,34.7c-3.1,4.3-3.3,10.1-0.6,14.7\
			c7.8,13.1,13.6,27.2,17.4,41.9c1.3,5.2,5.6,9.1,10.8,9.9l42,7.1c1.3,0.2,2.2,1.3,2.2,2.6v42.1H451.9z'
                      )
                      const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                      path2.setAttributeNS(
                        null,
                        'd',
                        'M239.4,136.001c-57,0-103.3,46.3-103.3,103.3s46.3,103.3,103.3,103.3s103.3-46.3,103.3-103.3S296.4,136.001,239.4,136.001z M239.4,315.601c-42.1,0-76.3-34.2-76.3-76.3s34.2-76.3,76.3-76.3s76.3,34.2,76.3,76.3S281.5,315.601,239.4,315.601z'
                      )
                      svgGroup.appendChild(path1)
                      svgGroup.appendChild(path2)
                    }
                    return this._settingsIcon
                  }
                }

                /***/
              },

            /***/ './src/UI/SettingsPanel.ts':
              /*!*********************************!*\
  !*** ./src/UI/SettingsPanel.ts ***!
  \*********************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_130835__) => {
                __nested_webpack_require_130835__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_130835__.d(__webpack_exports__, {
                  /* harmony export */ SettingsPanel: () => /* binding */ SettingsPanel
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * A UI component containing all the settings for the application.
                 */
                class SettingsPanel {
                  constructor() {
                    this._rootElement = null
                  }
                  /**
                   * @returns Return or creates a HTML element that represents this setting in the DOM.
                   */
                  get rootElement() {
                    if (!this._rootElement) {
                      this._rootElement = document.createElement('div')
                      this._rootElement.id = 'settings-panel'
                      this._rootElement.classList.add('panel-wrap')
                      const panelElem = document.createElement('div')
                      panelElem.classList.add('panel')
                      this._rootElement.appendChild(panelElem)
                      const settingsHeading = document.createElement('div')
                      settingsHeading.id = 'settingsHeading'
                      settingsHeading.textContent = 'Settings'
                      panelElem.appendChild(settingsHeading)
                      panelElem.appendChild(this.settingsCloseButton)
                      panelElem.appendChild(this.settingsContentElement)
                    }
                    return this._rootElement
                  }
                  get settingsContentElement() {
                    if (!this._settingsContentElement) {
                      this._settingsContentElement = document.createElement('div')
                      this._settingsContentElement.id = 'settingsContent'
                    }
                    return this._settingsContentElement
                  }
                  get settingsCloseButton() {
                    if (!this._settingsCloseButton) {
                      this._settingsCloseButton = document.createElement('div')
                      this._settingsCloseButton.id = 'settingsClose'
                    }
                    return this._settingsCloseButton
                  }
                  /**
                   * Show settings panel.
                   */
                  show() {
                    if (!this.rootElement.classList.contains('panel-wrap-visible')) {
                      this.rootElement.classList.add('panel-wrap-visible')
                    }
                  }
                  /**
                   * Toggle the visibility of the settings panel.
                   */
                  toggleVisibility() {
                    this.rootElement.classList.toggle('panel-wrap-visible')
                  }
                  /**
                   * Hide settings panel.
                   */
                  hide() {
                    if (this.rootElement.classList.contains('panel-wrap-visible')) {
                      this.rootElement.classList.remove('panel-wrap-visible')
                    }
                  }
                }

                /***/
              },

            /***/ './src/UI/StatsIcon.ts':
              /*!*****************************!*\
  !*** ./src/UI/StatsIcon.ts ***!
  \*****************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_133585__) => {
                __nested_webpack_require_133585__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_133585__.d(__webpack_exports__, {
                  /* harmony export */ StatsIcon: () => /* binding */ StatsIcon
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * Stats icon that can be clicked.
                 */
                class StatsIcon {
                  /**
                   * Get the the button containing the stats icon.
                   */
                  get rootElement() {
                    if (!this._rootElement) {
                      this._rootElement = document.createElement('button')
                      this._rootElement.type = 'button'
                      this._rootElement.classList.add('UiTool')
                      this._rootElement.id = 'statsBtn'
                      this._rootElement.appendChild(this.statsIcon)
                      this._rootElement.appendChild(this.tooltipText)
                    }
                    return this._rootElement
                  }
                  get tooltipText() {
                    if (!this._tooltipText) {
                      this._tooltipText = document.createElement('span')
                      this._tooltipText.classList.add('tooltiptext')
                      this._tooltipText.innerHTML = 'Information'
                    }
                    return this._tooltipText
                  }
                  get statsIcon() {
                    if (!this._statsIcon) {
                      this._statsIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                      this._statsIcon.setAttributeNS(null, 'id', 'statsIcon')
                      this._statsIcon.setAttributeNS(null, 'x', '0px')
                      this._statsIcon.setAttributeNS(null, 'y', '0px')
                      this._statsIcon.setAttributeNS(null, 'viewBox', '0 0 330 330')
                      // create svg group for the paths
                      const svgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
                      svgGroup.classList.add('svgIcon')
                      this._statsIcon.appendChild(svgGroup)
                      // create paths for the icon itself, the inner and out path of a cog
                      const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                      path1.setAttributeNS(
                        null,
                        'd',
                        'M165,0.008C74.019,0.008,0,74.024,0,164.999c0,90.977,74.019,164.992,165,164.992s165-74.015,165-164.992C330,74.024,255.981,0.008,165,0.008z M165,299.992c-74.439,0-135-60.557-135-134.992S90.561,30.008,165,30.008s135,60.557,135,134.991C300,239.436,239.439,299.992,165,299.992z'
                      )
                      const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                      path2.setAttributeNS(
                        null,
                        'd',
                        'M165,130.008c-8.284,0-15,6.716-15,15v99.983c0,8.284,6.716,15,15,15s15-6.716,15-15v-99.983C180,136.725,173.284,130.008,165,130.008z'
                      )
                      const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                      path3.setAttributeNS(
                        null,
                        'd',
                        'M165,70.011c-3.95,0-7.811,1.6-10.61,4.39c-2.79,2.79-4.39,6.66-4.39,10.61s1.6,7.81,4.39,10.61c2.79,2.79,6.66,4.39,10.61,4.39s7.81-1.6,10.609-4.39c2.79-2.8,4.391-6.66,4.391-10.61s-1.601-7.82-4.391-10.61C172.81,71.61,168.95,70.011,165,70.011z'
                      )
                      svgGroup.appendChild(path1)
                      svgGroup.appendChild(path2)
                      svgGroup.appendChild(path3)
                    }
                    return this._statsIcon
                  }
                }

                /***/
              },

            /***/ './src/UI/StatsPanel.ts':
              /*!******************************!*\
  !*** ./src/UI/StatsPanel.ts ***!
  \******************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_136948__) => {
                __nested_webpack_require_136948__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_136948__.d(__webpack_exports__, {
                  /* harmony export */ Stat: () => /* binding */ Stat,
                  /* harmony export */ StatsPanel: () => /* binding */ StatsPanel
                  /* harmony export */
                })
                /* harmony import */ var _LatencyTest__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_136948__(
                  /*! ./LatencyTest */ './src/UI/LatencyTest.ts'
                )
                /* harmony import */ var _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__ =
                  __nested_webpack_require_136948__(
                    /*! @epicgames-ps/lib-pixelstreamingfrontend-ue5.2 */ '@epicgames-ps/lib-pixelstreamingfrontend-ue5.2'
                  )
                /* harmony import */ var _Util_MathUtils__WEBPACK_IMPORTED_MODULE_2__ =
                  __nested_webpack_require_136948__(/*! ../Util/MathUtils */ './src/Util/MathUtils.ts')
                // Copyright Epic Games, Inc. All Rights Reserved.

                /**
                 * A stat structure, an id, the stat string, and the element where it is rendered.
                 */
                class Stat {}
                /**
                 * A UI component containing all the stats for the application.
                 */
                class StatsPanel {
                  constructor() {
                    /* A map stats we are storing/rendering */
                    this.statsMap = new Map()
                    this.latencyTest = new _LatencyTest__WEBPACK_IMPORTED_MODULE_1__.LatencyTest()
                  }
                  /**
                   * @returns Return or creates a HTML element that represents this setting in the DOM.
                   */
                  get rootElement() {
                    if (!this._rootElement) {
                      this._rootElement = document.createElement('div')
                      this._rootElement.id = 'stats-panel'
                      this._rootElement.classList.add('panel-wrap')
                      const panelElem = document.createElement('div')
                      panelElem.classList.add('panel')
                      this._rootElement.appendChild(panelElem)
                      const statsHeading = document.createElement('div')
                      statsHeading.id = 'statsHeading'
                      statsHeading.textContent = 'Information'
                      panelElem.appendChild(statsHeading)
                      panelElem.appendChild(this.statsCloseButton)
                      panelElem.appendChild(this.statsContentElement)
                    }
                    return this._rootElement
                  }
                  get statsContentElement() {
                    if (!this._statsContentElement) {
                      this._statsContentElement = document.createElement('div')
                      this._statsContentElement.id = 'statsContent'
                      const streamToolStats = document.createElement('div')
                      streamToolStats.id = 'streamToolsStats'
                      streamToolStats.classList.add('container')
                      const controlStats = document.createElement('div')
                      controlStats.id = 'ControlStats'
                      controlStats.classList.add('row')
                      const statistics = document.createElement('section')
                      statistics.id = 'statistics'
                      statistics.classList.add('settingsContainer')
                      const statisticsHeader = document.createElement('div')
                      statisticsHeader.id = 'statisticsHeader'
                      statisticsHeader.classList.add('settings-text')
                      statisticsHeader.classList.add('settingsHeader')
                      const sessionStats = document.createElement('div')
                      sessionStats.innerHTML = 'Session Stats'
                      this._statsContentElement.appendChild(streamToolStats)
                      streamToolStats.appendChild(controlStats)
                      controlStats.appendChild(statistics)
                      statistics.appendChild(statisticsHeader)
                      statisticsHeader.appendChild(sessionStats)
                      statistics.appendChild(this.statisticsContainer)
                      controlStats.appendChild(this.latencyTest.rootElement)
                    }
                    return this._statsContentElement
                  }
                  get statisticsContainer() {
                    if (!this._statisticsContainer) {
                      this._statisticsContainer = document.createElement('div')
                      this._statisticsContainer.id = 'statisticsContainer'
                      this._statisticsContainer.classList.add('d-none')
                      this._statisticsContainer.appendChild(this.statsResult)
                    }
                    return this._statisticsContainer
                  }
                  get statsResult() {
                    if (!this._statsResult) {
                      this._statsResult = document.createElement('div')
                      this._statsResult.id = 'statisticsResult'
                      this._statsResult.classList.add('StatsResult')
                    }
                    return this._statsResult
                  }
                  get statsCloseButton() {
                    if (!this._statsCloseButton) {
                      this._statsCloseButton = document.createElement('div')
                      this._statsCloseButton.id = 'statsClose'
                    }
                    return this._statsCloseButton
                  }
                  /**
                   * Show stats panel.
                   */
                  show() {
                    if (!this.rootElement.classList.contains('panel-wrap-visible')) {
                      this.rootElement.classList.add('panel-wrap-visible')
                    }
                  }
                  /**
                   * Toggle the visibility of the stats panel.
                   */
                  toggleVisibility() {
                    this.rootElement.classList.toggle('panel-wrap-visible')
                  }
                  /**
                   * Hide the stats panel.
                   */
                  hide() {
                    if (this.rootElement.classList.contains('panel-wrap-visible')) {
                      this.rootElement.classList.remove('panel-wrap-visible')
                    }
                  }
                  /**
                   * Handle stats coming in from browser/UE
                   * @param stats the stats structure
                   */
                  handleStats(stats) {
                    var _a, _b, _c, _d, _e
                    // format numbering based on the browser language
                    const numberFormat = new Intl.NumberFormat(window.navigator.language, {
                      maximumFractionDigits: 0
                    })
                    // Inbound data
                    const inboundData = _Util_MathUtils__WEBPACK_IMPORTED_MODULE_2__.MathUtils.formatBytes(
                      stats.inboundVideoStats.bytesReceived,
                      2
                    )
                    this.addOrUpdateStat('InboundDataStat', 'Received', inboundData)
                    // Packets lost
                    const packetsLostStat = Object.prototype.hasOwnProperty.call(stats.inboundVideoStats, 'packetsLost')
                      ? numberFormat.format(stats.inboundVideoStats.packetsLost)
                      : 'Chrome only'
                    this.addOrUpdateStat('PacketsLostStat', 'Packets Lost', packetsLostStat)
                    // Bitrate
                    if (stats.inboundVideoStats.bitrate) {
                      this.addOrUpdateStat(
                        'VideoBitrateStat',
                        'Video Bitrate (kbps)',
                        stats.inboundVideoStats.bitrate.toString()
                      )
                    }
                    if (stats.inboundAudioStats.bitrate) {
                      this.addOrUpdateStat(
                        'AudioBitrateStat',
                        'Audio Bitrate (kbps)',
                        stats.inboundAudioStats.bitrate.toString()
                      )
                    }
                    // Video resolution
                    const resStat =
                      Object.prototype.hasOwnProperty.call(stats.inboundVideoStats, 'frameWidth') &&
                      stats.inboundVideoStats.frameWidth &&
                      Object.prototype.hasOwnProperty.call(stats.inboundVideoStats, 'frameHeight') &&
                      stats.inboundVideoStats.frameHeight
                        ? stats.inboundVideoStats.frameWidth + 'x' + stats.inboundVideoStats.frameHeight
                        : 'Chrome only'
                    this.addOrUpdateStat('VideoResStat', 'Video resolution', resStat)
                    // Frames decoded
                    const framesDecoded = Object.prototype.hasOwnProperty.call(stats.inboundVideoStats, 'framesDecoded')
                      ? numberFormat.format(stats.inboundVideoStats.framesDecoded)
                      : 'Chrome only'
                    this.addOrUpdateStat('FramesDecodedStat', 'Frames Decoded', framesDecoded)
                    // Framerate
                    if (stats.inboundVideoStats.framesPerSecond) {
                      this.addOrUpdateStat(
                        'FramerateStat',
                        'Framerate',
                        stats.inboundVideoStats.framesPerSecond.toString()
                      )
                    }
                    // Frames dropped
                    this.addOrUpdateStat(
                      'FramesDroppedStat',
                      'Frames dropped',
                      (_a = stats.inboundVideoStats.framesDropped) === null || _a === void 0 ? void 0 : _a.toString()
                    )
                    if (stats.inboundVideoStats.codecId) {
                      this.addOrUpdateStat(
                        'VideoCodecStat',
                        'Video codec',
                        // Split the codec to remove the Fmtp line
                        (_c =
                          (_b = stats.codecs.get(stats.inboundVideoStats.codecId)) === null || _b === void 0
                            ? void 0
                            : _b.split(' ')[0]) !== null && _c !== void 0
                          ? _c
                          : ''
                      )
                    }
                    if (stats.inboundAudioStats.codecId) {
                      this.addOrUpdateStat(
                        'AudioCodecStat',
                        'Audio codec',
                        // Split the codec to remove the Fmtp line
                        (_e =
                          (_d = stats.codecs.get(stats.inboundAudioStats.codecId)) === null || _d === void 0
                            ? void 0
                            : _d.split(' ')[0]) !== null && _e !== void 0
                          ? _e
                          : ''
                      )
                    }
                    // RTT
                    const netRTT =
                      Object.prototype.hasOwnProperty.call(stats.candidatePair, 'currentRoundTripTime') &&
                      stats.isNumber(stats.candidatePair.currentRoundTripTime)
                        ? numberFormat.format(stats.candidatePair.currentRoundTripTime * 1000)
                        : "Can't calculate"
                    this.addOrUpdateStat('RTTStat', 'Net RTT (ms)', netRTT)
                    this.addOrUpdateStat('DurationStat', 'Duration', stats.sessionStats.runTime)
                    this.addOrUpdateStat(
                      'ControlsInputStat',
                      'Controls stream input',
                      stats.sessionStats.controlsStreamInput
                    )
                    // QP
                    this.addOrUpdateStat(
                      'QPStat',
                      'Video quantization parameter',
                      stats.sessionStats.videoEncoderAvgQP.toString()
                    )
                    // todo:
                    //statsText += `<div>Browser receive to composite (ms): ${stats.inboundVideoStats.receiveToCompositeMs}</div>`;
                    _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Logger.Log(
                      _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Logger.GetStackTrace(),
                      `--------- Stats ---------\n ${stats}\n------------------------`,
                      6
                    )
                  }
                  /**
                   * Adds a new stat to the stats results in the DOM or updates an exiting stat.
                   * @param id The id of the stat to add/update.
                   * @param stat The contents of the stat.
                   */
                  addOrUpdateStat(id, statLabel, stat) {
                    const statHTML = `${statLabel}: ${stat}`
                    if (!this.statsMap.has(id)) {
                      // create the stat
                      const newStat = new Stat()
                      newStat.id = id
                      newStat.stat = stat
                      newStat.title = statLabel
                      newStat.element = document.createElement('div')
                      newStat.element.innerHTML = statHTML
                      // add the stat to the dom
                      this.statsResult.appendChild(newStat.element)
                      this.statsMap.set(id, newStat)
                    }
                    // update the existing stat
                    else {
                      const value = this.statsMap.get(id)
                      if (value !== undefined) {
                        value.element.innerHTML = statHTML
                      }
                    }
                  }
                }

                /***/
              },

            /***/ './src/UI/UIConfigurationTypes.ts':
              /*!****************************************!*\
  !*** ./src/UI/UIConfigurationTypes.ts ***!
  \****************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_147952__) => {
                __nested_webpack_require_147952__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_147952__.d(__webpack_exports__, {
                  /* harmony export */ UIElementCreationMode: () => /* binding */ UIElementCreationMode,
                  /* harmony export */ isPanelEnabled: () => /* binding */ isPanelEnabled
                  /* harmony export */
                })
                /** Whether a stream UI element is internally made, externally provided, or disabled. */
                var UIElementCreationMode
                ;(function (UIElementCreationMode) {
                  UIElementCreationMode[(UIElementCreationMode['CreateDefaultElement'] = 0)] = 'CreateDefaultElement'
                  UIElementCreationMode[(UIElementCreationMode['UseCustomElement'] = 1)] = 'UseCustomElement'
                  UIElementCreationMode[(UIElementCreationMode['Disable'] = 2)] = 'Disable'
                })(UIElementCreationMode || (UIElementCreationMode = {}))
                function isPanelEnabled(config) {
                  return !config || (!!config && config.isEnabled)
                }

                /***/
              },

            /***/ './src/UI/VideoQpIndicator.ts':
              /*!************************************!*\
  !*** ./src/UI/VideoQpIndicator.ts ***!
  \************************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_149101__) => {
                __nested_webpack_require_149101__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_149101__.d(__webpack_exports__, {
                  /* harmony export */ VideoQpIndicator: () => /* binding */ VideoQpIndicator
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * A UI element showing the QP (quantization parameter) of the video stream at the last encoded frame (well, last transmitted QP really).
                 * A blockier encoding will have a higher QP and this will make the indicator turn more red.
                 * A non-blocky stream will have a lower QP and this will make the indicator turn more green.
                 * The QP indicator is represented visually using a WiFi icon.
                 */
                class VideoQpIndicator {
                  constructor() {
                    this.videoEncoderAvgQP = -1
                    // non html elements
                    this.statsText = ''
                    this.color = ''
                    // qp colors
                    this.orangeQP = 26
                    this.redQP = 35
                  }
                  /**
                   * Get the root element of the QP indicator.
                   */
                  get rootElement() {
                    if (!this._rootElement) {
                      // make the root element that contains the svg for the connection
                      this._rootElement = document.createElement('div')
                      this._rootElement.id = 'connection'
                      this._rootElement.classList.add('UiTool')
                      // add svg icon for the connection strength
                      this._rootElement.appendChild(this.qualityStatus)
                      // add the text underneath the connection
                      this._rootElement.appendChild(this.qualityText)
                      // set colors to not connected initially
                      this.updateQpTooltip(-1)
                    }
                    return this._rootElement
                  }
                  /**
                   * Get the text that displays under the icon.
                   */
                  get qualityText() {
                    if (!this._qualityText) {
                      this._qualityText = document.createElement('span')
                      this._qualityText.id = 'qualityText'
                      this._qualityText.classList.add('tooltiptext')
                    }
                    return this._qualityText
                  }
                  /**
                   * Get the icon.
                   */
                  get qualityStatus() {
                    if (!this._qualityStatus) {
                      this._qualityStatus = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                      this._qualityStatus.setAttributeNS(null, 'id', 'connectionStrength')
                      this._qualityStatus.setAttributeNS(null, 'x', '0px')
                      this._qualityStatus.setAttributeNS(null, 'y', '0px')
                      this._qualityStatus.setAttributeNS(null, 'viewBox', '0 0 494.45 494.45')
                      // build wifi icon
                      this.qualityStatus.appendChild(this.dot)
                      this.qualityStatus.appendChild(this.middle)
                      this.qualityStatus.appendChild(this.outer)
                      this.qualityStatus.appendChild(this.inner)
                    }
                    return this._qualityStatus
                  }
                  /**
                   * Get the dot at the bottom of the wifi icon.
                   */
                  get dot() {
                    if (!this._dot) {
                      this._dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
                      this._dot.setAttributeNS(null, 'id', 'dot')
                      this._dot.setAttributeNS(null, 'cx', '247.125')
                      this._dot.setAttributeNS(null, 'cy', '398.925')
                      this._dot.setAttributeNS(null, 'r', '35.3')
                    }
                    return this._dot
                  }
                  /**
                   * Get the outer arc of the wifi icon.
                   */
                  get outer() {
                    if (!this._outer) {
                      this._outer = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                      this._outer.setAttributeNS(null, 'id', 'outer')
                      this._outer.setAttributeNS(
                        null,
                        'd',
                        'M467.925,204.625c-6.8,0-13.5-2.6-18.7-7.8c-111.5-111.4-292.7-111.4-404.1,0c-10.3,10.3-27.1,10.3-37.4,0s-10.3-27.1,0-37.4c64-64,149-99.2,239.5-99.2s175.5,35.2,239.5,99.2c10.3,10.3,10.3,27.1,0,37.4C481.425,202.025,474.625,204.625,467.925,204.625z'
                      )
                    }
                    return this._outer
                  }
                  /**
                   * Get the middle arc of the wifi icon.
                   */
                  get middle() {
                    if (!this._middle) {
                      this._middle = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                      this._middle.setAttributeNS(null, 'id', 'middle')
                      this._middle.setAttributeNS(
                        null,
                        'd',
                        'M395.225,277.325c-6.8,0-13.5-2.6-18.7-7.8c-71.4-71.3-187.4-71.3-258.8,0c-10.3,10.3-27.1,10.3-37.4,0s-10.3-27.1,0-37.4c92-92,241.6-92,333.6,0c10.3,10.3,10.3,27.1,0,37.4C408.725,274.725,401.925,277.325,395.225,277.325z'
                      )
                    }
                    return this._middle
                  }
                  /**
                   * Get the inner arc of the wifi icon.
                   */
                  get inner() {
                    if (!this._inner) {
                      this._inner = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                      this._inner.setAttributeNS(null, 'id', 'inner')
                      this._inner.setAttributeNS(
                        null,
                        'd',
                        'M323.625,348.825c-6.8,0-13.5-2.6-18.7-7.8c-15.4-15.4-36-23.9-57.8-23.9s-42.4,8.5-57.8,23.9c-10.3,10.3-27.1,10.3-37.4,0c-10.3-10.3-10.3-27.1,0-37.4c25.4-25.4,59.2-39.4,95.2-39.4s69.8,14,95.2,39.5c10.3,10.3,10.3,27.1,0,37.4C337.225,346.225,330.425,348.825,323.625,348.825z'
                      )
                    }
                    return this._inner
                  }
                  /**
                   * Used to set the speed of the status light.
                   * @param speed - Set the speed of the blink, higher numbers make the status light blink faster.
                   */
                  blinkVideoQualityStatus(speed) {
                    let iteration = speed
                    let opacity = 1
                    const tickID = setInterval(() => {
                      opacity -= 0.1
                      this.qualityText.style.opacity = String(Math.abs((opacity - 0.5) * 2))
                      if (opacity <= 0.1) {
                        if (--iteration == 0) {
                          clearInterval(tickID)
                        } else {
                          opacity = 1
                        }
                      }
                    }, 100 / speed)
                  }
                  /**
                   * updates the QP tooltip by converting the Video Encoder QP to a color light
                   * @param QP - The video encoder QP number needed to find the average
                   */
                  updateQpTooltip(QP) {
                    this.videoEncoderAvgQP = QP
                    if (QP > this.redQP) {
                      this.color = 'red'
                      this.blinkVideoQualityStatus(2)
                      this.statsText = `<div style="color: ${this.color}">Poor encoding quality</div>`
                      this.outer.setAttributeNS(null, 'fill', '#3c3b40')
                      this.middle.setAttributeNS(null, 'fill', '#3c3b40')
                      this.inner.setAttributeNS(null, 'fill', this.color)
                      this.dot.setAttributeNS(null, 'fill', this.color)
                    } else if (QP > this.orangeQP) {
                      this.color = 'orange'
                      this.blinkVideoQualityStatus(1)
                      this.statsText = `<div style="color: ${this.color}">Blocky encoding quality</div>`
                      this.outer.setAttributeNS(null, 'fill', '#3c3b40')
                      this.middle.setAttributeNS(null, 'fill', this.color)
                      this.inner.setAttributeNS(null, 'fill', this.color)
                      this.dot.setAttributeNS(null, 'fill', this.color)
                    } else if (QP <= 0) {
                      this.color = '#b0b0b0'
                      this.outer.setAttributeNS(null, 'fill', '#3c3b40')
                      this.middle.setAttributeNS(null, 'fill', '#3c3b40')
                      this.inner.setAttributeNS(null, 'fill', '#3c3b40')
                      this.dot.setAttributeNS(null, 'fill', '#3c3b40')
                      this.statsText = `<div style="color: ${this.color}">Not connected</div>`
                    } else {
                      this.color = 'lime'
                      this.qualityStatus.style.opacity = '1'
                      this.statsText = `<div style="color: ${this.color}">Clear encoding quality</div>`
                      this.outer.setAttributeNS(null, 'fill', this.color)
                      this.middle.setAttributeNS(null, 'fill', this.color)
                      this.inner.setAttributeNS(null, 'fill', this.color)
                      this.dot.setAttributeNS(null, 'fill', this.color)
                    }
                    this.qualityText.innerHTML = this.statsText
                  }
                }

                /***/
              },

            /***/ './src/UI/XRIcon.ts':
              /*!**************************!*\
  !*** ./src/UI/XRIcon.ts ***!
  \**************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_157370__) => {
                __nested_webpack_require_157370__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_157370__.d(__webpack_exports__, {
                  /* harmony export */ XRIcon: () => /* binding */ XRIcon
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                /**
                 * XR icon that can be clicked.
                 */
                class XRIcon {
                  /**
                   * Get the the button containing the XR icon.
                   */
                  get rootElement() {
                    if (!this._rootElement) {
                      this._rootElement = document.createElement('button')
                      this._rootElement.type = 'button'
                      this._rootElement.classList.add('UiTool')
                      this._rootElement.id = 'xrBtn'
                      this._rootElement.appendChild(this.xrIcon)
                      this._rootElement.appendChild(this.tooltipText)
                    }
                    return this._rootElement
                  }
                  get tooltipText() {
                    if (!this._tooltipText) {
                      this._tooltipText = document.createElement('span')
                      this._tooltipText.classList.add('tooltiptext')
                      this._tooltipText.innerHTML = 'XR'
                    }
                    return this._tooltipText
                  }
                  get xrIcon() {
                    if (!this._xrIcon) {
                      this._xrIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                      this._xrIcon.setAttributeNS(null, 'id', 'xrIcon')
                      this._xrIcon.setAttributeNS(null, 'x', '0px')
                      this._xrIcon.setAttributeNS(null, 'y', '0px')
                      this._xrIcon.setAttributeNS(null, 'viewBox', '0 0 100 100')
                      // create svg group for the paths
                      const svgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
                      svgGroup.classList.add('svgIcon')
                      this._xrIcon.appendChild(svgGroup)
                      // create paths for the icon itself, the path of the xr headset
                      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                      path.setAttributeNS(
                        null,
                        'd',
                        'M29 41c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 14c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm42-14c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 14c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm12-31H17c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h14.5c3.5 0 6.8-1.5 9-4.1l3.5-4c1.5-1.7 3.7-2.7 6-2.7s4.5 1 6 2.7l3.5 4c2.3 2.6 5.6 4.1 9 4.1H83c6.6 0 12-5.4 12-12V36c0-6.6-5.4-12-12-12zm8 40c0 4.4-3.6 8-8 8H68.5c-2.3 0-4.5-1-6-2.7l-3.5-4c-2.3-2.6-5.6-4.1-9-4.1-3.5 0-6.8 1.5-9 4.1l-3.5 4C36 71 33.8 72 31.5 72H17c-4.4 0-8-3.6-8-8V36c0-4.4 3.6-8 8-8h66c4.4 0 8 3.6 8 8v28z'
                      )
                      svgGroup.appendChild(path)
                    }
                    return this._xrIcon
                  }
                }

                /***/
              },

            /***/ './src/Util/MathUtils.ts':
              /*!*******************************!*\
  !*** ./src/Util/MathUtils.ts ***!
  \*******************************/
              /***/ (__unused_webpack_module, __webpack_exports__, __nested_webpack_require_160231__) => {
                __nested_webpack_require_160231__.r(__webpack_exports__)
                /* harmony export */ __nested_webpack_require_160231__.d(__webpack_exports__, {
                  /* harmony export */ MathUtils: () => /* binding */ MathUtils
                  /* harmony export */
                })
                // Copyright Epic Games, Inc. All Rights Reserved.
                class MathUtils {
                  /**
                   * formats Bytes coming in for video stats
                   * @param bytes number to convert
                   * @param decimals number of decimal places
                   */
                  static formatBytes(bytes, decimals) {
                    if (bytes === 0) {
                      return '0'
                    }
                    const factor = 1024
                    const dm = decimals < 0 ? 0 : decimals
                    const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
                    const i = Math.floor(Math.log(bytes) / Math.log(factor))
                    return parseFloat((bytes / Math.pow(factor, i)).toFixed(dm)) + ' ' + sizes[i]
                  }
                }

                /***/
              },

            /***/ '@epicgames-ps/lib-pixelstreamingfrontend-ue5.2':
              /*!*****************************************************************!*\
  !*** external "@epicgames-ps/lib-pixelstreamingfrontend-ue5.2" ***!
  \*****************************************************************/
              /***/ (module) => {
                var x = (y) => {
                  var x = {}
                  __nested_webpack_require_162986__.d(x, y)
                  return x
                }
                var y = (x) => () => x
                module.exports = _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_0__

                /***/
              },

            /***/ jss:
              /*!**********************!*\
  !*** external "jss" ***!
  \**********************/
              /***/ (module) => {
                var x = (y) => {
                  var x = {}
                  __nested_webpack_require_162986__.d(x, y)
                  return x
                }
                var y = (x) => () => x
                module.exports = jss__WEBPACK_IMPORTED_MODULE_1__

                /***/
              },

            /***/ 'jss-plugin-camel-case':
              /*!****************************************!*\
  !*** external "jss-plugin-camel-case" ***!
  \****************************************/
              /***/ (module) => {
                var x = (y) => {
                  var x = {}
                  __nested_webpack_require_162986__.d(x, y)
                  return x
                }
                var y = (x) => () => x
                module.exports = jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_2__

                /***/
              },

            /***/ 'jss-plugin-global':
              /*!************************************!*\
  !*** external "jss-plugin-global" ***!
  \************************************/
              /***/ (module) => {
                var x = (y) => {
                  var x = {}
                  __nested_webpack_require_162986__.d(x, y)
                  return x
                }
                var y = (x) => () => x
                module.exports = jss_plugin_global__WEBPACK_IMPORTED_MODULE_3__

                /***/
              }

            /******/
          }
          /************************************************************************/
          /******/ // The module cache
          /******/ var __webpack_module_cache__ = {}
          /******/
          /******/ // The require function
          /******/ function __nested_webpack_require_162986__(moduleId) {
            /******/ // Check if module is in cache
            /******/ var cachedModule = __webpack_module_cache__[moduleId]
            /******/ if (cachedModule !== undefined) {
              /******/ return cachedModule.exports
              /******/
            }
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = (__webpack_module_cache__[moduleId] = {
              /******/ // no module.id needed
              /******/ // no module.loaded needed
              /******/ exports: {}
              /******/
            })
            /******/
            /******/ // Execute the module function
            /******/ __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_162986__)
            /******/
            /******/ // Return the exports of the module
            /******/ return module.exports
            /******/
          }
          /******/
          /************************************************************************/
          /******/ /* webpack/runtime/define property getters */
          /******/ ;(() => {
            /******/ // define getter functions for harmony exports
            /******/ __nested_webpack_require_162986__.d = (exports, definition) => {
              /******/ for (var key in definition) {
                /******/ if (
                  __nested_webpack_require_162986__.o(definition, key) &&
                  !__nested_webpack_require_162986__.o(exports, key)
                ) {
                  /******/ Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: definition[key]
                  })
                  /******/
                }
                /******/
              }
              /******/
            }
            /******/
          })() /* webpack/runtime/hasOwnProperty shorthand */
          /******/
          /******/
          /******/
          ;(() => {
            /******/ __nested_webpack_require_162986__.o = (obj, prop) =>
              Object.prototype.hasOwnProperty.call(obj, prop)
            /******/
          })() /* webpack/runtime/make namespace object */
          /******/
          /******/
          /******/
          ;(() => {
            /******/ // define __esModule on exports
            /******/ __nested_webpack_require_162986__.r = (exports) => {
              /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                  value: 'Module'
                })
                /******/
              }
              /******/ Object.defineProperty(exports, '__esModule', {
                value: true
              })
              /******/
            }
            /******/
          })()
          /******/
          /************************************************************************/
          var __webpack_exports__ = {}
          // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
          ;(() => {
            /*!******************************************!*\
  !*** ./src/pixelstreamingfrontend-ui.ts ***!
  \******************************************/
            __nested_webpack_require_162986__.r(__webpack_exports__)
            /* harmony export */ __nested_webpack_require_162986__.d(__webpack_exports__, {
              /* harmony export */ AFKOverlay: () =>
                /* reexport safe */ _Overlay_AFKOverlay__WEBPACK_IMPORTED_MODULE_2__.AFKOverlay,
              /* harmony export */ ActionOverlay: () =>
                /* reexport safe */ _Overlay_ActionOverlay__WEBPACK_IMPORTED_MODULE_3__.ActionOverlay,
              /* harmony export */ Application: () =>
                /* reexport safe */ _Application_Application__WEBPACK_IMPORTED_MODULE_0__.Application,
              /* harmony export */ ConfigUI: () =>
                /* reexport safe */ _Config_ConfigUI__WEBPACK_IMPORTED_MODULE_11__.ConfigUI,
              /* harmony export */ ConnectOverlay: () =>
                /* reexport safe */ _Overlay_ConnectOverlay__WEBPACK_IMPORTED_MODULE_5__.ConnectOverlay,
              /* harmony export */ DisconnectOverlay: () =>
                /* reexport safe */ _Overlay_DisconnectOverlay__WEBPACK_IMPORTED_MODULE_6__.DisconnectOverlay,
              /* harmony export */ ErrorOverlay: () =>
                /* reexport safe */ _Overlay_ErrorOverlay__WEBPACK_IMPORTED_MODULE_7__.ErrorOverlay,
              /* harmony export */ InfoOverlay: () =>
                /* reexport safe */ _Overlay_InfoOverlay__WEBPACK_IMPORTED_MODULE_8__.InfoOverlay,
              /* harmony export */ OverlayBase: () =>
                /* reexport safe */ _Overlay_BaseOverlay__WEBPACK_IMPORTED_MODULE_4__.OverlayBase,
              /* harmony export */ PixelStreamingApplicationStyle: () =>
                /* reexport safe */ _Styles_PixelStreamingApplicationStyles__WEBPACK_IMPORTED_MODULE_1__.PixelStreamingApplicationStyle,
              /* harmony export */ PlayOverlay: () =>
                /* reexport safe */ _Overlay_PlayOverlay__WEBPACK_IMPORTED_MODULE_9__.PlayOverlay,
              /* harmony export */ SettingUIBase: () =>
                /* reexport safe */ _Config_SettingUIBase__WEBPACK_IMPORTED_MODULE_12__.SettingUIBase,
              /* harmony export */ SettingUIFlag: () =>
                /* reexport safe */ _Config_SettingUIFlag__WEBPACK_IMPORTED_MODULE_13__.SettingUIFlag,
              /* harmony export */ SettingUINumber: () =>
                /* reexport safe */ _Config_SettingUINumber__WEBPACK_IMPORTED_MODULE_14__.SettingUINumber,
              /* harmony export */ SettingUIOption: () =>
                /* reexport safe */ _Config_SettingUIOption__WEBPACK_IMPORTED_MODULE_15__.SettingUIOption,
              /* harmony export */ SettingUIText: () =>
                /* reexport safe */ _Config_SettingUIText__WEBPACK_IMPORTED_MODULE_16__.SettingUIText,
              /* harmony export */ TextOverlay: () =>
                /* reexport safe */ _Overlay_TextOverlay__WEBPACK_IMPORTED_MODULE_10__.TextOverlay,
              /* harmony export */ UIElementCreationMode: () =>
                /* reexport safe */ _UI_UIConfigurationTypes__WEBPACK_IMPORTED_MODULE_17__.UIElementCreationMode
              /* harmony export */
            })
            /* harmony import */ var _Application_Application__WEBPACK_IMPORTED_MODULE_0__ =
              __nested_webpack_require_162986__(/*! ./Application/Application */ './src/Application/Application.ts')
            /* harmony import */ var _Styles_PixelStreamingApplicationStyles__WEBPACK_IMPORTED_MODULE_1__ =
              __nested_webpack_require_162986__(
                /*! ./Styles/PixelStreamingApplicationStyles */ './src/Styles/PixelStreamingApplicationStyles.ts'
              )
            /* harmony import */ var _Overlay_AFKOverlay__WEBPACK_IMPORTED_MODULE_2__ =
              __nested_webpack_require_162986__(/*! ./Overlay/AFKOverlay */ './src/Overlay/AFKOverlay.ts')
            /* harmony import */ var _Overlay_ActionOverlay__WEBPACK_IMPORTED_MODULE_3__ =
              __nested_webpack_require_162986__(/*! ./Overlay/ActionOverlay */ './src/Overlay/ActionOverlay.ts')
            /* harmony import */ var _Overlay_BaseOverlay__WEBPACK_IMPORTED_MODULE_4__ =
              __nested_webpack_require_162986__(/*! ./Overlay/BaseOverlay */ './src/Overlay/BaseOverlay.ts')
            /* harmony import */ var _Overlay_ConnectOverlay__WEBPACK_IMPORTED_MODULE_5__ =
              __nested_webpack_require_162986__(/*! ./Overlay/ConnectOverlay */ './src/Overlay/ConnectOverlay.ts')
            /* harmony import */ var _Overlay_DisconnectOverlay__WEBPACK_IMPORTED_MODULE_6__ =
              __nested_webpack_require_162986__(/*! ./Overlay/DisconnectOverlay */ './src/Overlay/DisconnectOverlay.ts')
            /* harmony import */ var _Overlay_ErrorOverlay__WEBPACK_IMPORTED_MODULE_7__ =
              __nested_webpack_require_162986__(/*! ./Overlay/ErrorOverlay */ './src/Overlay/ErrorOverlay.ts')
            /* harmony import */ var _Overlay_InfoOverlay__WEBPACK_IMPORTED_MODULE_8__ =
              __nested_webpack_require_162986__(/*! ./Overlay/InfoOverlay */ './src/Overlay/InfoOverlay.ts')
            /* harmony import */ var _Overlay_PlayOverlay__WEBPACK_IMPORTED_MODULE_9__ =
              __nested_webpack_require_162986__(/*! ./Overlay/PlayOverlay */ './src/Overlay/PlayOverlay.ts')
            /* harmony import */ var _Overlay_TextOverlay__WEBPACK_IMPORTED_MODULE_10__ =
              __nested_webpack_require_162986__(/*! ./Overlay/TextOverlay */ './src/Overlay/TextOverlay.ts')
            /* harmony import */ var _Config_ConfigUI__WEBPACK_IMPORTED_MODULE_11__ = __nested_webpack_require_162986__(
              /*! ./Config/ConfigUI */ './src/Config/ConfigUI.ts'
            )
            /* harmony import */ var _Config_SettingUIBase__WEBPACK_IMPORTED_MODULE_12__ =
              __nested_webpack_require_162986__(/*! ./Config/SettingUIBase */ './src/Config/SettingUIBase.ts')
            /* harmony import */ var _Config_SettingUIFlag__WEBPACK_IMPORTED_MODULE_13__ =
              __nested_webpack_require_162986__(/*! ./Config/SettingUIFlag */ './src/Config/SettingUIFlag.ts')
            /* harmony import */ var _Config_SettingUINumber__WEBPACK_IMPORTED_MODULE_14__ =
              __nested_webpack_require_162986__(/*! ./Config/SettingUINumber */ './src/Config/SettingUINumber.ts')
            /* harmony import */ var _Config_SettingUIOption__WEBPACK_IMPORTED_MODULE_15__ =
              __nested_webpack_require_162986__(/*! ./Config/SettingUIOption */ './src/Config/SettingUIOption.ts')
            /* harmony import */ var _Config_SettingUIText__WEBPACK_IMPORTED_MODULE_16__ =
              __nested_webpack_require_162986__(/*! ./Config/SettingUIText */ './src/Config/SettingUIText.ts')
            /* harmony import */ var _UI_UIConfigurationTypes__WEBPACK_IMPORTED_MODULE_17__ =
              __nested_webpack_require_162986__(/*! ./UI/UIConfigurationTypes */ './src/UI/UIConfigurationTypes.ts')
            // Copyright Epic Games, Inc. All Rights Reserved.
          })()

          var __webpack_exports__AFKOverlay = __webpack_exports__.AFKOverlay
          var __webpack_exports__ActionOverlay = __webpack_exports__.ActionOverlay
          var __webpack_exports__Application = __webpack_exports__.Application
          var __webpack_exports__ConfigUI = __webpack_exports__.ConfigUI
          var __webpack_exports__ConnectOverlay = __webpack_exports__.ConnectOverlay
          var __webpack_exports__DisconnectOverlay = __webpack_exports__.DisconnectOverlay
          var __webpack_exports__ErrorOverlay = __webpack_exports__.ErrorOverlay
          var __webpack_exports__InfoOverlay = __webpack_exports__.InfoOverlay
          var __webpack_exports__OverlayBase = __webpack_exports__.OverlayBase
          var __webpack_exports__PixelStreamingApplicationStyle = __webpack_exports__.PixelStreamingApplicationStyle
          var __webpack_exports__PlayOverlay = __webpack_exports__.PlayOverlay
          var __webpack_exports__SettingUIBase = __webpack_exports__.SettingUIBase
          var __webpack_exports__SettingUIFlag = __webpack_exports__.SettingUIFlag
          var __webpack_exports__SettingUINumber = __webpack_exports__.SettingUINumber
          var __webpack_exports__SettingUIOption = __webpack_exports__.SettingUIOption
          var __webpack_exports__SettingUIText = __webpack_exports__.SettingUIText
          var __webpack_exports__TextOverlay = __webpack_exports__.TextOverlay
          var __webpack_exports__UIElementCreationMode = __webpack_exports__.UIElementCreationMode

          /***/
        },

      /***/ '../../ui-library/node_modules/hyphenate-style-name/index.js':
        /*!*******************************************************************!*\
  !*** ../../ui-library/node_modules/hyphenate-style-name/index.js ***!
  \*******************************************************************/
        /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__)
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__
            /* harmony export */
          })
          /* eslint-disable no-var, prefer-template */
          var uppercasePattern = /[A-Z]/g
          var msPattern = /^ms-/
          var cache = {}

          function toHyphenLower(match) {
            return '-' + match.toLowerCase()
          }

          function hyphenateStyleName(name) {
            if (cache.hasOwnProperty(name)) {
              return cache[name]
            }

            var hName = name.replace(uppercasePattern, toHyphenLower)
            return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
          }

          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = hyphenateStyleName

          /***/
        },

      /***/ '../../ui-library/node_modules/is-in-browser/dist/module.js':
        /*!******************************************************************!*\
  !*** ../../ui-library/node_modules/is-in-browser/dist/module.js ***!
  \******************************************************************/
        /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__)
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */ isBrowser: () => /* binding */ isBrowser
            /* harmony export */
          })
          var _typeof =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
              ? function (obj) {
                  return typeof obj
                }
              : function (obj) {
                  return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj
                }

          var isBrowser =
            (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' &&
            (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object' &&
            document.nodeType === 9

          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = isBrowser

          /***/
        },

      /***/ '../../ui-library/node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js':
        /*!*********************************************************************************************!*\
  !*** ../../ui-library/node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js ***!
  \*********************************************************************************************/
        /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__)
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__
            /* harmony export */
          })
          /* harmony import */ var hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! hyphenate-style-name */ '../../ui-library/node_modules/hyphenate-style-name/index.js'
          )

          /**
           * Convert camel cased property names to dash separated.
           */

          function convertCase(style) {
            var converted = {}

            for (var prop in style) {
              var key =
                prop.indexOf('--') === 0
                  ? prop
                  : (0, hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__['default'])(prop)
              converted[key] = style[prop]
            }

            if (style.fallbacks) {
              if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase)
              else converted.fallbacks = convertCase(style.fallbacks)
            }

            return converted
          }
          /**
           * Allow camel cased property names by converting them back to dasherized.
           */

          function camelCase() {
            function onProcessStyle(style) {
              if (Array.isArray(style)) {
                // Handle rules like @font-face, which can have multiple styles in an array
                for (var index = 0; index < style.length; index++) {
                  style[index] = convertCase(style[index])
                }

                return style
              }

              return convertCase(style)
            }

            function onChangeValue(value, prop, rule) {
              if (prop.indexOf('--') === 0) {
                return value
              }

              var hyphenatedProp = (0, hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__['default'])(prop) // There was no camel case in place

              if (prop === hyphenatedProp) return value
              rule.prop(hyphenatedProp, value) // Core will ignore that property value we set the proper one above.

              return null
            }

            return {
              onProcessStyle: onProcessStyle,
              onChangeValue: onChangeValue
            }
          }

          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = camelCase

          /***/
        },

      /***/ '../../ui-library/node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js':
        /*!*************************************************************************************!*\
  !*** ../../ui-library/node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js ***!
  \*************************************************************************************/
        /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__)
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__
            /* harmony export */
          })
          /* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/esm/extends */ '../../ui-library/node_modules/@babel/runtime/helpers/esm/extends.js'
            )
          /* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! jss */ '../../ui-library/node_modules/jss/dist/jss.esm.js'
          )

          var at = '@global'
          var atPrefix = '@global '

          var GlobalContainerRule =
            /*#__PURE__*/
            (function () {
              function GlobalContainerRule(key, styles, options) {
                this.type = 'global'
                this.at = at
                this.isProcessed = false
                this.key = key
                this.options = options
                this.rules = new jss__WEBPACK_IMPORTED_MODULE_1__.RuleList(
                  (0, _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])({}, options, {
                    parent: this
                  })
                )

                for (var selector in styles) {
                  this.rules.add(selector, styles[selector])
                }

                this.rules.process()
              }
              /**
               * Get a rule.
               */

              var _proto = GlobalContainerRule.prototype

              _proto.getRule = function getRule(name) {
                return this.rules.get(name)
              }
              /**
               * Create and register rule, run plugins.
               */

              _proto.addRule = function addRule(name, style, options) {
                var rule = this.rules.add(name, style, options)
                if (rule) this.options.jss.plugins.onProcessRule(rule)
                return rule
              }
              /**
               * Replace rule, run plugins.
               */

              _proto.replaceRule = function replaceRule(name, style, options) {
                var newRule = this.rules.replace(name, style, options)
                if (newRule) this.options.jss.plugins.onProcessRule(newRule)
                return newRule
              }
              /**
               * Get index of a rule.
               */

              _proto.indexOf = function indexOf(rule) {
                return this.rules.indexOf(rule)
              }
              /**
               * Generates a CSS string.
               */

              _proto.toString = function toString(options) {
                return this.rules.toString(options)
              }

              return GlobalContainerRule
            })()

          var GlobalPrefixedRule =
            /*#__PURE__*/
            (function () {
              function GlobalPrefixedRule(key, style, options) {
                this.type = 'global'
                this.at = at
                this.isProcessed = false
                this.key = key
                this.options = options
                var selector = key.substr(atPrefix.length)
                this.rule = options.jss.createRule(
                  selector,
                  style,
                  (0, _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])({}, options, {
                    parent: this
                  })
                )
              }

              var _proto2 = GlobalPrefixedRule.prototype

              _proto2.toString = function toString(options) {
                return this.rule ? this.rule.toString(options) : ''
              }

              return GlobalPrefixedRule
            })()

          var separatorRegExp = /\s*,\s*/g

          function addScope(selector, scope) {
            var parts = selector.split(separatorRegExp)
            var scoped = ''

            for (var i = 0; i < parts.length; i++) {
              scoped += scope + ' ' + parts[i].trim()
              if (parts[i + 1]) scoped += ', '
            }

            return scoped
          }

          function handleNestedGlobalContainerRule(rule, sheet) {
            var options = rule.options,
              style = rule.style
            var rules = style ? style[at] : null
            if (!rules) return

            for (var name in rules) {
              sheet.addRule(
                name,
                rules[name],
                (0, _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])({}, options, {
                  selector: addScope(name, rule.selector)
                })
              )
            }

            delete style[at]
          }

          function handlePrefixedGlobalRule(rule, sheet) {
            var options = rule.options,
              style = rule.style

            for (var prop in style) {
              if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue
              var selector = addScope(prop.substr(at.length), rule.selector)
              sheet.addRule(
                selector,
                style[prop],
                (0, _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])({}, options, {
                  selector: selector
                })
              )
              delete style[prop]
            }
          }
          /**
           * Convert nested rules to separate, remove them from original styles.
           */

          function jssGlobal() {
            function onCreateRule(name, styles, options) {
              if (!name) return null

              if (name === at) {
                return new GlobalContainerRule(name, styles, options)
              }

              if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
                return new GlobalPrefixedRule(name, styles, options)
              }

              var parent = options.parent

              if (parent) {
                if (parent.type === 'global' || (parent.options.parent && parent.options.parent.type === 'global')) {
                  options.scoped = false
                }
              }

              if (!options.selector && options.scoped === false) {
                options.selector = name
              }

              return null
            }

            function onProcessRule(rule, sheet) {
              if (rule.type !== 'style' || !sheet) return
              handleNestedGlobalContainerRule(rule, sheet)
              handlePrefixedGlobalRule(rule, sheet)
            }

            return {
              onCreateRule: onCreateRule,
              onProcessRule: onProcessRule
            }
          }

          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = jssGlobal

          /***/
        },

      /***/ '../../ui-library/node_modules/jss/dist/jss.esm.js':
        /*!*********************************************************!*\
  !*** ../../ui-library/node_modules/jss/dist/jss.esm.js ***!
  \*********************************************************/
        /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__)
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ RuleList: () => /* binding */ RuleList,
            /* harmony export */ SheetsManager: () => /* binding */ SheetsManager,
            /* harmony export */ SheetsRegistry: () => /* binding */ SheetsRegistry,
            /* harmony export */ create: () => /* binding */ createJss,
            /* harmony export */ createGenerateId: () => /* binding */ createGenerateId,
            /* harmony export */ createRule: () => /* binding */ createRule,
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */ getDynamicStyles: () => /* binding */ getDynamicStyles,
            /* harmony export */ hasCSSTOMSupport: () => /* binding */ hasCSSTOMSupport,
            /* harmony export */ sheets: () => /* binding */ sheets,
            /* harmony export */ toCssValue: () => /* binding */ toCssValue
            /* harmony export */
          })
          /* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/esm/extends */ '../../ui-library/node_modules/@babel/runtime/helpers/esm/extends.js'
            )
          /* harmony import */ var is_in_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! is-in-browser */ '../../ui-library/node_modules/is-in-browser/dist/module.js'
          )
          /* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! tiny-warning */ '../../ui-library/node_modules/tiny-warning/dist/tiny-warning.esm.js'
          )
          /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/esm/createClass */ '../../ui-library/node_modules/@babel/runtime/helpers/esm/createClass.js'
            )
          /* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/esm/inheritsLoose */ '../../ui-library/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js'
            )
          /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/esm/assertThisInitialized */ '../../ui-library/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js'
            )
          /* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ '../../ui-library/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
            )

          var plainObjectConstrurctor = {}.constructor
          function cloneStyle(style) {
            if (style == null || typeof style !== 'object') return style
            if (Array.isArray(style)) return style.map(cloneStyle)
            if (style.constructor !== plainObjectConstrurctor) return style
            var newStyle = {}

            for (var name in style) {
              newStyle[name] = cloneStyle(style[name])
            }

            return newStyle
          }

          /**
           * Create a rule instance.
           */

          function createRule(name, decl, options) {
            if (name === void 0) {
              name = 'unnamed'
            }

            var jss = options.jss
            var declCopy = cloneStyle(decl)
            var rule = jss.plugins.onCreateRule(name, declCopy, options)
            if (rule) return rule // It is an at-rule and it has no instance.

            if (name[0] === '@') {
              true ? (0, tiny_warning__WEBPACK_IMPORTED_MODULE_6__['default'])(false, '[JSS] Unknown rule ' + name) : 0
            }

            return null
          }

          var join = function join(value, by) {
            var result = ''

            for (var i = 0; i < value.length; i++) {
              // Remove !important from the value, it will be readded later.
              if (value[i] === '!important') break
              if (result) result += by
              result += value[i]
            }

            return result
          }
          /**
           * Converts JSS array value to a CSS string.
           *
           * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
           * `border: ['1px', '2px']` > `border: 1px, 2px;`
           * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
           * `color: ['red', !important]` > `color: red !important;`
           */

          var toCssValue = function toCssValue(value) {
            if (!Array.isArray(value)) return value
            var cssValue = '' // Support space separated values via `[['5px', '10px']]`.

            if (Array.isArray(value[0])) {
              for (var i = 0; i < value.length; i++) {
                if (value[i] === '!important') break
                if (cssValue) cssValue += ', '
                cssValue += join(value[i], ' ')
              }
            } else cssValue = join(value, ', ') // Add !important, because it was ignored.

            if (value[value.length - 1] === '!important') {
              cssValue += ' !important'
            }

            return cssValue
          }

          function getWhitespaceSymbols(options) {
            if (options && options.format === false) {
              return {
                linebreak: '',
                space: ''
              }
            }

            return {
              linebreak: '\n',
              space: ' '
            }
          }

          /**
           * Indent a string.
           * http://jsperf.com/array-join-vs-for
           */

          function indentStr(str, indent) {
            var result = ''

            for (var index = 0; index < indent; index++) {
              result += '  '
            }

            return result + str
          }
          /**
           * Converts a Rule to CSS string.
           */

          function toCss(selector, style, options) {
            if (options === void 0) {
              options = {}
            }

            var result = ''
            if (!style) return result
            var _options = options,
              _options$indent = _options.indent,
              indent = _options$indent === void 0 ? 0 : _options$indent
            var fallbacks = style.fallbacks

            if (options.format === false) {
              indent = -Infinity
            }

            var _getWhitespaceSymbols = getWhitespaceSymbols(options),
              linebreak = _getWhitespaceSymbols.linebreak,
              space = _getWhitespaceSymbols.space

            if (selector) indent++ // Apply fallbacks first.

            if (fallbacks) {
              // Array syntax {fallbacks: [{prop: value}]}
              if (Array.isArray(fallbacks)) {
                for (var index = 0; index < fallbacks.length; index++) {
                  var fallback = fallbacks[index]

                  for (var prop in fallback) {
                    var value = fallback[prop]

                    if (value != null) {
                      if (result) result += linebreak
                      result += indentStr(prop + ':' + space + toCssValue(value) + ';', indent)
                    }
                  }
                }
              } else {
                // Object syntax {fallbacks: {prop: value}}
                for (var _prop in fallbacks) {
                  var _value = fallbacks[_prop]

                  if (_value != null) {
                    if (result) result += linebreak
                    result += indentStr(_prop + ':' + space + toCssValue(_value) + ';', indent)
                  }
                }
              }
            }

            for (var _prop2 in style) {
              var _value2 = style[_prop2]

              if (_value2 != null && _prop2 !== 'fallbacks') {
                if (result) result += linebreak
                result += indentStr(_prop2 + ':' + space + toCssValue(_value2) + ';', indent)
              }
            } // Allow empty style in this case, because properties will be added dynamically.

            if (!result && !options.allowEmpty) return result // When rule is being stringified before selector was defined.

            if (!selector) return result
            indent--
            if (result) result = '' + linebreak + result + linebreak
            return indentStr('' + selector + space + '{' + result, indent) + indentStr('}', indent)
          }

          var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g
          var nativeEscape = typeof CSS !== 'undefined' && CSS.escape
          var escape = function (str) {
            return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1')
          }

          var BaseStyleRule =
            /*#__PURE__*/
            (function () {
              function BaseStyleRule(key, style, options) {
                this.type = 'style'
                this.isProcessed = false
                var sheet = options.sheet,
                  Renderer = options.Renderer
                this.key = key
                this.options = options
                this.style = style
                if (sheet) this.renderer = sheet.renderer
                else if (Renderer) this.renderer = new Renderer()
              }
              /**
               * Get or set a style property.
               */

              var _proto = BaseStyleRule.prototype

              _proto.prop = function prop(name, value, options) {
                // It's a getter.
                if (value === undefined) return this.style[name] // Don't do anything if the value has not changed.

                var force = options ? options.force : false
                if (!force && this.style[name] === value) return this
                var newValue = value

                if (!options || options.process !== false) {
                  newValue = this.options.jss.plugins.onChangeValue(value, name, this)
                }

                var isEmpty = newValue == null || newValue === false
                var isDefined = name in this.style // Value is empty and wasn't defined before.

                if (isEmpty && !isDefined && !force) return this // We are going to remove this value.

                var remove = isEmpty && isDefined
                if (remove) delete this.style[name]
                else this.style[name] = newValue // Renderable is defined if StyleSheet option `link` is true.

                if (this.renderable && this.renderer) {
                  if (remove) this.renderer.removeProperty(this.renderable, name)
                  else this.renderer.setProperty(this.renderable, name, newValue)
                  return this
                }

                var sheet = this.options.sheet

                if (sheet && sheet.attached) {
                  true
                    ? (0, tiny_warning__WEBPACK_IMPORTED_MODULE_6__['default'])(
                        false,
                        '[JSS] Rule is not linked. Missing sheet option "link: true".'
                      )
                    : 0
                }

                return this
              }

              return BaseStyleRule
            })()
          var StyleRule =
            /*#__PURE__*/
            (function (_BaseStyleRule) {
              ;(0, _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__['default'])(
                StyleRule,
                _BaseStyleRule
              )

              function StyleRule(key, style, options) {
                var _this

                _this = _BaseStyleRule.call(this, key, style, options) || this
                var selector = options.selector,
                  scoped = options.scoped,
                  sheet = options.sheet,
                  generateId = options.generateId

                if (selector) {
                  _this.selectorText = selector
                } else if (scoped !== false) {
                  _this.id = generateId(
                    (0, _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__['default'])(
                      (0, _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__['default'])(
                        _this
                      )
                    ),
                    sheet
                  )
                  _this.selectorText = '.' + escape(_this.id)
                }

                return _this
              }
              /**
               * Set selector string.
               * Attention: use this with caution. Most browsers didn't implement
               * selectorText setter, so this may result in rerendering of entire Style Sheet.
               */

              var _proto2 = StyleRule.prototype

              /**
               * Apply rule to an element inline.
               */
              _proto2.applyTo = function applyTo(renderable) {
                var renderer = this.renderer

                if (renderer) {
                  var json = this.toJSON()

                  for (var prop in json) {
                    renderer.setProperty(renderable, prop, json[prop])
                  }
                }

                return this
              }
              /**
               * Returns JSON representation of the rule.
               * Fallbacks are not supported.
               * Useful for inline styles.
               */

              _proto2.toJSON = function toJSON() {
                var json = {}

                for (var prop in this.style) {
                  var value = this.style[prop]
                  if (typeof value !== 'object') json[prop] = value
                  else if (Array.isArray(value)) json[prop] = toCssValue(value)
                }

                return json
              }
              /**
               * Generates a CSS string.
               */

              _proto2.toString = function toString(options) {
                var sheet = this.options.sheet
                var link = sheet ? sheet.options.link : false
                var opts = link
                  ? (0, _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])({}, options, {
                      allowEmpty: true
                    })
                  : options
                return toCss(this.selectorText, this.style, opts)
              }
              ;(0, _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__['default'])(StyleRule, [
                {
                  key: 'selector',
                  set: function set(selector) {
                    if (selector === this.selectorText) return
                    this.selectorText = selector
                    var renderer = this.renderer,
                      renderable = this.renderable
                    if (!renderable || !renderer) return
                    var hasChanged = renderer.setSelector(renderable, selector) // If selector setter is not implemented, rerender the rule.

                    if (!hasChanged) {
                      renderer.replaceRule(renderable, this)
                    }
                  },
                  /**
                   * Get selector string.
                   */
                  get: function get() {
                    return this.selectorText
                  }
                }
              ])

              return StyleRule
            })(BaseStyleRule)
          var pluginStyleRule = {
            onCreateRule: function onCreateRule(key, style, options) {
              if (key[0] === '@' || (options.parent && options.parent.type === 'keyframes')) {
                return null
              }

              return new StyleRule(key, style, options)
            }
          }

          var defaultToStringOptions = {
            indent: 1,
            children: true
          }
          var atRegExp = /@([\w-]+)/
          /**
           * Conditional rule for @media, @supports
           */

          var ConditionalRule =
            /*#__PURE__*/
            (function () {
              function ConditionalRule(key, styles, options) {
                this.type = 'conditional'
                this.isProcessed = false
                this.key = key
                var atMatch = key.match(atRegExp)
                this.at = atMatch ? atMatch[1] : 'unknown' // Key might contain a unique suffix in case the `name` passed by user was duplicate.

                this.query = options.name || '@' + this.at
                this.options = options
                this.rules = new RuleList(
                  (0, _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])({}, options, {
                    parent: this
                  })
                )

                for (var name in styles) {
                  this.rules.add(name, styles[name])
                }

                this.rules.process()
              }
              /**
               * Get a rule.
               */

              var _proto = ConditionalRule.prototype

              _proto.getRule = function getRule(name) {
                return this.rules.get(name)
              }
              /**
               * Get index of a rule.
               */

              _proto.indexOf = function indexOf(rule) {
                return this.rules.indexOf(rule)
              }
              /**
               * Create and register rule, run plugins.
               */

              _proto.addRule = function addRule(name, style, options) {
                var rule = this.rules.add(name, style, options)
                if (!rule) return null
                this.options.jss.plugins.onProcessRule(rule)
                return rule
              }
              /**
               * Replace rule, run plugins.
               */

              _proto.replaceRule = function replaceRule(name, style, options) {
                var newRule = this.rules.replace(name, style, options)
                if (newRule) this.options.jss.plugins.onProcessRule(newRule)
                return newRule
              }
              /**
               * Generates a CSS string.
               */

              _proto.toString = function toString(options) {
                if (options === void 0) {
                  options = defaultToStringOptions
                }

                var _getWhitespaceSymbols = getWhitespaceSymbols(options),
                  linebreak = _getWhitespaceSymbols.linebreak

                if (options.indent == null) options.indent = defaultToStringOptions.indent
                if (options.children == null) options.children = defaultToStringOptions.children

                if (options.children === false) {
                  return this.query + ' {}'
                }

                var children = this.rules.toString(options)
                return children ? this.query + ' {' + linebreak + children + linebreak + '}' : ''
              }

              return ConditionalRule
            })()
          var keyRegExp = /@media|@supports\s+/
          var pluginConditionalRule = {
            onCreateRule: function onCreateRule(key, styles, options) {
              return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null
            }
          }

          var defaultToStringOptions$1 = {
            indent: 1,
            children: true
          }
          var nameRegExp = /@keyframes\s+([\w-]+)/
          /**
           * Rule for @keyframes
           */

          var KeyframesRule =
            /*#__PURE__*/
            (function () {
              function KeyframesRule(key, frames, options) {
                this.type = 'keyframes'
                this.at = '@keyframes'
                this.isProcessed = false
                var nameMatch = key.match(nameRegExp)

                if (nameMatch && nameMatch[1]) {
                  this.name = nameMatch[1]
                } else {
                  this.name = 'noname'
                  true
                    ? (0, tiny_warning__WEBPACK_IMPORTED_MODULE_6__['default'])(
                        false,
                        '[JSS] Bad keyframes name ' + key
                      )
                    : 0
                }

                this.key = this.type + '-' + this.name
                this.options = options
                var scoped = options.scoped,
                  sheet = options.sheet,
                  generateId = options.generateId
                this.id = scoped === false ? this.name : escape(generateId(this, sheet))
                this.rules = new RuleList(
                  (0, _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])({}, options, {
                    parent: this
                  })
                )

                for (var name in frames) {
                  this.rules.add(
                    name,
                    frames[name],
                    (0, _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])({}, options, {
                      parent: this
                    })
                  )
                }

                this.rules.process()
              }
              /**
               * Generates a CSS string.
               */

              var _proto = KeyframesRule.prototype

              _proto.toString = function toString(options) {
                if (options === void 0) {
                  options = defaultToStringOptions$1
                }

                var _getWhitespaceSymbols = getWhitespaceSymbols(options),
                  linebreak = _getWhitespaceSymbols.linebreak

                if (options.indent == null) options.indent = defaultToStringOptions$1.indent
                if (options.children == null) options.children = defaultToStringOptions$1.children

                if (options.children === false) {
                  return this.at + ' ' + this.id + ' {}'
                }

                var children = this.rules.toString(options)
                if (children) children = '' + linebreak + children + linebreak
                return this.at + ' ' + this.id + ' {' + children + '}'
              }

              return KeyframesRule
            })()
          var keyRegExp$1 = /@keyframes\s+/
          var refRegExp = /\$([\w-]+)/g

          var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
            if (typeof val === 'string') {
              return val.replace(refRegExp, function (match, name) {
                if (name in keyframes) {
                  return keyframes[name]
                }

                true
                  ? (0, tiny_warning__WEBPACK_IMPORTED_MODULE_6__['default'])(
                      false,
                      '[JSS] Referenced keyframes rule "' + name + '" is not defined.'
                    )
                  : 0
                return match
              })
            }

            return val
          }
          /**
           * Replace the reference for a animation name.
           */

          var replaceRef = function replaceRef(style, prop, keyframes) {
            var value = style[prop]
            var refKeyframe = findReferencedKeyframe(value, keyframes)

            if (refKeyframe !== value) {
              style[prop] = refKeyframe
            }
          }

          var pluginKeyframesRule = {
            onCreateRule: function onCreateRule(key, frames, options) {
              return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null
            },
            // Animation name ref replacer.
            onProcessStyle: function onProcessStyle(style, rule, sheet) {
              if (rule.type !== 'style' || !sheet) return style
              if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes)
              if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes)
              return style
            },
            onChangeValue: function onChangeValue(val, prop, rule) {
              var sheet = rule.options.sheet

              if (!sheet) {
                return val
              }

              switch (prop) {
                case 'animation':
                  return findReferencedKeyframe(val, sheet.keyframes)

                case 'animation-name':
                  return findReferencedKeyframe(val, sheet.keyframes)

                default:
                  return val
              }
            }
          }

          var KeyframeRule =
            /*#__PURE__*/
            (function (_BaseStyleRule) {
              ;(0, _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__['default'])(
                KeyframeRule,
                _BaseStyleRule
              )

              function KeyframeRule() {
                return _BaseStyleRule.apply(this, arguments) || this
              }

              var _proto = KeyframeRule.prototype

              /**
               * Generates a CSS string.
               */
              _proto.toString = function toString(options) {
                var sheet = this.options.sheet
                var link = sheet ? sheet.options.link : false
                var opts = link
                  ? (0, _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])({}, options, {
                      allowEmpty: true
                    })
                  : options
                return toCss(this.key, this.style, opts)
              }

              return KeyframeRule
            })(BaseStyleRule)
          var pluginKeyframeRule = {
            onCreateRule: function onCreateRule(key, style, options) {
              if (options.parent && options.parent.type === 'keyframes') {
                return new KeyframeRule(key, style, options)
              }

              return null
            }
          }

          var FontFaceRule =
            /*#__PURE__*/
            (function () {
              function FontFaceRule(key, style, options) {
                this.type = 'font-face'
                this.at = '@font-face'
                this.isProcessed = false
                this.key = key
                this.style = style
                this.options = options
              }
              /**
               * Generates a CSS string.
               */

              var _proto = FontFaceRule.prototype

              _proto.toString = function toString(options) {
                var _getWhitespaceSymbols = getWhitespaceSymbols(options),
                  linebreak = _getWhitespaceSymbols.linebreak

                if (Array.isArray(this.style)) {
                  var str = ''

                  for (var index = 0; index < this.style.length; index++) {
                    str += toCss(this.at, this.style[index])
                    if (this.style[index + 1]) str += linebreak
                  }

                  return str
                }

                return toCss(this.at, this.style, options)
              }

              return FontFaceRule
            })()
          var keyRegExp$2 = /@font-face/
          var pluginFontFaceRule = {
            onCreateRule: function onCreateRule(key, style, options) {
              return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null
            }
          }

          var ViewportRule =
            /*#__PURE__*/
            (function () {
              function ViewportRule(key, style, options) {
                this.type = 'viewport'
                this.at = '@viewport'
                this.isProcessed = false
                this.key = key
                this.style = style
                this.options = options
              }
              /**
               * Generates a CSS string.
               */

              var _proto = ViewportRule.prototype

              _proto.toString = function toString(options) {
                return toCss(this.key, this.style, options)
              }

              return ViewportRule
            })()
          var pluginViewportRule = {
            onCreateRule: function onCreateRule(key, style, options) {
              return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null
            }
          }

          var SimpleRule =
            /*#__PURE__*/
            (function () {
              function SimpleRule(key, value, options) {
                this.type = 'simple'
                this.isProcessed = false
                this.key = key
                this.value = value
                this.options = options
              }
              /**
               * Generates a CSS string.
               */
              // eslint-disable-next-line no-unused-vars

              var _proto = SimpleRule.prototype

              _proto.toString = function toString(options) {
                if (Array.isArray(this.value)) {
                  var str = ''

                  for (var index = 0; index < this.value.length; index++) {
                    str += this.key + ' ' + this.value[index] + ';'
                    if (this.value[index + 1]) str += '\n'
                  }

                  return str
                }

                return this.key + ' ' + this.value + ';'
              }

              return SimpleRule
            })()
          var keysMap = {
            '@charset': true,
            '@import': true,
            '@namespace': true
          }
          var pluginSimpleRule = {
            onCreateRule: function onCreateRule(key, value, options) {
              return key in keysMap ? new SimpleRule(key, value, options) : null
            }
          }

          var plugins = [
            pluginStyleRule,
            pluginConditionalRule,
            pluginKeyframesRule,
            pluginKeyframeRule,
            pluginFontFaceRule,
            pluginViewportRule,
            pluginSimpleRule
          ]

          var defaultUpdateOptions = {
            process: true
          }
          var forceUpdateOptions = {
            force: true,
            process: true
            /**
             * Contains rules objects and allows adding/removing etc.
             * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
             */
          }

          var RuleList =
            /*#__PURE__*/
            (function () {
              // Rules registry for access by .get() method.
              // It contains the same rule registered by name and by selector.
              // Original styles object.
              // Used to ensure correct rules order.
              function RuleList(options) {
                this.map = {}
                this.raw = {}
                this.index = []
                this.counter = 0
                this.options = options
                this.classes = options.classes
                this.keyframes = options.keyframes
              }
              /**
               * Create and register rule.
               *
               * Will not render after Style Sheet was rendered the first time.
               */

              var _proto = RuleList.prototype

              _proto.add = function add(name, decl, ruleOptions) {
                var _this$options = this.options,
                  parent = _this$options.parent,
                  sheet = _this$options.sheet,
                  jss = _this$options.jss,
                  Renderer = _this$options.Renderer,
                  generateId = _this$options.generateId,
                  scoped = _this$options.scoped

                var options = (0, _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])(
                  {
                    classes: this.classes,
                    parent: parent,
                    sheet: sheet,
                    jss: jss,
                    Renderer: Renderer,
                    generateId: generateId,
                    scoped: scoped,
                    name: name,
                    keyframes: this.keyframes,
                    selector: undefined
                  },
                  ruleOptions
                ) // When user uses .createStyleSheet(), duplicate names are not possible, but
                // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
                // we need to make the key unique within this RuleList instance scope.

                var key = name

                if (name in this.raw) {
                  key = name + '-d' + this.counter++
                } // We need to save the original decl before creating the rule
                // because cache plugin needs to use it as a key to return a cached rule.

                this.raw[key] = decl

                if (key in this.classes) {
                  // E.g. rules inside of @media container
                  options.selector = '.' + escape(this.classes[key])
                }

                var rule = createRule(key, decl, options)
                if (!rule) return null
                this.register(rule)
                var index = options.index === undefined ? this.index.length : options.index
                this.index.splice(index, 0, rule)
                return rule
              }
              /**
               * Replace rule.
               * Create a new rule and remove old one instead of overwriting
               * because we want to invoke onCreateRule hook to make plugins work.
               */

              _proto.replace = function replace(name, decl, ruleOptions) {
                var oldRule = this.get(name)
                var oldIndex = this.index.indexOf(oldRule)

                if (oldRule) {
                  this.remove(oldRule)
                }

                var options = ruleOptions
                if (oldIndex !== -1)
                  options = (0, _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])(
                    {},
                    ruleOptions,
                    {
                      index: oldIndex
                    }
                  )
                return this.add(name, decl, options)
              }
              /**
               * Get a rule by name or selector.
               */

              _proto.get = function get(nameOrSelector) {
                return this.map[nameOrSelector]
              }
              /**
               * Delete a rule.
               */

              _proto.remove = function remove(rule) {
                this.unregister(rule)
                delete this.raw[rule.key]
                this.index.splice(this.index.indexOf(rule), 1)
              }
              /**
               * Get index of a rule.
               */

              _proto.indexOf = function indexOf(rule) {
                return this.index.indexOf(rule)
              }
              /**
               * Run `onProcessRule()` plugins on every rule.
               */

              _proto.process = function process() {
                var plugins = this.options.jss.plugins // We need to clone array because if we modify the index somewhere else during a loop
                // we end up with very hard-to-track-down side effects.

                this.index.slice(0).forEach(plugins.onProcessRule, plugins)
              }
              /**
               * Register a rule in `.map`, `.classes` and `.keyframes` maps.
               */

              _proto.register = function register(rule) {
                this.map[rule.key] = rule

                if (rule instanceof StyleRule) {
                  this.map[rule.selector] = rule
                  if (rule.id) this.classes[rule.key] = rule.id
                } else if (rule instanceof KeyframesRule && this.keyframes) {
                  this.keyframes[rule.name] = rule.id
                }
              }
              /**
               * Unregister a rule.
               */

              _proto.unregister = function unregister(rule) {
                delete this.map[rule.key]

                if (rule instanceof StyleRule) {
                  delete this.map[rule.selector]
                  delete this.classes[rule.key]
                } else if (rule instanceof KeyframesRule) {
                  delete this.keyframes[rule.name]
                }
              }
              /**
               * Update the function values with a new data.
               */

              _proto.update = function update() {
                var name
                var data
                var options

                if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
                  name = arguments.length <= 0 ? undefined : arguments[0]
                  data = arguments.length <= 1 ? undefined : arguments[1]
                  options = arguments.length <= 2 ? undefined : arguments[2]
                } else {
                  data = arguments.length <= 0 ? undefined : arguments[0]
                  options = arguments.length <= 1 ? undefined : arguments[1]
                  name = null
                }

                if (name) {
                  this.updateOne(this.get(name), data, options)
                } else {
                  for (var index = 0; index < this.index.length; index++) {
                    this.updateOne(this.index[index], data, options)
                  }
                }
              }
              /**
               * Execute plugins, update rule props.
               */

              _proto.updateOne = function updateOne(rule, data, options) {
                if (options === void 0) {
                  options = defaultUpdateOptions
                }

                var _this$options2 = this.options,
                  plugins = _this$options2.jss.plugins,
                  sheet = _this$options2.sheet // It is a rules container like for e.g. ConditionalRule.

                if (rule.rules instanceof RuleList) {
                  rule.rules.update(data, options)
                  return
                }

                var style = rule.style
                plugins.onUpdate(data, rule, sheet, options) // We rely on a new `style` ref in case it was mutated during onUpdate hook.

                if (options.process && style && style !== rule.style) {
                  // We need to run the plugins in case new `style` relies on syntax plugins.
                  plugins.onProcessStyle(rule.style, rule, sheet) // Update and add props.

                  for (var prop in rule.style) {
                    var nextValue = rule.style[prop]
                    var prevValue = style[prop] // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
                    // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

                    if (nextValue !== prevValue) {
                      rule.prop(prop, nextValue, forceUpdateOptions)
                    }
                  } // Remove props.

                  for (var _prop in style) {
                    var _nextValue = rule.style[_prop]
                    var _prevValue = style[_prop] // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
                    // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

                    if (_nextValue == null && _nextValue !== _prevValue) {
                      rule.prop(_prop, null, forceUpdateOptions)
                    }
                  }
                }
              }
              /**
               * Convert rules to a CSS string.
               */

              _proto.toString = function toString(options) {
                var str = ''
                var sheet = this.options.sheet
                var link = sheet ? sheet.options.link : false

                var _getWhitespaceSymbols = getWhitespaceSymbols(options),
                  linebreak = _getWhitespaceSymbols.linebreak

                for (var index = 0; index < this.index.length; index++) {
                  var rule = this.index[index]
                  var css = rule.toString(options) // No need to render an empty rule.

                  if (!css && !link) continue
                  if (str) str += linebreak
                  str += css
                }

                return str
              }

              return RuleList
            })()

          var StyleSheet =
            /*#__PURE__*/
            (function () {
              function StyleSheet(styles, options) {
                this.attached = false
                this.deployed = false
                this.classes = {}
                this.keyframes = {}
                this.options = (0, _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])(
                  {},
                  options,
                  {
                    sheet: this,
                    parent: this,
                    classes: this.classes,
                    keyframes: this.keyframes
                  }
                )

                if (options.Renderer) {
                  this.renderer = new options.Renderer(this)
                }

                this.rules = new RuleList(this.options)

                for (var name in styles) {
                  this.rules.add(name, styles[name])
                }

                this.rules.process()
              }
              /**
               * Attach renderable to the render tree.
               */

              var _proto = StyleSheet.prototype

              _proto.attach = function attach() {
                if (this.attached) return this
                if (this.renderer) this.renderer.attach()
                this.attached = true // Order is important, because we can't use insertRule API if style element is not attached.

                if (!this.deployed) this.deploy()
                return this
              }
              /**
               * Remove renderable from render tree.
               */

              _proto.detach = function detach() {
                if (!this.attached) return this
                if (this.renderer) this.renderer.detach()
                this.attached = false
                return this
              }
              /**
               * Add a rule to the current stylesheet.
               * Will insert a rule also after the stylesheet has been rendered first time.
               */

              _proto.addRule = function addRule(name, decl, options) {
                var queue = this.queue // Plugins can create rules.
                // In order to preserve the right order, we need to queue all `.addRule` calls,
                // which happen after the first `rules.add()` call.

                if (this.attached && !queue) this.queue = []
                var rule = this.rules.add(name, decl, options)
                if (!rule) return null
                this.options.jss.plugins.onProcessRule(rule)

                if (this.attached) {
                  if (!this.deployed) return rule // Don't insert rule directly if there is no stringified version yet.
                  // It will be inserted all together when .attach is called.

                  if (queue) queue.push(rule)
                  else {
                    this.insertRule(rule)

                    if (this.queue) {
                      this.queue.forEach(this.insertRule, this)
                      this.queue = undefined
                    }
                  }
                  return rule
                } // We can't add rules to a detached style node.
                // We will redeploy the sheet once user will attach it.

                this.deployed = false
                return rule
              }
              /**
               * Replace a rule in the current stylesheet.
               */

              _proto.replaceRule = function replaceRule(nameOrSelector, decl, options) {
                var oldRule = this.rules.get(nameOrSelector)
                if (!oldRule) return this.addRule(nameOrSelector, decl, options)
                var newRule = this.rules.replace(nameOrSelector, decl, options)

                if (newRule) {
                  this.options.jss.plugins.onProcessRule(newRule)
                }

                if (this.attached) {
                  if (!this.deployed) return newRule // Don't replace / delete rule directly if there is no stringified version yet.
                  // It will be inserted all together when .attach is called.

                  if (this.renderer) {
                    if (!newRule) {
                      this.renderer.deleteRule(oldRule)
                    } else if (oldRule.renderable) {
                      this.renderer.replaceRule(oldRule.renderable, newRule)
                    }
                  }

                  return newRule
                } // We can't replace rules to a detached style node.
                // We will redeploy the sheet once user will attach it.

                this.deployed = false
                return newRule
              }
              /**
               * Insert rule into the StyleSheet
               */

              _proto.insertRule = function insertRule(rule) {
                if (this.renderer) {
                  this.renderer.insertRule(rule)
                }
              }
              /**
               * Create and add rules.
               * Will render also after Style Sheet was rendered the first time.
               */

              _proto.addRules = function addRules(styles, options) {
                var added = []

                for (var name in styles) {
                  var rule = this.addRule(name, styles[name], options)
                  if (rule) added.push(rule)
                }

                return added
              }
              /**
               * Get a rule by name or selector.
               */

              _proto.getRule = function getRule(nameOrSelector) {
                return this.rules.get(nameOrSelector)
              }
              /**
               * Delete a rule by name.
               * Returns `true`: if rule has been deleted from the DOM.
               */

              _proto.deleteRule = function deleteRule(name) {
                var rule = typeof name === 'object' ? name : this.rules.get(name)

                if (
                  !rule || // Style sheet was created without link: true and attached, in this case we
                  // won't be able to remove the CSS rule from the DOM.
                  (this.attached && !rule.renderable)
                ) {
                  return false
                }

                this.rules.remove(rule)

                if (this.attached && rule.renderable && this.renderer) {
                  return this.renderer.deleteRule(rule.renderable)
                }

                return true
              }
              /**
               * Get index of a rule.
               */

              _proto.indexOf = function indexOf(rule) {
                return this.rules.indexOf(rule)
              }
              /**
               * Deploy pure CSS string to a renderable.
               */

              _proto.deploy = function deploy() {
                if (this.renderer) this.renderer.deploy()
                this.deployed = true
                return this
              }
              /**
               * Update the function values with a new data.
               */

              _proto.update = function update() {
                var _this$rules
                ;(_this$rules = this.rules).update.apply(_this$rules, arguments)

                return this
              }
              /**
               * Updates a single rule.
               */

              _proto.updateOne = function updateOne(rule, data, options) {
                this.rules.updateOne(rule, data, options)
                return this
              }
              /**
               * Convert rules to a CSS string.
               */

              _proto.toString = function toString(options) {
                return this.rules.toString(options)
              }

              return StyleSheet
            })()

          var PluginsRegistry =
            /*#__PURE__*/
            (function () {
              function PluginsRegistry() {
                this.plugins = {
                  internal: [],
                  external: []
                }
                this.registry = {}
              }

              var _proto = PluginsRegistry.prototype

              /**
               * Call `onCreateRule` hooks and return an object if returned by a hook.
               */
              _proto.onCreateRule = function onCreateRule(name, decl, options) {
                for (var i = 0; i < this.registry.onCreateRule.length; i++) {
                  var rule = this.registry.onCreateRule[i](name, decl, options)
                  if (rule) return rule
                }

                return null
              }
              /**
               * Call `onProcessRule` hooks.
               */

              _proto.onProcessRule = function onProcessRule(rule) {
                if (rule.isProcessed) return
                var sheet = rule.options.sheet

                for (var i = 0; i < this.registry.onProcessRule.length; i++) {
                  this.registry.onProcessRule[i](rule, sheet)
                }

                if (rule.style) this.onProcessStyle(rule.style, rule, sheet)
                rule.isProcessed = true
              }
              /**
               * Call `onProcessStyle` hooks.
               */

              _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
                for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
                  rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet)
                }
              }
              /**
               * Call `onProcessSheet` hooks.
               */

              _proto.onProcessSheet = function onProcessSheet(sheet) {
                for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
                  this.registry.onProcessSheet[i](sheet)
                }
              }
              /**
               * Call `onUpdate` hooks.
               */

              _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
                for (var i = 0; i < this.registry.onUpdate.length; i++) {
                  this.registry.onUpdate[i](data, rule, sheet, options)
                }
              }
              /**
               * Call `onChangeValue` hooks.
               */

              _proto.onChangeValue = function onChangeValue(value, prop, rule) {
                var processedValue = value

                for (var i = 0; i < this.registry.onChangeValue.length; i++) {
                  processedValue = this.registry.onChangeValue[i](processedValue, prop, rule)
                }

                return processedValue
              }
              /**
               * Register a plugin.
               */

              _proto.use = function use(newPlugin, options) {
                if (options === void 0) {
                  options = {
                    queue: 'external'
                  }
                }

                var plugins = this.plugins[options.queue] // Avoids applying same plugin twice, at least based on ref.

                if (plugins.indexOf(newPlugin) !== -1) {
                  return
                }

                plugins.push(newPlugin)
                this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(
                  function (registry, plugin) {
                    for (var name in plugin) {
                      if (name in registry) {
                        registry[name].push(plugin[name])
                      } else {
                        true
                          ? (0, tiny_warning__WEBPACK_IMPORTED_MODULE_6__['default'])(
                              false,
                              '[JSS] Unknown hook "' + name + '".'
                            )
                          : 0
                      }
                    }

                    return registry
                  },
                  {
                    onCreateRule: [],
                    onProcessRule: [],
                    onProcessStyle: [],
                    onProcessSheet: [],
                    onChangeValue: [],
                    onUpdate: []
                  }
                )
              }

              return PluginsRegistry
            })()

          /**
           * Sheets registry to access all instances in one place.
           */

          var SheetsRegistry =
            /*#__PURE__*/
            (function () {
              function SheetsRegistry() {
                this.registry = []
              }

              var _proto = SheetsRegistry.prototype

              /**
               * Register a Style Sheet.
               */
              _proto.add = function add(sheet) {
                var registry = this.registry
                var index = sheet.options.index
                if (registry.indexOf(sheet) !== -1) return

                if (registry.length === 0 || index >= this.index) {
                  registry.push(sheet)
                  return
                } // Find a position.

                for (var i = 0; i < registry.length; i++) {
                  if (registry[i].options.index > index) {
                    registry.splice(i, 0, sheet)
                    return
                  }
                }
              }
              /**
               * Reset the registry.
               */

              _proto.reset = function reset() {
                this.registry = []
              }
              /**
               * Remove a Style Sheet.
               */

              _proto.remove = function remove(sheet) {
                var index = this.registry.indexOf(sheet)
                this.registry.splice(index, 1)
              }
              /**
               * Convert all attached sheets to a CSS string.
               */

              _proto.toString = function toString(_temp) {
                var _ref = _temp === void 0 ? {} : _temp,
                  attached = _ref.attached,
                  options = (0,
                  _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__['default'])(
                    _ref,
                    ['attached']
                  )

                var _getWhitespaceSymbols = getWhitespaceSymbols(options),
                  linebreak = _getWhitespaceSymbols.linebreak

                var css = ''

                for (var i = 0; i < this.registry.length; i++) {
                  var sheet = this.registry[i]

                  if (attached != null && sheet.attached !== attached) {
                    continue
                  }

                  if (css) css += linebreak
                  css += sheet.toString(options)
                }

                return css
              }
              ;(0, _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__['default'])(SheetsRegistry, [
                {
                  key: 'index',

                  /**
                   * Current highest index number.
                   */
                  get: function get() {
                    return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index
                  }
                }
              ])

              return SheetsRegistry
            })()

          /**
           * This is a global sheets registry. Only DomRenderer will add sheets to it.
           * On the server one should use an own SheetsRegistry instance and add the
           * sheets to it, because you need to make sure to create a new registry for
           * each request in order to not leak sheets across requests.
           */

          var sheets = new SheetsRegistry()

          /* eslint-disable */

          /**
           * Now that `globalThis` is available on most platforms
           * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility)
           * we check for `globalThis` first. `globalThis` is necessary for jss
           * to run in Agoric's secure version of JavaScript (SES). Under SES,
           * `globalThis` exists, but `window`, `self`, and `Function('return
           * this')()` are all undefined for security reasons.
           *
           * https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
           */
          var globalThis$1 =
            typeof globalThis !== 'undefined'
              ? globalThis
              : typeof window !== 'undefined' && window.Math === Math
              ? window
              : typeof self !== 'undefined' && self.Math === Math
              ? self
              : Function('return this')()

          var ns = '2f1acc6c3a606b082e5eef5e54414ffb'
          if (globalThis$1[ns] == null) globalThis$1[ns] = 0 // Bundle may contain multiple JSS versions at the same time. In order to identify
          // the current version with just one short number and use it for classes generation
          // we use a counter. Also it is more accurate, because user can manually reevaluate
          // the module.

          var moduleId = globalThis$1[ns]++

          var maxRules = 1e10
          /**
           * Returns a function which generates unique class names based on counters.
           * When new generator function is created, rule counter is reseted.
           * We need to reset the rule counter for SSR for each request.
           */

          var createGenerateId = function createGenerateId(options) {
            if (options === void 0) {
              options = {}
            }

            var ruleCounter = 0

            var generateId = function generateId(rule, sheet) {
              ruleCounter += 1

              if (ruleCounter > maxRules) {
                true
                  ? (0, tiny_warning__WEBPACK_IMPORTED_MODULE_6__['default'])(
                      false,
                      '[JSS] You might have a memory leak. Rule counter is at ' + ruleCounter + '.'
                    )
                  : 0
              }

              var jssId = ''
              var prefix = ''

              if (sheet) {
                if (sheet.options.classNamePrefix) {
                  prefix = sheet.options.classNamePrefix
                }

                if (sheet.options.jss.id != null) {
                  jssId = String(sheet.options.jss.id)
                }
              }

              if (options.minify) {
                // Using "c" because a number can't be the first char in a class name.
                return '' + (prefix || 'c') + moduleId + jssId + ruleCounter
              }

              return prefix + rule.key + '-' + moduleId + (jssId ? '-' + jssId : '') + '-' + ruleCounter
            }

            return generateId
          }

          /**
           * Cache the value from the first time a function is called.
           */

          var memoize = function memoize(fn) {
            var value
            return function () {
              if (!value) value = fn()
              return value
            }
          }
          /**
           * Get a style property value.
           */

          var getPropertyValue = function getPropertyValue(cssRule, prop) {
            try {
              // Support CSSTOM.
              if (cssRule.attributeStyleMap) {
                return cssRule.attributeStyleMap.get(prop)
              }

              return cssRule.style.getPropertyValue(prop)
            } catch (err) {
              // IE may throw if property is unknown.
              return ''
            }
          }
          /**
           * Set a style property.
           */

          var setProperty = function setProperty(cssRule, prop, value) {
            try {
              var cssValue = value

              if (Array.isArray(value)) {
                cssValue = toCssValue(value)
              } // Support CSSTOM.

              if (cssRule.attributeStyleMap) {
                cssRule.attributeStyleMap.set(prop, cssValue)
              } else {
                var indexOfImportantFlag = cssValue ? cssValue.indexOf('!important') : -1
                var cssValueWithoutImportantFlag =
                  indexOfImportantFlag > -1 ? cssValue.substr(0, indexOfImportantFlag - 1) : cssValue
                cssRule.style.setProperty(
                  prop,
                  cssValueWithoutImportantFlag,
                  indexOfImportantFlag > -1 ? 'important' : ''
                )
              }
            } catch (err) {
              // IE may throw if property is unknown.
              return false
            }

            return true
          }
          /**
           * Remove a style property.
           */

          var removeProperty = function removeProperty(cssRule, prop) {
            try {
              // Support CSSTOM.
              if (cssRule.attributeStyleMap) {
                cssRule.attributeStyleMap.delete(prop)
              } else {
                cssRule.style.removeProperty(prop)
              }
            } catch (err) {
              true
                ? (0, tiny_warning__WEBPACK_IMPORTED_MODULE_6__['default'])(
                    false,
                    '[JSS] DOMException "' + err.message + '" was thrown. Tried to remove property "' + prop + '".'
                  )
                : 0
            }
          }
          /**
           * Set the selector.
           */

          var setSelector = function setSelector(cssRule, selectorText) {
            cssRule.selectorText = selectorText // Return false if setter was not successful.
            // Currently works in chrome only.

            return cssRule.selectorText === selectorText
          }
          /**
           * Gets the `head` element upon the first call and caches it.
           * We assume it can't be null.
           */

          var getHead = memoize(function () {
            return document.querySelector('head')
          })
          /**
           * Find attached sheet with an index higher than the passed one.
           */

          function findHigherSheet(registry, options) {
            for (var i = 0; i < registry.length; i++) {
              var sheet = registry[i]

              if (
                sheet.attached &&
                sheet.options.index > options.index &&
                sheet.options.insertionPoint === options.insertionPoint
              ) {
                return sheet
              }
            }

            return null
          }
          /**
           * Find attached sheet with the highest index.
           */

          function findHighestSheet(registry, options) {
            for (var i = registry.length - 1; i >= 0; i--) {
              var sheet = registry[i]

              if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
                return sheet
              }
            }

            return null
          }
          /**
           * Find a comment with "jss" inside.
           */

          function findCommentNode(text) {
            var head = getHead()

            for (var i = 0; i < head.childNodes.length; i++) {
              var node = head.childNodes[i]

              if (node.nodeType === 8 && node.nodeValue.trim() === text) {
                return node
              }
            }

            return null
          }
          /**
           * Find a node before which we can insert the sheet.
           */

          function findPrevNode(options) {
            var registry = sheets.registry

            if (registry.length > 0) {
              // Try to insert before the next higher sheet.
              var sheet = findHigherSheet(registry, options)

              if (sheet && sheet.renderer) {
                return {
                  parent: sheet.renderer.element.parentNode,
                  node: sheet.renderer.element
                }
              } // Otherwise insert after the last attached.

              sheet = findHighestSheet(registry, options)

              if (sheet && sheet.renderer) {
                return {
                  parent: sheet.renderer.element.parentNode,
                  node: sheet.renderer.element.nextSibling
                }
              }
            } // Try to find a comment placeholder if registry is empty.

            var insertionPoint = options.insertionPoint

            if (insertionPoint && typeof insertionPoint === 'string') {
              var comment = findCommentNode(insertionPoint)

              if (comment) {
                return {
                  parent: comment.parentNode,
                  node: comment.nextSibling
                }
              } // If user specifies an insertion point and it can't be found in the document -
              // bad specificity issues may appear.

              true
                ? (0, tiny_warning__WEBPACK_IMPORTED_MODULE_6__['default'])(
                    false,
                    '[JSS] Insertion point "' + insertionPoint + '" not found.'
                  )
                : 0
            }

            return false
          }
          /**
           * Insert style element into the DOM.
           */

          function insertStyle(style, options) {
            var insertionPoint = options.insertionPoint
            var nextNode = findPrevNode(options)

            if (nextNode !== false && nextNode.parent) {
              nextNode.parent.insertBefore(style, nextNode.node)
              return
            } // Works with iframes and any node types.

            if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
              var insertionPointElement = insertionPoint
              var parentNode = insertionPointElement.parentNode
              if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling)
              else
                true
                  ? (0, tiny_warning__WEBPACK_IMPORTED_MODULE_6__['default'])(
                      false,
                      '[JSS] Insertion point is not in the DOM.'
                    )
                  : 0
              return
            }

            getHead().appendChild(style)
          }
          /**
           * Read jss nonce setting from the page if the user has set it.
           */

          var getNonce = memoize(function () {
            var node = document.querySelector('meta[property="csp-nonce"]')
            return node ? node.getAttribute('content') : null
          })

          var _insertRule = function insertRule(container, rule, index) {
            try {
              if ('insertRule' in container) {
                container.insertRule(rule, index)
              } // Keyframes rule.
              else if ('appendRule' in container) {
                container.appendRule(rule)
              }
            } catch (err) {
              true ? (0, tiny_warning__WEBPACK_IMPORTED_MODULE_6__['default'])(false, '[JSS] ' + err.message) : 0
              return false
            }

            return container.cssRules[index]
          }

          var getValidRuleInsertionIndex = function getValidRuleInsertionIndex(container, index) {
            var maxIndex = container.cssRules.length // In case previous insertion fails, passed index might be wrong

            if (index === undefined || index > maxIndex) {
              // eslint-disable-next-line no-param-reassign
              return maxIndex
            }

            return index
          }

          var createStyle = function createStyle() {
            var el = document.createElement('style') // Without it, IE will have a broken source order specificity if we
            // insert rules after we insert the style tag.
            // It seems to kick-off the source order specificity algorithm.

            el.textContent = '\n'
            return el
          }

          var DomRenderer =
            /*#__PURE__*/
            (function () {
              // Will be empty if link: true option is not set, because
              // it is only for use together with insertRule API.
              function DomRenderer(sheet) {
                this.getPropertyValue = getPropertyValue
                this.setProperty = setProperty
                this.removeProperty = removeProperty
                this.setSelector = setSelector
                this.hasInsertedRules = false
                this.cssRules = []
                // There is no sheet when the renderer is used from a standalone StyleRule.
                if (sheet) sheets.add(sheet)
                this.sheet = sheet

                var _ref = this.sheet ? this.sheet.options : {},
                  media = _ref.media,
                  meta = _ref.meta,
                  element = _ref.element

                this.element = element || createStyle()
                this.element.setAttribute('data-jss', '')
                if (media) this.element.setAttribute('media', media)
                if (meta) this.element.setAttribute('data-meta', meta)
                var nonce = getNonce()
                if (nonce) this.element.setAttribute('nonce', nonce)
              }
              /**
               * Insert style element into render tree.
               */

              var _proto = DomRenderer.prototype

              _proto.attach = function attach() {
                // In the case the element node is external and it is already in the DOM.
                if (this.element.parentNode || !this.sheet) return
                insertStyle(this.element, this.sheet.options) // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
                // most browsers create a new CSSStyleSheet, except of all IEs.

                var deployed = Boolean(this.sheet && this.sheet.deployed)

                if (this.hasInsertedRules && deployed) {
                  this.hasInsertedRules = false
                  this.deploy()
                }
              }
              /**
               * Remove style element from render tree.
               */

              _proto.detach = function detach() {
                if (!this.sheet) return
                var parentNode = this.element.parentNode
                if (parentNode) parentNode.removeChild(this.element) // In the most browsers, rules inserted using insertRule() API will be lost when style element is removed.
                // Though IE will keep them and we need a consistent behavior.

                if (this.sheet.options.link) {
                  this.cssRules = []
                  this.element.textContent = '\n'
                }
              }
              /**
               * Inject CSS string into element.
               */

              _proto.deploy = function deploy() {
                var sheet = this.sheet
                if (!sheet) return

                if (sheet.options.link) {
                  this.insertRules(sheet.rules)
                  return
                }

                this.element.textContent = '\n' + sheet.toString() + '\n'
              }
              /**
               * Insert RuleList into an element.
               */

              _proto.insertRules = function insertRules(rules, nativeParent) {
                for (var i = 0; i < rules.index.length; i++) {
                  this.insertRule(rules.index[i], i, nativeParent)
                }
              }
              /**
               * Insert a rule into element.
               */

              _proto.insertRule = function insertRule(rule, index, nativeParent) {
                if (nativeParent === void 0) {
                  nativeParent = this.element.sheet
                }

                if (rule.rules) {
                  var parent = rule
                  var latestNativeParent = nativeParent

                  if (rule.type === 'conditional' || rule.type === 'keyframes') {
                    var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index) // We need to render the container without children first.

                    latestNativeParent = _insertRule(
                      nativeParent,
                      parent.toString({
                        children: false
                      }),
                      _insertionIndex
                    )

                    if (latestNativeParent === false) {
                      return false
                    }

                    this.refCssRule(rule, _insertionIndex, latestNativeParent)
                  }

                  this.insertRules(parent.rules, latestNativeParent)
                  return latestNativeParent
                }

                var ruleStr = rule.toString()
                if (!ruleStr) return false
                var insertionIndex = getValidRuleInsertionIndex(nativeParent, index)

                var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex)

                if (nativeRule === false) {
                  return false
                }

                this.hasInsertedRules = true
                this.refCssRule(rule, insertionIndex, nativeRule)
                return nativeRule
              }

              _proto.refCssRule = function refCssRule(rule, index, cssRule) {
                rule.renderable = cssRule // We only want to reference the top level rules, deleteRule API doesn't support removing nested rules
                // like rules inside media queries or keyframes

                if (rule.options.parent instanceof StyleSheet) {
                  this.cssRules.splice(index, 0, cssRule)
                }
              }
              /**
               * Delete a rule.
               */

              _proto.deleteRule = function deleteRule(cssRule) {
                var sheet = this.element.sheet
                var index = this.indexOf(cssRule)
                if (index === -1) return false
                sheet.deleteRule(index)
                this.cssRules.splice(index, 1)
                return true
              }
              /**
               * Get index of a CSS Rule.
               */

              _proto.indexOf = function indexOf(cssRule) {
                return this.cssRules.indexOf(cssRule)
              }
              /**
               * Generate a new CSS rule and replace the existing one.
               */

              _proto.replaceRule = function replaceRule(cssRule, rule) {
                var index = this.indexOf(cssRule)
                if (index === -1) return false
                this.element.sheet.deleteRule(index)
                this.cssRules.splice(index, 1)
                return this.insertRule(rule, index)
              }
              /**
               * Get all rules elements.
               */

              _proto.getRules = function getRules() {
                return this.element.sheet.cssRules
              }

              return DomRenderer
            })()

          var instanceCounter = 0

          var Jss =
            /*#__PURE__*/
            (function () {
              function Jss(options) {
                this.id = instanceCounter++
                this.version = '10.9.2'
                this.plugins = new PluginsRegistry()
                this.options = {
                  id: {
                    minify: false
                  },
                  createGenerateId: createGenerateId,
                  Renderer: is_in_browser__WEBPACK_IMPORTED_MODULE_1__['default'] ? DomRenderer : null,
                  plugins: []
                }
                this.generateId = createGenerateId({
                  minify: false
                })

                for (var i = 0; i < plugins.length; i++) {
                  this.plugins.use(plugins[i], {
                    queue: 'internal'
                  })
                }

                this.setup(options)
              }
              /**
               * Prepares various options, applies plugins.
               * Should not be used twice on the same instance, because there is no plugins
               * deduplication logic.
               */

              var _proto = Jss.prototype

              _proto.setup = function setup(options) {
                if (options === void 0) {
                  options = {}
                }

                if (options.createGenerateId) {
                  this.options.createGenerateId = options.createGenerateId
                }

                if (options.id) {
                  this.options.id = (0, _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])(
                    {},
                    this.options.id,
                    options.id
                  )
                }

                if (options.createGenerateId || options.id) {
                  this.generateId = this.options.createGenerateId(this.options.id)
                }

                if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint

                if ('Renderer' in options) {
                  this.options.Renderer = options.Renderer
                } // eslint-disable-next-line prefer-spread

                if (options.plugins) this.use.apply(this, options.plugins)
                return this
              }
              /**
               * Create a Style Sheet.
               */

              _proto.createStyleSheet = function createStyleSheet(styles, options) {
                if (options === void 0) {
                  options = {}
                }

                var _options = options,
                  index = _options.index

                if (typeof index !== 'number') {
                  index = sheets.index === 0 ? 0 : sheets.index + 1
                }

                var sheet = new StyleSheet(
                  styles,
                  (0, _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])({}, options, {
                    jss: this,
                    generateId: options.generateId || this.generateId,
                    insertionPoint: this.options.insertionPoint,
                    Renderer: this.options.Renderer,
                    index: index
                  })
                )
                this.plugins.onProcessSheet(sheet)
                return sheet
              }
              /**
               * Detach the Style Sheet and remove it from the registry.
               */

              _proto.removeStyleSheet = function removeStyleSheet(sheet) {
                sheet.detach()
                sheets.remove(sheet)
                return this
              }
              /**
               * Create a rule without a Style Sheet.
               * [Deprecated] will be removed in the next major version.
               */

              _proto.createRule = function createRule$1(name, style, options) {
                if (style === void 0) {
                  style = {}
                }

                if (options === void 0) {
                  options = {}
                }

                // Enable rule without name for inline styles.
                if (typeof name === 'object') {
                  return this.createRule(undefined, name, style)
                }

                var ruleOptions = (0, _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])(
                  {},
                  options,
                  {
                    name: name,
                    jss: this,
                    Renderer: this.options.Renderer
                  }
                )

                if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId
                if (!ruleOptions.classes) ruleOptions.classes = {}
                if (!ruleOptions.keyframes) ruleOptions.keyframes = {}

                var rule = createRule(name, style, ruleOptions)

                if (rule) this.plugins.onProcessRule(rule)
                return rule
              }
              /**
               * Register plugin. Passed function will be invoked with a rule instance.
               */

              _proto.use = function use() {
                var _this = this

                for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
                  plugins[_key] = arguments[_key]
                }

                plugins.forEach(function (plugin) {
                  _this.plugins.use(plugin)
                })
                return this
              }

              return Jss
            })()

          var createJss = function createJss(options) {
            return new Jss(options)
          }

          /**
           * SheetsManager is like a WeakMap which is designed to count StyleSheet
           * instances and attach/detach automatically.
           * Used in react-jss.
           */

          var SheetsManager =
            /*#__PURE__*/
            (function () {
              function SheetsManager() {
                this.length = 0
                this.sheets = new WeakMap()
              }

              var _proto = SheetsManager.prototype

              _proto.get = function get(key) {
                var entry = this.sheets.get(key)
                return entry && entry.sheet
              }

              _proto.add = function add(key, sheet) {
                if (this.sheets.has(key)) return
                this.length++
                this.sheets.set(key, {
                  sheet: sheet,
                  refs: 0
                })
              }

              _proto.manage = function manage(key) {
                var entry = this.sheets.get(key)

                if (entry) {
                  if (entry.refs === 0) {
                    entry.sheet.attach()
                  }

                  entry.refs++
                  return entry.sheet
                }

                ;(0, tiny_warning__WEBPACK_IMPORTED_MODULE_6__['default'])(
                  false,
                  "[JSS] SheetsManager: can't find sheet to manage"
                )
                return undefined
              }

              _proto.unmanage = function unmanage(key) {
                var entry = this.sheets.get(key)

                if (entry) {
                  if (entry.refs > 0) {
                    entry.refs--
                    if (entry.refs === 0) entry.sheet.detach()
                  }
                } else {
                  ;(0, tiny_warning__WEBPACK_IMPORTED_MODULE_6__['default'])(
                    false,
                    "SheetsManager: can't find sheet to unmanage"
                  )
                }
              }
              ;(0, _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__['default'])(SheetsManager, [
                {
                  key: 'size',
                  get: function get() {
                    return this.length
                  }
                }
              ])

              return SheetsManager
            })()

          /**
           * Export a constant indicating if this browser has CSSTOM support.
           * https://developers.google.com/web/updates/2018/03/cssom
           */
          var hasCSSTOMSupport = typeof CSS === 'object' && CSS != null && 'number' in CSS

          /**
           * Extracts a styles object with only props that contain function values.
           */
          function getDynamicStyles(styles) {
            var to = null

            for (var key in styles) {
              var value = styles[key]
              var type = typeof value

              if (type === 'function') {
                if (!to) to = {}
                to[key] = value
              } else if (type === 'object' && value !== null && !Array.isArray(value)) {
                var extracted = getDynamicStyles(value)

                if (extracted) {
                  if (!to) to = {}
                  to[key] = extracted
                }
              }
            }

            return to
          }

          /**
           * A better abstraction over CSS.
           *
           * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
           * @website https://github.com/cssinjs/jss
           * @license MIT
           */
          var index = createJss()

          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = index

          /***/
        },

      /***/ '../../ui-library/node_modules/tiny-warning/dist/tiny-warning.esm.js':
        /*!***************************************************************************!*\
  !*** ../../ui-library/node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \***************************************************************************/
        /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__)
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__
            /* harmony export */
          })
          var isProduction = 'development' === 'production'
          function warning(condition, message) {
            if (!isProduction) {
              if (condition) {
                return
              }

              var text = 'Warning: ' + message

              if (typeof console !== 'undefined') {
                console.warn(text)
              }

              try {
                throw Error(text)
              } catch (x) {}
            }
          }

          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = warning

          /***/
        },

      /***/ '../../ui-library/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js':
        /*!*****************************************************************************************!*\
  !*** ../../ui-library/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \*****************************************************************************************/
        /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__)
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => /* binding */ _assertThisInitialized
            /* harmony export */
          })
          function _assertThisInitialized(self) {
            if (self === void 0) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return self
          }

          /***/
        },

      /***/ '../../ui-library/node_modules/@babel/runtime/helpers/esm/createClass.js':
        /*!*******************************************************************************!*\
  !*** ../../ui-library/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \*******************************************************************************/
        /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__)
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => /* binding */ _createClass
            /* harmony export */
          })
          /* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./toPropertyKey.js */ '../../ui-library/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js'
          )

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i]
              descriptor.enumerable = descriptor.enumerable || false
              descriptor.configurable = true
              if ('value' in descriptor) descriptor.writable = true
              Object.defineProperty(
                target,
                (0, _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__['default'])(descriptor.key),
                descriptor
              )
            }
          }
          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps)
            if (staticProps) _defineProperties(Constructor, staticProps)
            Object.defineProperty(Constructor, 'prototype', {
              writable: false
            })
            return Constructor
          }

          /***/
        },

      /***/ '../../ui-library/node_modules/@babel/runtime/helpers/esm/extends.js':
        /*!***************************************************************************!*\
  !*** ../../ui-library/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \***************************************************************************/
        /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__)
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => /* binding */ _extends
            /* harmony export */
          })
          function _extends() {
            _extends = Object.assign
              ? Object.assign.bind()
              : function (target) {
                  for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i]
                    for (var key in source) {
                      if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                      }
                    }
                  }
                  return target
                }
            return _extends.apply(this, arguments)
          }

          /***/
        },

      /***/ '../../ui-library/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js':
        /*!*********************************************************************************!*\
  !*** ../../ui-library/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \*********************************************************************************/
        /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__)
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => /* binding */ _inheritsLoose
            /* harmony export */
          })
          /* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./setPrototypeOf.js */ '../../ui-library/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js'
          )

          function _inheritsLoose(subClass, superClass) {
            subClass.prototype = Object.create(superClass.prototype)
            subClass.prototype.constructor = subClass
            ;(0, _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__['default'])(subClass, superClass)
          }

          /***/
        },

      /***/ '../../ui-library/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js':
        /*!************************************************************************************************!*\
  !*** ../../ui-library/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \************************************************************************************************/
        /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__)
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => /* binding */ _objectWithoutPropertiesLoose
            /* harmony export */
          })
          function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null) return {}
            var target = {}
            var sourceKeys = Object.keys(source)
            var key, i
            for (i = 0; i < sourceKeys.length; i++) {
              key = sourceKeys[i]
              if (excluded.indexOf(key) >= 0) continue
              target[key] = source[key]
            }
            return target
          }

          /***/
        },

      /***/ '../../ui-library/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js':
        /*!**********************************************************************************!*\
  !*** ../../ui-library/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \**********************************************************************************/
        /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__)
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => /* binding */ _setPrototypeOf
            /* harmony export */
          })
          function _setPrototypeOf(o, p) {
            _setPrototypeOf = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function _setPrototypeOf(o, p) {
                  o.__proto__ = p
                  return o
                }
            return _setPrototypeOf(o, p)
          }

          /***/
        },

      /***/ '../../ui-library/node_modules/@babel/runtime/helpers/esm/toPrimitive.js':
        /*!*******************************************************************************!*\
  !*** ../../ui-library/node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \*******************************************************************************/
        /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__)
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => /* binding */ _toPrimitive
            /* harmony export */
          })
          /* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./typeof.js */ '../../ui-library/node_modules/@babel/runtime/helpers/esm/typeof.js'
          )

          function _toPrimitive(input, hint) {
            if ((0, _typeof_js__WEBPACK_IMPORTED_MODULE_0__['default'])(input) !== 'object' || input === null)
              return input
            var prim = input[Symbol.toPrimitive]
            if (prim !== undefined) {
              var res = prim.call(input, hint || 'default')
              if ((0, _typeof_js__WEBPACK_IMPORTED_MODULE_0__['default'])(res) !== 'object') return res
              throw new TypeError('@@toPrimitive must return a primitive value.')
            }
            return (hint === 'string' ? String : Number)(input)
          }

          /***/
        },

      /***/ '../../ui-library/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js':
        /*!*********************************************************************************!*\
  !*** ../../ui-library/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \*********************************************************************************/
        /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__)
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => /* binding */ _toPropertyKey
            /* harmony export */
          })
          /* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./typeof.js */ '../../ui-library/node_modules/@babel/runtime/helpers/esm/typeof.js'
          )
          /* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./toPrimitive.js */ '../../ui-library/node_modules/@babel/runtime/helpers/esm/toPrimitive.js'
          )

          function _toPropertyKey(arg) {
            var key = (0, _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__['default'])(arg, 'string')
            return (0, _typeof_js__WEBPACK_IMPORTED_MODULE_0__['default'])(key) === 'symbol' ? key : String(key)
          }

          /***/
        },

      /***/ '../../ui-library/node_modules/@babel/runtime/helpers/esm/typeof.js':
        /*!**************************************************************************!*\
  !*** ../../ui-library/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \**************************************************************************/
        /***/ (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
          __webpack_require__.r(__webpack_exports__)
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => /* binding */ _typeof
            /* harmony export */
          })
          function _typeof(obj) {
            '@babel/helpers - typeof'

            return (
              (_typeof =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                  ? function (obj) {
                      return typeof obj
                    }
                  : function (obj) {
                      return obj &&
                        'function' == typeof Symbol &&
                        obj.constructor === Symbol &&
                        obj !== Symbol.prototype
                        ? 'symbol'
                        : typeof obj
                    }),
              _typeof(obj)
            )
          }

          /***/
        }

      /******/
    }
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {}
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/ // Check if module is in cache
      /******/ var cachedModule = __webpack_module_cache__[moduleId]
      /******/ if (cachedModule !== undefined) {
        /******/ return cachedModule.exports
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (__webpack_module_cache__[moduleId] = {
        /******/ // no module.id needed
        /******/ // no module.loaded needed
        /******/ exports: {}
        /******/
      })
      /******/
      /******/ // Execute the module function
      /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__)
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports
      /******/
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/compat get default export */
    /******/ ;(() => {
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/ __webpack_require__.n = (module) => {
        /******/ var getter = module && module.__esModule ? /******/ () => module['default'] : /******/ () => module
        /******/ __webpack_require__.d(getter, { a: getter })
        /******/ return getter
        /******/
      }
      /******/
    })() /* webpack/runtime/define property getters */
    /******/
    /******/
    /******/
    ;(() => {
      /******/ // define getter functions for harmony exports
      /******/ __webpack_require__.d = (exports, definition) => {
        /******/ for (var key in definition) {
          /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            /******/ Object.defineProperty(exports, key, {
              enumerable: true,
              get: definition[key]
            })
            /******/
          }
          /******/
        }
        /******/
      }
      /******/
    })() /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    /******/
    /******/
    ;(() => {
      /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
      /******/
    })() /* webpack/runtime/make namespace object */
    /******/
    /******/
    /******/
    ;(() => {
      /******/ // define __esModule on exports
      /******/ __webpack_require__.r = (exports) => {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/ Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          })
          /******/
        }
        /******/ Object.defineProperty(exports, '__esModule', { value: true })
        /******/
      }
      /******/
    })()
    /******/
    /************************************************************************/
    var __webpack_exports__ = {}
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    ;(() => {
      /*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
      __webpack_require__.r(__webpack_exports__)
      /* harmony import */ var _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(
          /*! @epicgames-ps/lib-pixelstreamingfrontend-ue5.2 */ '../../library/dist/lib-pixelstreamingfrontend.esm.js'
        )
      /* harmony import */ var _epicgames_ps_lib_pixelstreamingfrontend_ui_ue5_2__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! @epicgames-ps/lib-pixelstreamingfrontend-ui-ue5.2 */ '../../ui-library/dist/lib-pixelstreamingfrontend-ui.esm.js'
        )
      // Copyright Epic Games, Inc. All Rights Reserved.

      var PixelStreamingApplicationStyles =
        new _epicgames_ps_lib_pixelstreamingfrontend_ui_ue5_2__WEBPACK_IMPORTED_MODULE_0__.PixelStreamingApplicationStyle()
      PixelStreamingApplicationStyles.applyStyleSheet()
      window.onload = function () {
        // Example of how to set the logger level
        // Logger.SetLoggerVerbosity(10);
        // Create a config object
        var config = new _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_1__.Config({
          useUrlParams: true
        })
        // Create a Native DOM delegate instance that implements the Delegate interface class
        var stream = new _epicgames_ps_lib_pixelstreamingfrontend_ue5_2__WEBPACK_IMPORTED_MODULE_1__.PixelStreaming(
          config
        )
        window.stream = stream
        var application =
          new _epicgames_ps_lib_pixelstreamingfrontend_ui_ue5_2__WEBPACK_IMPORTED_MODULE_0__.Application({
            stream: stream,
            onColorModeChanged: function (isLightMode) {
              return PixelStreamingApplicationStyles.setColorMode(isLightMode)
            }
          })
        // document.getElementById("centrebox").appendChild(application.rootElement);
        window.document.body.appendChild(application.rootElement)
      }
    })()

    /******/ return __webpack_exports__
    /******/
  })()
})
