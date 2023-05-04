import {FC} from 'react';
import Converter from "../components/converter/converter";

interface ConverterPageProps {
}

export const ConverterPage: FC<ConverterPageProps> = ({}: ConverterPageProps) => {
    return <div>
        <Converter />
    </div>
}
