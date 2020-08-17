import React from "react";
import { useAuth0 } from "./auth/use-auth0";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    // const [userMetadata, setUserMetadata] = useState(null);

    // useEffect(() => {
    //     const getUserMetadata = async () => {

    //         if (isAuthenticated && user) {
    //             try {
    //                 console.log('User scopes', { scopes: user.api_scopes });
    //                 const accessToken = await getAccessTokenSilently({
    //                     audience: `blah`,
    //                     // scope: user.api_scopes.join(' '),
    //                 });

    //                 const userDetailsByIdUrl = `some url`;

    //                 const metadataResponse = await fetch(userDetailsByIdUrl, {
    //                     headers: {
    //                         Authorization: `Bearer ${accessToken}`,
    //                     },
    //                 });

    //                 const user_metadata = await metadataResponse.json();

    //                 setUserMetadata(user_metadata);
    //             } catch (e) {
    //                 console.log(JSON.stringify(e));
    //             }
    //         }
    //     };

    //     // getUserMetadata();
    // }, [getAccessTokenSilently, isAuthenticated, user]);

    if (isAuthenticated) {
        return (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                {/* <p>{JSON.stringify(userMetadata)}</p> */}
            </div>
        );
    }

    return null;
};

export default Profile;