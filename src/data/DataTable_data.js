const userColumns = [
    { 
        field: "id", 
        headerName: "ID", 
        width: 80
    },
    {
        field: "user",
        headerName: "User",
        width: 256,
        renderCell: (params) => {
            return (
                <div className="imageCell">
                <img className="image" src={params.row.img} alt={`${params.row.username}'s avatar`} />
                {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 256,
    },
    {
        field: "age",
        headerName: "Age",
        width: 144,
    },
    {
        field: "status",
        headerName: "Status",
        width: 168,
        renderCell: (params) => {
            return (
                <div className={`statusCell ${params.row.status}`}>
                {params.row.status}
                </div>
            );
        },
    },
];
  
//temporary data
const userRows = [
    {
        id: 1,
        username: "John Wick",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        email: "john_wick@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jamie_lannister@gmail.com",
        status: "passive",
        age: 42,
    },
    {
        id: 3,
        username: "Johnny Depp",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "johnny_depp@gmail.com",
        status: "pending",
        age: 45,
    },
    {
        id: 4,
        username: "Tony Stark",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "tony_stark@gmail.com",
        status: "active",
        age: 16,
    },
    {
        id: 5,
        username: "Chris Hemsworth",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "chris_hemsworth@gmail.com",
        status: "passive",
        age: 22,
    },
    {
        id: 6,
        username: "Scarlett Johansson",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "scarlett_johansson@gmail.com",
        status: "active",
        age: 15,
    },
    {
        id: 7,
        username: "Christian Bale",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "christian_bale@gmail.com",
        status: "passive",
        age: 44,
    },
    {
        id: 8,
        username: "Tom Cruise",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "tom_cruise@gmail.com",
        status: "active",
        age: 36,
    },
    {
        id: 9,
        username: "Ben Kingsley",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "ben_kingsley@gmail.com",
        status: "pending",
        age: 65,
    },
    {   
        id: 10,
        username: "Tom Hanks",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "tom_hanks@gmail.com",
        status: "active",
        age: 65,
    },
    {
        id: 11,
        username: "John Wick",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        email: "john_wick@gmail.com",
        age: 35,
    },
    {
        id: 12,
        username: "Jamie Lannister",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "jamie_lannister@gmail.com",
        status: "passive",
        age: 42,
    },
    {
        id: 13,
        username: "Johnny Depp",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "johnny_depp@gmail.com",
        status: "pending",
        age: 45,
    },
    {
        id: 14,
        username: "Tony Stark",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "tony_stark@gmail.com",
        status: "active",
        age: 16,
    },
    {
        id: 15,
        username: "Chris Hemsworth",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "chris_hemsworth@gmail.com",
        status: "passive",
        age: 22,
    },
    {
        id: 16,
        username: "Scarlett Johansson",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "scarlett_johansson@gmail.com",
        status: "active",
        age: 15,
    },
    {
        id: 17,
        username: "Christian Bale",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "christian_bale@gmail.com",
        status: "passive",
        age: 44,
    },
    {
        id: 18,
        username: "Tom Cruise",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "tom_cruise@gmail.com",
        status: "active",
        age: 36,
    },
    {
        id: 19,
        username: "Ben Kingsley",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "ben_kingsley@gmail.com",
        status: "pending",
        age: 65,
    },
    {
        id: 20,
        username: "Tom Hanks",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "tom_hanks@gmail.com",
        status: "active",
        age: 65,
    },
];

export {
    userColumns,
    userRows
}
