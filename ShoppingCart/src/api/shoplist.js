export const ShopListData = [
        {
            "vtest01_count":"1",
            "vtest01_momey":"25",
            "vtest01_showOld":"false",
            "vtest01_ID":"1"
        },
         {
            "vtest01_count":"1",
            "vtest01_momey":"16",
            "vtest01_showOld":"",
            "vtest01_ID":"2"
            
        },
        {
            "vtest01_count":"1",
            "vtest01_momey":"55",
            "vtest01_showOld":"",
            "vtest01_ID":"3"
        },
        {
            "vtest01_count":"1",
            "vtest01_momey":"30",
            "vtest01_showOld":"",
            "vtest01_ID":"4"
        },
        {
            "vtest01_count":"1",
            "vtest01_momey":"9",
            "vtest01_showOld":"",
            "vtest01_ID":"5"
        },
        {
            "vtest01_count":"1",
            "vtest01_momey":"22",
            "vtest01_showOld":"",
            "vtest01_ID":"6"
        },
        {
            "vtest01_count":"1",
            "vtest01_momey":"45",
            "vtest01_showOld":"",
            "vtest01_ID":"7"
        }
    ]


export default {
  getProducts (cb) {
    setTimeout(() => cb(ShopListData), 100)
  }

}


