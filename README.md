# React_components


### Use Modal as global component:

const customModal = useCustomModal();

customModal.add(() => console.log("success"));
<br/>
customModal.edit(1, () => console.log("success"));




### Use Tast as global component:

const toast = useToast();

toast({ label: `message`, type: "info" });
