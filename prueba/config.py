import sys, os

def linuxUsername():
    for name in ('LOGNAME', 'USER', 'LNAME', 'USERNAME'):
        user = os.environ.get(name)
        if user:
            return user

        # If not user from os.environ.get()
        import pwd
        return pwd.getpwuid(os.getuid())[0]


def verifyDir(DIRECTORY):
    try:
        os.stat(DIRECTORY)
        return "Directory '" + DIRECTORY + "' has been found"
    except:
        os.mkdir(DIRECTORY)
        return "Directory has been created"




# User Defined Vars
REMOTE= True
TASKS=['Avionix', 'Kernel']
CURRENT_TASK= TASKS[0]
API_EMAIL= 'pablodonayre@gmail.com'
API_PASSWORD = '12345'


# System Vars
NO_ACTIVITY_TIME=1
SYSTEM_USER= linuxUsername()
DIRECTORY="data/screenshots/"
DIRECTORY_LOGS="data/logs/"
URL_AUTH = "http://localhost:3000/api/auth"
URL_DATABASE = "http://localhost:3000/api/work/one"
URL_UPLOAD = "http://localhost:3000/api/work/upload"


