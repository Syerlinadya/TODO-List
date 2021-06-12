document.addEventListener("DOMContentLoaded",function(){
    // listener u/ menjalankan kode jika DOM sudah load
    const submitForm = document.getElementById("form");
    // mengambil element form
    submitForm.addEventListener("submit", function(){
        event.preventDefault();
        // mencegah behaviour asli agar tidak dijalankan
        addTodo();
    });

    if(isStorageExist()){
        loadDataFromStorage();
    }
 });
  
  
 document.addEventListener("ondatasaved", () => {
    console.log("Data berhasil disimpan.");
 });
 document.addEventListener("ondataloaded", () => {
    refreshDataFromTodos();
 });