import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';
import sgMail from '@sendgrid/mail';
import path from 'path';
import axios from 'axios';

const SENDGRID_API = "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";

sgMail.setApiKey(SENDGRID_API);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, appUrl } = req.body;

    try {
        const htmlContent = await axios.get(`${appUrl}/email_template.txt`);

        await sgMail.send({
            from: 'gustavomoura5555@uni9.edu.br',
            to: email,
            subject: '** CHAMADO ABERTO - DEV FULL **',
            html: String(htmlContent.data)
        })

        return res.status(200).end();
    } catch (error: any) {
        return res.status(400).json({ error: error.message });
    }
}