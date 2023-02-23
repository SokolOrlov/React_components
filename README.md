# React_components


Use modal as global component.

const customModal = useCustomModal();

customModal.add(() => console.log("success"));
customModal.edit(1, () => console.log("success"));
------------------------------------------------------

Self Toast.

const toast = useToast();

toast({ label: `message`, type: "info" });