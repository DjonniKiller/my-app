import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../data/users/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: userID => {dispatch(followAC(userID))},
        unfollow: userID => {dispatch(unfollowAC(userID))},
        setUsers: users => {dispatch(setUsersAC(users))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)