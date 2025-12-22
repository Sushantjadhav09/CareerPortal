import {
  IconHeart,
  IconMapPin,
  IconMail,
  IconPhone,
  IconWorld,
  IconDownload
} from '@tabler/icons-react';
import { Badge, Button, Divider } from '@mantine/core';

type Applicant = {
  applicantId: number;
  name: string;
  email: string;
  phone: number;
  website: string;
  resume: string;
  coverLetter: string;
  timestamp: string;
  applicationStatus: string;
};

const ApplicantCard = ({ applicant }: { applicant: Applicant }) => {
    console.log("ApplicantCard props 👉", applicant);

  if (!applicant) return null;
  

  return (
    <div className="bg-gray-700 p-4 w-[440px] flex flex-col gap-3 rounded-xl
      hover:shadow-[0_0_5px_1px_yellow] shadow-amber-400">

      {/* Header */}
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <div className="p-3 bg-gray-600 rounded-full text-xl font-bold text-amber-300">
            {applicant.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <div className="font-semibold text-lg capitalize">
              {applicant.name}
            </div>
            <div className="text-xs text-gray-300">
              Applied on {new Date(applicant.timestamp).toLocaleDateString()}
            </div>
          </div>
        </div>

        <IconHeart className="text-gray-300 hover:text-red-400 cursor-pointer" />
      </div>

      {/* Status */}
      <div>
        <Badge color="yellow" variant="light">
          {applicant.applicationStatus}
        </Badge>
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-2 text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <IconMail size={16} /> {applicant.email}
        </div>

        <div className="flex items-center gap-2">
          <IconPhone size={16} /> {applicant.phone}
        </div>

        <div className="flex items-center gap-2">
          <IconWorld size={16} />
          <a
            href={applicant.website}
            target="_blank"
            className="text-amber-300 hover:underline"
          >
            Portfolio
          </a>
        </div>
      </div>

      <Divider size="xs" color="gray" />

      {/* Cover Letter */}
      <p className="text-xs text-gray-300 line-clamp-3">
        {applicant.coverLetter}
      </p>

      <Divider size="xs" color="gray" />

      {/* Actions */}
      <div className="flex gap-2">
        <Button
          color="yellow"
          variant="light"
          fullWidth
          leftSection={<IconDownload size={16} />}
          onClick={() => {
            console.log("Download resume for ID:", applicant.applicantId);
          }}
        >
          Resume
        </Button>

        <Button color="yellow" variant="outline" fullWidth>
          Message
        </Button>
      </div>
    </div>
  );
};

export default ApplicantCard;
