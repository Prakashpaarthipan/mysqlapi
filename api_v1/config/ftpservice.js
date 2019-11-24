
module.exports.fileUpload = async function fileUpload(ftpserver,localpath,newpath){
        try{
            await ftpserver.uploadFrom(localpath, newpath);
            //await client.downloadTo("README_COPY.md", "README_FTP.md")
            
        }catch(e)
        {   ftpserver.close();
            console.log("Error");
        }
    
}
