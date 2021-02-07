# Creating PDF :octocat: :file_folder:

- This app create pdfs.
- You can fill out a form with your personal information.




## I used file-saver :books:
 You can save as pdf. In this case is blob
 
```
npm i file-saver
```

```javascript
const createPDF = async (values) => {
  
    await axios.post('https://backend-pdf.herokuapp.com/create-pdf/temp', values)
    .then((res)=>{
        // console.log(res);
    });
  
    await axios({
        url: 'https://backend-pdf.herokuapp.com/create-pdf/send',
        method: "GET",
        responseType: "blob", 
       
      }).then((response) => {

          let pdfBlob = new Blob([response.data], {type:'application/pdf'});
          
        saveAs(pdfBlob, "account.pdf") 
        
        
      });
}

```
