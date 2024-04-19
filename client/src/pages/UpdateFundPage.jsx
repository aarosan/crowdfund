import { useParams } from 'react-router-dom';
import "../../src/App.css";
import { useQuery, useMutation} from '@apollo/client';
import { GET_FUND_BY_ID } from '../utils/queries';
import { UPDATE_FUND } from '../utils/mutations';
import { useEffect } from 'react';

function UpdateFund () {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_FUND_BY_ID, {
        variables: { fundId: id },
    });
    const [updateFund] = useMutation(UPDATE_FUND);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :{error.message}</p>;

    if (!data || !data.getFundById) {
        return <p>No fund found</p>;
    }

    const { getFundById: fund } = data;

    const handleUpdate = async (event) => {
        event.preventDefault();

        const name = event.target.elements.name.value;
        const description = event.target.elements.description.value;
        const goal = parseFloat(event.target.elements.goal.value);
        console.log("updating fund with:", name, description, goal, id)

        try {
            const response= await updateFund({
                variables: { fundId: id, name, description, goal },
            });
            console.log("mutation response:", response)
            console.log('Fund updated successfully');
            window.location.replace(`/user`);

        } catch (error) {
            console.error('Error updating fund:', error);
        }
    };

    return (
    <>
    <div className="detailCard">
        <h1 className="detailHeader">Fund Details</h1>
        <form className="updateForm" onSubmit={handleUpdate}>
                <div className="detailTitle">
                    <input type="text" name="name" defaultValue={fund.name} />
                </div>
                <div className="description">
                    <input type="text" name="description" defaultValue={fund.description} />
                </div>
                <div className="goal">
                    <input type="number" name="goal" defaultValue={fund.goal} />
                </div>
                <button type="submit" className="updateBtn">Submit Updated Details</button>
        </form>
    </div>
    </>

    );
}

export default UpdateFund;