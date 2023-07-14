import { useEffect } from "react";
import useLoader from "../hooks/useLoader";

function Shodan({ targets, baseURI = "https://internetdb.shodan.io/" }) {
    const [state, actions] = useLoader();

    useEffect(() => {
        const controller = new AbortController();
        actions.loading();
        (async function getData() {
            try {
                const jobs = [...targets.keys()].map((target) => fetch(`${baseURI}${target}`).then(res => res.json()).catch(({message}) => message));
                const res = await Promise.allSettled(jobs);
                actions.success(res);
            } catch (error) {
                actions.error(error);
            }
        }())
        return () => controller.abort();
    }, [actions, baseURI, targets]);

    const { status, result, error } = state;
    
    if (status === "INIT") {
        return (
            <div className="alert alert-info" role="alert">
             app initializing
            </div>
        )
    }
    if (status === "LOADING") {
        return (<div className="d-flex justify-content-center mt-8">
                    <div className="spinner-grow text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
        )
    }
    if (status === "ERROR") {
        return (
            <div className="alert alert-danger" role="alert">
                {error}
            </div>
        )
    }
    return (
        <table className="table table-striped table-hover table-primary">
            <thead>
                <tr>
                    <th>IP</th>
                    <th>PORTS</th>
                    <th>CPES</th>
                    <th>HOSTNAMES</th>
                    <th>TAGS</th>
                    <th>VULNS</th>
                </tr>
            </thead>
            <tbody>
                    {result && result.filter(({value}) => value.ip).map(({value}) => {
                        return (<tr key={value.ip}>
                            <td>{value.ip}</td>
                            <td>{value.ports.join('-')}</td>
                            <td>{value.cpes.join('-')}</td>
                            <td>{value.hostnames.join('-')}</td>
                            <td>{value.tags.join(';')}</td>
                            <td>{value.vulns.join(';')}</td>
                        </tr>)
                    })}
            </tbody>
        </table>
    )
}

export default Shodan;