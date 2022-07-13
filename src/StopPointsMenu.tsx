import './StopPointsMenu.css';
import data from './data.json';
import { StopPoint } from './interface/stop-point.interface';
import { StopPointCard } from './components/stop-point-card/StopPointCard';


export function StopPointsMenu()
{
    const stop_points = data as StopPoint[];

    return (
        <div className="stop-points-menu">
            {
                stop_points.map(
                    (stop_point) =>
                    {
                        return (<StopPointCard stop_point={stop_point} />);
                    }
                )
            }
        </div>
    );
}
