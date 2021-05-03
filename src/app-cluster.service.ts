import * as cluster from 'cluster'; 
import * as os from 'os'; 
import { Injectable } from '@nestjs/common';

const numberOfCpuCores : number = os.cpus().length ; 
@Injectable()

export default class AppClusterService {

    static clusterize(callback: Function) { 
        try {
        if (cluster.isMaster) {
            console.log(`Master server started with ${process.pid}`); 
            console.log(`CPUS Length :: ${numberOfCpuCores}`); 
            for(let i =0 ; i < numberOfCpuCores ; i++) {
                cluster.fork(); 
            }
        }
        else {
            console.log(`Worker started with ${process.pid}`);
            callback() ;
        }
        }
        catch (error) {
            console.log('ERROR ::', error); 
        }
    }
}
