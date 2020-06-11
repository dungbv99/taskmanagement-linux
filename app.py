from flask import Flask,  make_response, jsonify
import subprocess
import time

app = Flask(__name__)


class Process:
    cmd = ""
    cpu = ""
    mem = ""
    time = ""
    user = ""
    pid = ""

    def __init__(self, _cmd, _cpu, _mem, _user, _pid, _time):
        self.cmd = _cmd
        self.cpu = _cpu
        self.mem = _mem
        self.user = _user
        self.pid = _pid
        self.time = _time


@app.route("/process",methods=["GET"])
def process():
    print "process"
    process = subprocess.check_output(["ps","-eo","cmd,%cpu,%mem","--sort=-%cpu "]).rstrip("\n").replace("'","").replace(" - ","   ").split("\n")[0:20]
    res = make_response(jsonify(process),200)
    return {'time': time.time()}

@app.route("/cpu")
def getSortByCpu():
    #print "cpu"

    
    process = subprocess.check_output(["ps","-eo","cmd,%cpu,%mem,user,pid,time" , "--sort=-%cpu"]).rstrip("\n").replace("'","").replace(" - ","   ").split("\n")[1:]
    data = []
    
    for p in process:
        
        data.append( dict(cmd= p[0:27], cpu = p[28:32], mem = p[33:37], user = p[38:46].replace(" ",""), pid = p[47:52], time = p[53:61] )  )
        
    
    return {'item' : data}

@app.route("/mem")
def getSortByMem():

    #print "mem"

    process = subprocess.check_output(["ps","-eo","cmd,%cpu,%mem,user,pid,time" , "--sort=-%mem"]).rstrip("\n").replace("'","").replace(" - ","   ").split("\n")[1:]
    data = []
    
    for p in process:
        
        data.append( dict(cmd= p[0:27], cpu = p[28:32], mem = p[33:37], user = p[38:46].replace(" ","")  , pid = p[47:52], time = p[53:61] )  )
    
    
    return {'item' : data}

@app.route("/pid")
def getSortByPid():

    #print "pid"

    process = subprocess.check_output(["ps","-eo","cmd,%cpu,%mem,user,pid,time" , "--sort=pid"]).rstrip("\n").replace("'","").replace(" - ","   ").split("\n")[1:]
    data = []

    for p in process:

        data.append( dict(cmd= p[0:27], cpu = p[28:32], mem = p[33:37], user = p[38:46].replace(" ","")  , pid = p[47:52], time = p[53:61] )  )
    

    return {'item' : data}




@app.route("/kill/<pid>")
def killWithPid(pid):
    #print "pid", pid
    subprocess.call(["kill", ""+pid])
    return "done"



if __name__ == "__main__":
    app.run()
