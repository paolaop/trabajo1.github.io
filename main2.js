
        function computar()       

        {   var tirada; f=[0,0,0,0,0,0,0]

            n=parseInt(document.datos.n.value)

        for(i=0 ; i<n; i++)

        {  tirada=Math.round(6*Math.random(1)+0.5)  ;  f[tirada]=f[tirada]+1 }

        for(i=1 ; i<7; i++)

        {  barra="";b=Math.round(100*f[i]/n);

        for(j=0 ; j<b; j++)  {  barra=barra+"*" }

            document.datos[3*i-1].value=f[i]  ; 

            document.datos[3*i].value=f[i]/n  ;     

            }

        } 
		

		