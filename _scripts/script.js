const state = {
    profile: {
        name: '',
        date: '',
        ra: ''
    },
    repositories: [],
};

// fetch("http://localhost:3000/users").then(response => response).then(data => console.log(data))

setTimeout(() => {
    axios.get("http://localhost:3000/profile").then((response) => {
        const data = response.data;

        // data.map(user => {
        //     state.users.push(user);
        // })

        state.profile = data;

        $('#profile-name').html(state.profile.name);
        $('#profile-date').html(state.profile.date);
        $('#profile-ra').html(state.profile.ra);
    });

    axios.get("http://localhost:3000/repositories").then((response) => {
        const data = response.data;

        // data.map(user => {
        //     state.users.push(user);
        // })

        state.repositories = data;
    });

    state.loading = false;
    $("#modal").removeClass("modal").addClass("hidden");   
}, 1000)
