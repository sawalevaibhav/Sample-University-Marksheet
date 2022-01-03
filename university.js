
   
   function show(){
       var MATHATICS= document.getElementById("math").value;
      
       var C_PROGRAMING=document.getElementById("C_programing").value;
       var DATA_STRUCTURE= document.getElementById("Data_structure").value;
       var JAVASCRIPT= document.getElementById("java").value;
       var HTML=document.getElementById("HTML").value;
       var Total 
       var per
      
       
       Total=  Number(MATHATICS)+Number (C_PROGRAMING)+ Number(JAVASCRIPT)+Number (HTML) +Number(DATA_STRUCTURE);
       per=(Total/5);

      
       document.getElementById("id6").innerHTML=" Total Marks :"+ Total;
       document.getElementById("id9").innerHTML=" Percentages :"+ per +"%"; 
     
      if(per>=40){
                   document.getElementById("id7").innerHTML=" Result: PASS";
               }
               else
               {
                document.getElementById("id7").innerHTML="Result: FAIL";

               }

               //indivual grade 1

  {
    if(MATHATICS>=90){
           document.getElementById("id10").innerHTML=" O";
       }
       else if(MATHATICS>=80){
           document.getElementById("id10").innerHTML="A+";
       }
 
       else if(MATHATICS>=70){
           document.getElementById("id10").innerHTML="Grade: 'A'";
       }
       else if(MATHATICS>=59.9){
           document.getElementById("id10").innerHTML="B";
       }
       else if(MATHATICS>=39.9){
           document.getElementById("id10").innerHTML="C";
       }
       else if(MATHATICS<=39.9){
           document.getElementById("id10").innerHTML="--";
       }      

  }  //grade2

  {
    if(C_PROGRAMING>=90){
           document.getElementById("id11").innerHTML=" O";
       }
       else if(C_PROGRAMING>=80){
           document.getElementById("id11").innerHTML="A+";
       }
 
       else if(C_PROGRAMING>=70){
           document.getElementById("id11").innerHTML="Grade: 'A'";
       }
       else if(C_PROGRAMING>=59.9){
           document.getElementById("id11").innerHTML="B";
       }
       else if(C_PROGRAMING>=39.9){
           document.getElementById("id11").innerHTML="C";
       }
       else if(C_PROGRAMING<=39.9){
           document.getElementById("id11").innerHTML="--";
       }      

    } //Grade 3
    {
       
        
        if(DATA_STRUCTURE>=90){
           document.getElementById("id12").innerHTML=" O";
       }
       else if(DATA_STRUCTURE>=80){
           document.getElementById("id12").innerHTML="A+";
       }
 
       else if(DATA_STRUCTURE>=70){
           document.getElementById("id12").innerHTML="Grade: 'A'";
       }
       else if(DATA_STRUCTURE>=59.9){
           document.getElementById("id12").innerHTML="B";
       }
       else if(DATA_STRUCTURE>=39.9){
           document.getElementById("id12").innerHTML="C";
       }
       else if(DATA_STRUCTURE<=39.9){
           document.getElementById("id12").innerHTML="--";
       }     
    }

    // grade4 JAVASCRIPT
    {
       
        
       if(JAVASCRIPT>=90){
          document.getElementById("id13").innerHTML=" O";
      }
      else if(JAVASCRIPT>=80){
          document.getElementById("id13").innerHTML="A+";
      }

      else if(JAVASCRIPT>=70){
          document.getElementById("id13").innerHTML="Grade: 'A'";
      }
      else if(JAVASCRIPT>=59.9){
          document.getElementById("id13").innerHTML="B";
      }
      else if(JAVASCRIPT>=39.9){
          document.getElementById("id13").innerHTML="C";
      }
      else if(JAVASCRIPT<=39.9){
          document.getElementById("id13").innerHTML="--";
      }     
   }

// gade5 HTML
{
       
        
       if(HTML>=90){
          document.getElementById("id14").innerHTML=" O";
      }
      else if(HTML>=80){
          document.getElementById("id14").innerHTML="A+";
      }

      else if(HTML>=70){
          document.getElementById("id14").innerHTML="Grade: 'A'";
      }
      else if(HTML>=59.9){
          document.getElementById("id14").innerHTML="B";
      }
      else if(HTML>=39.9){
          document.getElementById("id14").innerHTML="C";
      }
      else if(HTML<=39.9){
          document.getElementById("id14").innerHTML="--";
      }     
   }


     
     
    {
        if(per>=90){
           document.getElementById("id8").innerHTML=" First Class With Distinction' A+':";
       }
       else if(per>=80){
           document.getElementById("id8").innerHTML="Grade: 'A'";
       }
 
       else if(per>=70){
           document.getElementById("id8").innerHTML="Grade: 'B+'";
       }
       else if(per>=59.9){
           document.getElementById("id8").innerHTML="Grade: 'B'";
       }
       else if(per>=39.9){
           document.getElementById("id8").innerHTML="Grade: 'C'";
       }
       else if(per<=39.9){
           document.getElementById("id8").innerHTML="Grade: --";
       }
    }
    }

   
    
