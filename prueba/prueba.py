import time
# from datetime import datetime
from colored import fg, bg, attr

import config
#import postValues


def log(msg, timestamp, color):
    if timestamp == None:
        timestamp = str(int(time.time()))
        now_formated = time.strftime("%Y-%m-%d %H:%M:%S")

        # now = datetime.now()
        # now_formated = now.strftime("%Y-%m-%d %H:%M:%S")
        # timestamp = int(datetime.timestamp(now))

    else:
        now_formated = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(int(timestamp)))
        
        # timestamp = int(timestamp)
        # now = datetime.fromtimestamp(timestamp)
        # now_formated = now.strftime("%Y-%m-%d %H:%M:%S")
        
        abc = (now_formated) + ", " + msg
    
        print(abc)
    msg_1 = timestamp + ", " + str(now_formated) + ", " + msg
    
    logFile = config.DIRECTORY_LOGS + "logData.csv"
    fh = open(logFile, "a")
    fh.write(msg_1)
    fh.write("\n")
    fh.close()

    print (fg(color) + msg_1 + attr('reset'))


log("prueba", "1554688007", "green")
# log("prueba", None, "green")

