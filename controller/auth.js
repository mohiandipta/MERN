exports.users = (req, res) => {
    res.json({
        users: [
            {
                id: 1,
                name: 'Mohian',
                age: 23,
                company: 'Akij',
                salary: '20,000'
            },
            {
                id: 2,
                name: 'Dip',
                age: 17,
                company: 'Student',
                salary: 'N/A'
            }
        ]
    })
}