// Obtiene los numeros de los sysaids modificados de un area especifica en un intervalo de tiempo especificado
function incident_range(time1, time2, currentUser, problem_type){
    var data = [];
  
    // Leer la COOKIE de la hoja de calculo  
    var cookie = currentUser['sysaid_cookie'];
    var responsibility = currentUser['sysaid_id'];
    
    var options = {
      'method':'get',
      'headers' : {
        'Cookie': cookie,
        'Content-Type':'application/json'
      },
      'muteHttpExceptions': true      
    }

    var url = 'http://laningenieria.sysaidcss.com/api/v1/sr?fields=id&type=incident&update_time=' + time1 +',' + time2 + '&responsibility=' + responsibility + '&problem_type=' + problem_type + '&limit=100';
    //Logger.log(url);
    
    var code = UrlFetchApp.fetch(url, options).getResponseCode();
    //Logger.log(code);
    
    if(code == 200){
        var response = UrlFetchApp.fetch(url, options).getContentText();
        json = JSON.parse(response);     
        //Logger.log(response);
        for(var j=0; j < json.length; j++){ 
            //Logger.log(json[j].id);
            data.push(json[j].id);            
        }  
        return data;
    }else{
        if(code == 401){          
            // Si recibio el error 401, entonces trata de hacer login
            cookie = login(currentUser['sysaid_user'], currentUser['sysaid_password']);
            setCookie(currentUser['id'] + 1, cookie);
            //Logger.log(cookie);  
        }        
    }
}



function acquireSysaids(time1, time2){
  //Logger.log(msg)
  var currentUser = getUserData()[0][0];
  
  try{
    if(currentUser['department'] == 'Estructuras'){
        var estructuras = incident_range(time1, time2, currentUser, 'Estructuras');
        //Logger.log(estructuras);
        var cabina = incident_range(time1, time2, currentUser, 'Cabina');
        //Logger.log(cabina);
        var data = estructuras.concat(cabina);
        Logger.log(data);
        return data;
    }
  
    
  } catch(e){
        var error_msg = [];
        error_msg = ['false', e.message];
        Logger.log(error_msg);
  }
   
}



function incident_details(number){
    var currentUser = getUserData()[0][0];
    var cookie = currentUser['sysaid_cookie'];
  
    var options = {
      'method':'get',
      'headers' : {
        'Cookie':cookie,
        'Content-Type':'application/json'
      }   
      
    }

    var url = "http://laningenieria.sysaidcss.com/api/v1/sr/" + number;
  
  
  
    var response_text = UrlFetchApp.fetch(url, options).getContentText()
    // Logger.log(response_text);
  
    json = JSON.parse(response_text);
  //retornar el json y el for completo pasa al front directo a dibujar sin guardar variables
   // Logger.log(json);

  // Logger.log(json.info.length);
  
  
/*   for(var i=0; i < json.info.length; i++){

      if(json.info[i].key == 'problem_type'){        
         
         Logger.log("problem_type= %s", register= json.info[i].value);
      }

      if(json.info[i].key == 'problem_sub_type'){        
         
         Logger.log("problem_sub_type= %s", register= json.info[i].value);
      }     

      if(json.info[i].key == 'third_level_category'){        
         
         Logger.log("third_level_category= %s", register= json.info[i].value);
      }    
      
      if(json.info[i].key == 'submit_user'){        
         
         Logger.log("submit_user= %s", register= json.info[i].value);
        Logger.log("submit_user= %s", register= json.info[i].valueCaption);
      }       
    
      if(json.info[i].key == 'assigned_group'){        

        Logger.log("assigned_group= %s", register= json.info[i].valueCaption);
      } 
      
      if(json.info[i].key == 'responsibility'){        
         
         Logger.log("responsibility= %s", register= json.info[i].valueCaption);
      }       
    
      if(json.info[i].key == 'update_user'){        
         
         Logger.log("update_user= %s", register= json.info[i].valueCaption);
      }     
    
      if(json.info[i].key == 'status'){        
         
         Logger.log("status= %s", register= json.info[i].valueCaption);
      }    
      
      if(json.info[i].key == 'title'){        
         
         Logger.log("title= %s", register= json.info[i].value);
      }      
    
      if(json.info[i].key == 'description'){        
         
         Logger.log("description= %s", register= json.info[i].value);
      } 
      
      if(json.info[i].key == 'notes'){        

        Logger.log("notes= %s", register= json.info[i].value);
        Logger.log("notes= %s", register= json.info[i].value[0]);
      }    
     
      if(json.info[i].key == 'solution'){        
         
         Logger.log("Solution= %s", register= json.info[i].value);
      }    
      
      if(json.info[i].key == 'urgency'){        
         sys_urgency = json.info[i].valueCaption;
         Logger.log("urgency= %s", register= json.info[i].valueCaption);
      }     
    
      if(json.info[i].key == 'due_date'){        
         
         Logger.log("due_date= %s", register= json.info[i].value);
        Logger.log("due_date= %s", register= json.info[i].valueCaption);
      }   
      
      if(json.info[i].key == 'timer1'){        
         
         Logger.log("Time to React = %s", register= json.info[i].value);
      }     
    
      if(json.info[i].key == 'timer2'){        
         
         Logger.log("Total time= %s", register= json.info[i].value);
      }         
    
      if(json.info[i].key == 'timer4'){        
         
         Logger.log("Waiting Custmr answe= %s", register= json.info[i].value);
      }  
    
      if(json.info[i].key == 'timer5'){        
         
         Logger.log("Waiting OEM Answer= %s", register= json.info[i].value);
      }  
    
      if(json.info[i].key == 'timer6'){        
         
         Logger.log("Work in process= %s", register= json.info[i].value);
      }      
    if(json.info[i].key == 'insert_time'){        
         
         Logger.log("Request time= %s", register= json.info[i].value);
      }   
      

      if(json.info[i].key == 'cust_text2'){        

        Logger.log("barcode= %s", register= json.info[i].valueCaption);
      }    
       
      
      
   
    
  } */
  return json.info;

}


function test_queries(){
  time1=1554710400000;
  time2=1554742800000;
  
  acquireSysaids(time1, time2);
  
}

function test_queries2(){
  
  incident_details(490688);
  
}