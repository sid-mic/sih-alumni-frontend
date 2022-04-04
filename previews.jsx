import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import AdminStoriesTable from "./components/admin/AdminStoriesTable";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/AdminStoriesTable">
                <AdminStoriesTable/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;