import { Title } from '@/components/demo/Title';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';
import { MoonStar, SunMoon } from 'lucide-react';


const devData = [
    {
        name: 'Object-Oriented Programming (OOP)',
        description: 'Learn the principles of Object-Oriented Programming and how to apply them in software development.',
        route: '/oop'
    },
    {
        name: 'Object-Relational Mapping (ORM)',
        description: 'Understand how to use ORM frameworks to interact with databases using object-oriented paradigms.',
        route: '/orm'
    },
    {
        name: 'Search Query Optimization',
        description: 'Learn techniques for optimizing search queries to improve performance and accuracy.',
        route: '/search-query'
    },
    {
        name: 'HATEOAS (Hypermedia as the Engine of Application State)',
        description: 'Understand the HATEOAS constraint of REST and how to implement it in your APIs.',
        route: '/hateoas'
    },
    {
        name: 'Data Validation Techniques',
        description: 'Learn best practices for validating data in applications to ensure integrity and security.',
        route: '/data-validation'
    },
    {
        name: 'Email Integration',
        description: 'Understand how to integrate email functionalities in applications, including sending and receiving emails.',
        route: '/email-integration'
    },
    {
        name: 'Task Scheduler',
        description: 'Learn how to implement scheduling mechanisms to automate tasks in your applications.',
        route: '/task-scheduler'
    },
    {
        name: 'File Transfer Protocols',
        description: 'Understand different file transfer protocols and how to implement them in your applications.',
        route: '/file-transfer'
    },
    {
        name: 'Document Processing',
        description: 'Learn techniques for processing and managing documents in applications.',
        route: '/document-processing'
    },
    {
        name: 'Audit Trail Implementation',
        description: 'Understand how to create and maintain an audit trail for tracking changes in applications.',
        route: '/audit-trail'
    },
    {
        name: 'Authentication Mechanisms',
        description: 'Learn about various authentication methods and how to implement them in your applications.',
        route: '/authentication'
    },
    {
        name: 'Cryptography Basics',
        description: 'Understand the fundamentals of cryptography and how to secure data in applications.',
        route: '/cryptography'
    },
    {
        name: 'Thread Management',
        description: 'Learn about managing threads in applications for concurrent processing and performance optimization.',
        route: '/thread-management'
    },
    {
        name: 'Testing Strategies',
        description: 'Understand different testing strategies and how to implement them to ensure application quality.',
        route: '/testing-strategies'
    },
    {
        name: 'Notification and Messaging Systems',
        description: 'Learn how to implement notification and messaging systems in applications for better user engagement.',
        route: '/notification-messaging'
    },
    {
        name: 'Caching Strategies',
        description: 'Utilize caching mechanisms like Redis to speed up access to frequently used data.',
        route: '/caching'
    },
    {
        name: 'Load Balancing Techniques',
        description: 'Learn how to distribute traffic across multiple servers to enhance performance and availability.',
        route: '/load-balancing'
    },
    {
        name: 'API Rate Limiting',
        description: 'Understand how to limit the number of requests to APIs to prevent abuse.',
        route: '/api-rate-limiting'
    },
    {
        name: 'Distributed Systems Concepts',
        description: 'Explore the principles of distributed systems for highly scalable applications, such as microservices and cloud computing.',
        route: '/distributed-systems'
    },
    {
        name: 'DevOps Integration',
        description: 'Automate development and deployment processes with CI/CD, containerization (Docker), and orchestration (Kubernetes).',
        route: '/devops-integration'
    },
    {
        name: 'Microservices Architecture',
        description: 'Learn how to break down large applications into small, independent services with specific functions.',
        route: '/microservices-architecture'
    },
    {
        name: 'CI/CD Pipeline Implementation',
        description: 'Automate deployment processes using Continuous Integration (CI) and Continuous Deployment (CD) with tools like Jenkins, GitLab CI, or GitHub Actions.',
        route: '/ci-cd-pipeline'
    },
    {
        name: 'Monitoring and Logging Tools',
        description: 'Utilize tools like Prometheus for monitoring and the ELK Stack (Elasticsearch, Logstash, Kibana) for logging and log analysis at scale.',
        route: '/monitoring-logging'
    },
    {
        name: 'Dependency Injection',
        description: 'Manage dependencies between objects through dependency injection techniques, such as @Injectable in Spring Boot or IServiceCollection in .NET Core.',
        route: '/dependency-injection'
    }
];

interface CardData {
    name: string;
    description: string;
    route: string;
}

export const Home = () => {
    const { theme, toggleTheme } = useTheme();

    const renderCards = (data: CardData[]) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto">
            {data.map((item) => (
                <div key={item.route} className="bg-card p-5 border rounded-lg shadow-md w-full">
                    <h3 className="text-lg font-bold text-card-foreground">{item.name}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    <Link to={item.route} className="mt-2 inline-block">
                        <Button>View Details</Button>
                    </Link>
                </div>
            ))}
        </div>
    );

    return (
        <div className="container h-full py-10">
            <div className="flex py-5 mb-10 justify-between items-center">
                <Title name="Back-End  Developers" />
                <Button variant="outline" onClick={toggleTheme} className="h-10">
                    {theme === 'dark' ? <MoonStar /> : <SunMoon />}
                </Button>
            </div>

            <section className="mb-10">
                <h2 className="text-2xl font-bold py-10">Backend Topics </h2>
                {renderCards(devData)}
            </section>


        </div>
    );
};

export default Home;