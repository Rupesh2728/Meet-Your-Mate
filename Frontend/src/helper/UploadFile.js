const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/auto/upload`
const uploadFile = async (file) =>{
   const formdata = new FormData();
   formdata.append('file',file);
   formdata.append('upload_preset',"meet-your-mate");
   const response = await fetch(url,{
       body : formdata,
       method : 'POST',
   });

   const responseData = await response.json();

   return responseData;
}

module.exports= {
    uploadFile,
}