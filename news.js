function getItems(){
    db.collection("items").get().then((querySnapshot)=>{
        let item=[]
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id})=>$(doc.data()`);
            item.push({
                id:doc.id,
                image:doc.data().image,
                date:doc.data().date,
                description:doc.data().description

            });
            // console.log(item)
            
        });
        generateItems(item)

    });
}

function generateItems(item){
    let itemHTML=""
    item.forEach((item)=>{
        itemHTML+=`
        <div class="column">
    <div class="card">

        <div class="image">
            <img src="${item.image}"
            style="width: 100%">
        </div>

       <div class="para">
        ${item.description}
       </div>
       <div class="date">
        ${item.date}
       </div>
    
       
    </div>
  </div>
        `

    });

    document.querySelector(".main-section").innerHTML=itemHTML
}
getItems()