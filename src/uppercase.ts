
function uppercase1 (target: any, key: string){
    let value = target[key];
    const getter = ()=>{return value.toUpperCase()}
    const setter = (newVal: string)=>{value = newVal;}
    Object.defineProperty(target, key, {
            get: getter,
            set: setter
        }
    );
}

class salam {
    @uppercase1
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const shayan = new salam("shayan");
console.log(shayan.name); // SHAYAN
const ali =new salam("ali")
console.log(ali.name)//ALI