export const sideBar=[
    {
        name:'Dashboard',
        url:'/',
        accessBy:['admin','receptionist']
    },
    {
        name:'Add Patient',
        url:'/addpatient',
        accessBy:['admin','receptionist']
    },
    {
        name:'Manage Patient',
        url:'/managepatient',
        accessBy:['admin','receptionist']
    },
    {
        name:'Add Doctor',
        url:'/adddoctor',
        accessBy:['admin','receptionist']
    },
    {
        name:'Manage Doctor',
        url:'/managedoctor',
        accessBy:['admin','receptionist']
    },
    {
        name:'Add Receptionist ',
        url:'/addreceptionist',
        accessBy:['admin']
    },
    {
        name:'Manage Receptionist ',
        url:'/managereceptionist',
        accessBy:['admin']
    },
    {
        name:'Book Appointment ',
        url:'/bookappointment',
        accessBy:['patient']
    },
    {
        name:'View Appointment ',
        url:'/viewappointment',
        accessBy:['admin','doctor','patient','receptionist']
    },
]