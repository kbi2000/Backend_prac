const Contact=require('../models/contactsModel')

//@des get all contact
//@route Get /api/contact
//@access public
const asyncHandler=require("express-async-handler");
const getContacts= asyncHandler(async(req, res) => {
    const contacts= await Contact.find();
    res.status(200).json(contacts);});
//@des create new contact
//@des post
    const createContact= asyncHandler(async(req, res) => {
        console.log(req.body,"hello req body");
        const{name,email,phone}=req.body;
        if(!name || !email || !phone){
            (400);
            throw new Error("all fields");
        }
        const contact=await Contact.create({
            name,email,phone
        })
        res.json(contact);
    });

//@des get
const getContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.json(contact);
});
//@des update
const updateContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatecontact= await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,{new:true}
    )
    res.json(updatecontact)
});
//@delete
const deleteContact=asyncHandler(async(req, res) => {
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.remove();
    res.json({ message: `DELETE contact ${req.params.id}` });
});


    module.exports={getContacts,createContact,getContact,updateContact,deleteContact}
    