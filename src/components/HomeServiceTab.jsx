"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HomeServiceTab = () => {
    return (
        <div className="tab row gx-5 items-center" data-tab-group="integration-tab">
          <div className="lg:col-7 lg:order-2">
            <Tabs defaultValue="item-0">
              {/* Tab Content */}
              <div className="flex">
                <div className="lg:w-1/4">
                  {/* TabsList should be on the left, taking 1/4 of the width */}
                  <TabsList className="tab-nav -ml-4 mt-8 border-b-0 flex flex-col gap-4" aria-label="Tabs">
                    <TabsTrigger
                      value="item-0"
                      className="tab-nav-item active text-left py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                    >
                      <img className="mr-3" src="/images/icons/drop.svg" alt="Drop Icon" />
                      Habit building essential choose habit
                    </TabsTrigger>
                    <TabsTrigger
                      value="item-1"
                      className="tab-nav-item text-left py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                    >
                      <img className="mr-3" src="/images/icons/brain.svg" alt="Brain Icon" />
                      Get an overview of Habit Calendars
                    </TabsTrigger>
                    <TabsTrigger
                      value="item-2"
                      className="tab-nav-item text-left py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                    >
                      <img className="mr-3" src="/images/icons/timer.svg" alt="Timer Icon" />
                      Start building with Habitify platform
                    </TabsTrigger>
                  </TabsList>
                </div>
    
                <div className="flex-1 pl-6">
                  {/* TabsContent */}
                  <TabsContent value="item-0" className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-300 dark:border-gray-700">
                    <img className="w-full object-contain" src="/images/sells-by-country.png" alt="Sells by Country" />
                  </TabsContent>
                  <TabsContent value="item-1" className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-300 dark:border-gray-700">
                    <img className="w-full object-contain" src="/images/collaboration.png" alt="Collaboration" />
                  </TabsContent>
                  <TabsContent value="item-2" className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-300 dark:border-gray-700">
                    <img className="w-full object-contain" src="/images/sells-by-country.png" alt="Sells by Country" />
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
    
          <div className="mt-6 lg:col-5 lg:order-1 lg:mt-0">
            <div className="text-container">
              <h2 className="lg:text-4xl">
                Prevent failure from impacting your reputation
              </h2>
              <p className="mt-4">
                Our platform helps you build secure onboarding authentication
                experiences that retain and engage your users. We build the
                infrastructure, you can.
              </p>
            </div>
          </div>
        </div>
      );
    };
    

export default HomeServiceTab;
