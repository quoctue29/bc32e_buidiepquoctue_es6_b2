let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

    //  tiến hành tạo hàm render sử dụng reduce, dùng class col 4 để chia 3 phần bằng nhau trên dãy kính
const renderGlass = dataGlasses.reduce((previousValue,currentValue)=>{
    return previousValue +=`<img class="col-4" onclick="clickGlass('${currentValue.id}')" src="${currentValue.src}" style="width:100%" ;>` 
},'')
document.getElementById('vglassesList').innerHTML = renderGlass;


// hàm dom onlick truyền vào id để dom

const clickGlass = (id)=>{
    //G2
    // dataGlasses => G2
    let temp = '';
    for(let value of dataGlasses){ // duyệt dc từng phần tử trong mảng lấy ra 1 dòng
        if(value.id === id){
            temp = value
            break;
        }
            // tạo đối tượng tạm để chứa mảng mới sau đó gọi các phần tử để nhận diện
    }
    // dom tới id ảnh để tạo ảnh và none ảnh khi chưa thử kính
    document.getElementById('img').src =temp.virtualImg
    document.getElementById('img').hidden = false
    // trừ button phải đặt id để dom còn lại đều dùng querySelector được
    document.querySelector('h4').innerHTML = temp.name +' - '+ temp.brand+' ('+temp.color+')'
    document.getElementById('1').innerHTML = `$${temp.price}`
    document.querySelector('p').innerHTML = temp.description
    document.querySelector('#glassesInfo').style.display = 'inline-block';
}


