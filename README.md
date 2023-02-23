# React_components


### Use Modal as global component:

> Set `<CustomModalContainer/>` to Root
> <br/>
> Define hook:
>> const customModal = useCustomModal()
> <br/>
> Call modal methods:
> <br/>
>> customModal.add(() => console.log("success"))
>> <br/>
>> customModal.edit(1, () => console.log("success"))





### Use Tast as global component:

> Set `<ToastContainer/>` to Root
> <br/>
> Define hook:
>> const toast = useToast();
><br/>
> Call toast as method:
> <br/>
>> toast({ label: `message`, type: "info" });



