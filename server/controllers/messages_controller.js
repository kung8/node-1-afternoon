const messages = [  
];

let id = 0;

module.exports = {
    create:(req,res)=>{
        console.log(req.body);
        const {text,time} = req.body;
        messages.push({
            text,
            time,
            id
        });
        id++;
        res.status(200).send(messages)
    },
    
    read:(req,res, next)=>{
        // console.log(req);
        res.status(200).send(messages)
    },

    update:(req,res) =>{
        console.log(req.params);
        const { text } = req.body;
        const idUpdate = messages.findIndex((message)=>{
            return messages.id === id 
        });
        console.log(idUpdate);
        if(idUpdate < 0){
            res.status(200).send("Message not found")
        }
        else {messages.splice(idUpdate,1,(idUpdate-1));
            res.status(200).send(messages)
        }
    },
 

    delete:(req,res)=>{
        console.log(req.params);
        const { text } = req.params;
        const textUpdate = messages.findIndex(()=>{
            return messages.id === id 
        });
        console.log(textUpdate);
        if(textUpdate < 0){
            res.status(200).send("Message not found");
        }
        else {
        messages.splice(textUpdate,1);
        res.status(200).send(messages)
        }
    }
}