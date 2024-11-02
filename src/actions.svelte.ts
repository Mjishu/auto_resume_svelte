
interface Personal {
    firstName: string;
    lastName: string;
    email: string;
}

interface Work {
    title: string;
    company: string;
    startDate: string | number;
    endDate: string | number;
    description: string;
    currentlyEmployed: boolean;
}

interface School {
    institution: string;
    schoolingLevel: string;
    startDate: string | number;
    endDate: string | number;
    graduated: boolean;
}

export function handleSubmit(e: SubmitEvent, personalInformation: Personal, workExperience: Work[], schoolExperience: School[]) {
    e.preventDefault();
    console.log($state.snapshot(personalInformation), $state.snapshot(workExperience), $state.snapshot(schoolExperience));
}