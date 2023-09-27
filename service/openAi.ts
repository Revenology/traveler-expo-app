import { OpenAI } from 'openai';
import { ChatCompletionCreateParams } from 'openai/resources/chat';

const openai = new OpenAI({
	apiKey: 'APIKey goes here',
	organization: 'test',
});

export const countryDataPrompt = (tripData: object): string => {
	return `Create a trip with the following parameters from this json object and return a json object

    ${tripData.toString()}
    `;
};

export const createBody = (tripData: JSON): ChatCompletionCreateParams => {
	return {
		stream: true,
		model: 'gpt-3.5-turbo',
		messages: [
			{
				role: 'system',
				content: 'You are a virtual assistant responsible for creating plans',
			},
			{
				role: 'system',
				content: 'Return response in a json object that looks like xyz',
			},
			{ role: 'user', content: countryDataPrompt(tripData) },
		],
		max_tokens: 10,
	};
};

export const response = (tripData: JSON) => {
	return openai.chat.completions.create(createBody(tripData));
};
