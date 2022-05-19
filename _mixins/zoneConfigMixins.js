export default {
  computed: {
    //Settings
    mediaSettings() {
      const types = {
        imagesType: this.$store.getters['qsiteApp/getSettingValueByName']('media::allowedImageTypes'),
        filesType: this.$store.getters['qsiteApp/getSettingValueByName']('media::allowedFileTypes'),
        videosType: this.$store.getters['qsiteApp/getSettingValueByName']('media::allowedVideoTypes'),
        audiosType: this.$store.getters['qsiteApp/getSettingValueByName']('media::allowedAudioTypes'),
      }
      //Response
      return {
        ...types,
        ratios: this.$store.getters['qsiteApp/getSettingValueByName']('media::allowedRatios'),
        maxFileSize: this.$store.getters['qsiteApp/getSettingValueByName']('media::maxFileSize'),
      }
    },
    //Return accept extensions
    acceptExtensions() {
      let response = []//Instance response
      //instance response
      let accept = this.$clone(this.accept && (this.accept != 'all') ?
        this.accept.split(',') : ['images', 'videos', 'audios', 'files'])

      //Get extensions settings
      let extensions = {
        images: this.mediaSettings.imagesType,
        videos: this.mediaSettings.videosType,
        audios: this.mediaSettings.audiosType,
        files: this.mediaSettings.filesType
      }

      //Parse extensions
      accept.forEach(extensionName => {
        if (extensions[extensionName]) response = [...response, ...extensions[extensionName]]
        else response = [...response, extensionName]
      })

      //response
      return {
        withoutDot: response.map(extension => {
          if (extension.includes('.')) extension = extension.replace(".", "")
          return extension
        }),
        withDot: response.map(extension => {
          if (!extension.includes('.')) extension = `.${extension}`
          return extension
        })
      }
    },
    //Zone config
    zoneConfig() {
      return {
        maxFileSizeMB: parseInt(this.maxFileSize || this.mediaSettings.maxFileSize || 10),
        ratio: this.parseRatio(this.ratio)
      }
    },
  },
  methods: {
    //parse ratio
    parseRatio(value) {
      if (!value || value == "free") return NaN
      return value.split(":")[0] / value.split(":")[1]
    }
  }
}
