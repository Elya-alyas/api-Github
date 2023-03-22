const api = 'https://api.github.com/users/'


const search = document.querySelector('#search')
const form = document.querySelector('form')
const input = document.querySelector('#inp')
const output = document.querySelector('.output')


const searchUsers = async () => {
    let BaseURL = api + input.value
    const req = await fetch(BaseURL)
    const res = await req.json()
    render(res);
    console.log(res);
    input.value = ''
}

const render = (data) => {
    output.innerHTML = ''

    const card = document.createElement('div')
    card.classList.add('card')
    const profileSearch = document.createElement('a')
    profileSearch.href = data.html_url
    const avatar = document.createElement('img')
    avatar.src = data.avatar_url
    const userLogin = document.createElement('h2')
    userLogin.textContent = `Login: ${data.login}`

    const informationUsers = document.createElement('div')
    informationUsers.classList.add('informationUsers')

    const emailUsers = document.createElement('h3')
    if (data.email === null) {
        emailUsers.textContent = `email: Email not specified`
    } else {
        emailUsers.textContent = `email: ${data.email}`
    }

    const bioUsers = document.createElement('h3')
    if (data.bio === null) {
        bioUsers.textContent = `bio: No info in bio`
    } else {
        bioUsers.textContent = `bio: ${data.bio}`
    }

    const companyUsers = document.createElement('h3')
    if (data.company === null) {
        companyUsers.textContent = `company: Company name not specified`
    } else {
        companyUsers.textContent = `company: ${data.company}`
    }

    const createdUsers = document.createElement('h3')
    createdUsers.textContent = `created_at: ${data.created_at}`

    const followersUsers = document.createElement('h3')
    followersUsers.textContent = `followers: ${data.followers}`

    const profilefollowers = document.createElement('a')
    profilefollowers.href = data.followers_url

    const followingUsers = document.createElement('h3')
    followingUsers.textContent = `following: ${data.following}`

    const profilefollowing = document.createElement('a')
    profilefollowing.href = data.following_url


    const hireableUsers = document.createElement('h3')
    if (data.hireable === null) {
        hireableUsers.textContent = `hireable: No data on hireable`
    } else {
        hireableUsers.textContent = `hireable: ${data.hireable}`
    }

    const htmlUsers = document.createElement('h3')
    htmlUsers.textContent = `html_url: ${data.html_url}`

    const profileHtml = document.createElement('a')
    profileHtml.href = data.html_url

    const idUsers = document.createElement('h3')
    idUsers.textContent = `ID: ${data.id}`

    const locationUsers = document.createElement('h3')
    if (data.location === null) {
        locationUsers.textContent = `location: No info about location`
    } else {
        locationUsers.textContent = `location: ${data.location}`
    }

    const nameUsers = document.createElement('h3')
    if (data.name === null) {
        nameUsers.textContent = `name: No info about name`
    } else {
        nameUsers.textContent = `name: ${data.name}`
    }

    const nodeUsers = document.createElement('h3')
    nodeUsers.textContent = `node_id: ${data.node_id}`

    const OrganizUsers = document.createElement('h3')
    OrganizUsers.textContent = `organizations_url: ${data.organizations_url}`

    const profileOrganiz = document.createElement('a')
    profileOrganiz.href = data.organizations_url

    const gistsUsers = document.createElement('h3')
    gistsUsers.textContent = `public_gists: ${data.public_gists}`

    const reposUsers = document.createElement('h3')
    reposUsers.textContent = `public_repos: ${data.public_repos}`

    const receivedUsers = document.createElement('h3')
    receivedUsers.textContent = `received_events_url: ${data.received_events_url}`

    const profileReceived = document.createElement('a')
    profileReceived.href = data.received_events_url

    const repossUsers = document.createElement('h3')
    repossUsers.textContent = `repos_url: ${data.repos_url}`

    const profileRepos = document.createElement('a')
    profileRepos.href = data.repos_url

    const adminUsers = document.createElement('h3')
    adminUsers.textContent = `site_admin: ${data.site_admin}`

    const starredUsers = document.createElement('h3')
    starredUsers.textContent = `starred_url: ${data.starred_url}`

    const profileStarred = document.createElement('a')
    profileStarred.href = data.starred_url

    const subscriptionsUsers = document.createElement('h3')
    subscriptionsUsers.textContent = `subscriptions_url: ${data.subscriptions_url}`

    const profileSubscriptions = document.createElement('a')
    profileSubscriptions.href = data.subscriptions_url

    const twitterUsers = document.createElement('h3')
    if (data.twitter_username === null) {
        twitterUsers.textContent = `twitter_username: No info about twitter`
    } else {
        twitterUsers.textContent = `twitter_username: ${data.twitter_username}`
    }

    const typeUsers = document.createElement('h3')
    typeUsers.textContent = `type: ${data.type}`

    const updatedUsers = document.createElement('h3')
    updatedUsers.textContent = `updated_at: ${data.updated_at}`

    const urlUsers = document.createElement('h3')
    urlUsers.textContent = `url: ${data.url}`

    const profileUrl = document.createElement('a')
    profileUrl.href = data.url

    // append
    profileSearch.append(avatar)
    profilefollowers.append(followersUsers)
    profilefollowing.append(followingUsers)
    profileHtml.append(htmlUsers)
    profileOrganiz.append(OrganizUsers)
    profileReceived.append(receivedUsers)
    profileRepos.append(repossUsers)
    profileStarred.append(starredUsers)
    profileSubscriptions.append(subscriptionsUsers)
    profileUrl.append(urlUsers)
    card.append(profileSearch, userLogin)
    informationUsers.append(emailUsers, bioUsers, companyUsers, createdUsers, profilefollowers, profilefollowing, hireableUsers, profileHtml, idUsers, locationUsers, nameUsers, nodeUsers, profileOrganiz, gistsUsers, reposUsers, profileReceived, profileRepos, adminUsers, profileStarred, profileSubscriptions, twitterUsers, typeUsers, updatedUsers, profileUrl)
    output.append(card, informationUsers)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    searchUsers()
})


